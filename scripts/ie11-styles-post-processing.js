const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const glob = require('glob');
const basePfStylesheet = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly-base.css');
const pfComponentPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,utilities,layouts}');
// TODO: see how we can handle both pf and app stylesheets together
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';

// build an array of global variables
// TODO: this only needs to be ran once, not for every file we want to process
function getGlobalVarDefinitions(stylesheetPath) {
  let fullPfStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  let startToken = '--pf-global--';
  return fullPfStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// build an array of local variables
function getLocalVarDefinitions(stylesheetPath) {
  let singleStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  const startToken = '--pf-';
  return singleStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// transforms variables to static values
// and modern grid definitions into legacy
function postProcess(stylesheet) {
  return postcss([
    presetEnv({
      stage: 0,
      features: {
        'custom-properties': false
      },
      autoprefixer: { grid: 'autoplace' }
    }),
    cssvariables()
  ])
    // no need to write to disk here, it's all in memory and needs another transform
    .process(stylesheet, {
      from: undefined,
      to: undefined
    })
    .then(result => {
      return result.css;
    })
    .catch(error => {
      console.log('Problem transforming this stylesheet: ');
    });
}

function prepForTransform(stylesheet) {
  const curStylesheet = fs.readFileSync(stylesheet, 'utf8');
  const pfBase = getGlobalVarDefinitions(basePfStylesheet).join('\n');
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const newStylesheet = `:root {\n${pfBase}\n ${localVars} } \n\n${curStylesheet}`;

  // debugging stuffs
  let fileName = path.basename(stylesheet);
  let ie11StagedFilePath = path.dirname(stylesheet) + path.sep + `staged-${fileName}`;
  fs.writeFileSync(
    ie11StagedFilePath,
    newStylesheet
  );

  return postProcess(newStylesheet);
}

// produces an IE11 compatible version of a given stylesheet
const processStylesheet = stylesheet => {
  return new Promise(resolve => {
    prepForTransform(stylesheet).then((ie11ReadyStylesheet) => {
      let fileName = path.basename(stylesheet);
      let ie11ReadyFilePath = path.dirname(stylesheet) + path.sep + `ie11-${fileName}`;

      // write the ie11 ready css file to disk right beside each pf thingie
      fs.writeFileSync(
        ie11ReadyFilePath,
        ie11ReadyStylesheet
      );
      resolve();
    });
  }
  );
};

// returns a promise which resolves to an array of file paths
// to stylesheets which need to be processed
const getComponentStylesheets = () => new Promise((resolve) => {
  glob(`${pfComponentPath}/**/*.css`, function (err, files) {
    if (err) {
      process.exit(1);
    }
    resolve(files);
  });
});

getComponentStylesheets()
  .then(files => {
    files.reduce((prevPromise, nextStylesheet) => prevPromise.then(() => processStylesheet(nextStylesheet)), Promise.resolve());
  });
