const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const glob = require('glob');
const basePfStylesheet = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly-base.css');
const pfComponentPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,utilities,layouts}');

// build an array of global variables
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

// transforms modern grid definitions into legacy IE11 grid definitions
function transformGrid(staticStylesheet) {
  return postcss([
    presetEnv({
      stage: 0,
      autoprefixer: { grid: 'autoplace' }
    })
  ])
    .process(staticStylesheet, {
      from: undefined,
      to: undefined
    })
    .then(oldSchoolStylesheetFormat => oldSchoolStylesheetFormat.css)
    .catch(error => {
      console.log('Problem transforming grid in stylesheet: ', error);
    });
}

// transforms variables to static values
function transformVars(stylesheet) {
  return postcss([
    presetEnv({
      stage: 0,
      features: {
        'custom-properties': false
      }
    }),
    cssvariables()
  ])
    .process(stylesheet, {
      from: undefined,
      to: undefined
    })
    .then(result => result.css)
    .catch(error => {
      console.log('Problem transforming variables in stylesheet: ', error);
    });
}

function writeFileToDisk(file, stylesheetPath) {
  let fileName = path.basename(stylesheetPath);
  let ie11ReadyFilePath = path.dirname(stylesheetPath) + path.sep + `ie11-${fileName}`;

  fs.writeFileSync(
    ie11ReadyFilePath,
    file
  );
}

const globalVars = getGlobalVarDefinitions(basePfStylesheet).join('\n');

function transform(stylesheetPath) {
  const localVars = getLocalVarDefinitions(stylesheetPath).join('\n');
  const curStylesheet = fs.readFileSync(stylesheetPath, 'utf8');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n\n${curStylesheet}`;

  return transformVars(newStylesheet)
    .then(stylesheet => transformGrid(stylesheet));
}

function processStylesheet(stylesheetPath) {
  return transform(stylesheetPath)
    .then(ie11ReadyStylesheet => writeFileToDisk(ie11ReadyStylesheet, stylesheetPath));
}

function getComponentStylesheets() {
  return new Promise(resolve => {
    glob(`${pfComponentPath}/**/*.css`, function (err, files) {
      if (err) {
        process.exit(1);
      }
      resolve(files);
    });
  });
}

getComponentStylesheets()
  .then(files => {
    files.reduce((prevPromise, nextStylesheet) =>
      prevPromise.then(() => processStylesheet(nextStylesheet)), Promise.resolve());
  });
