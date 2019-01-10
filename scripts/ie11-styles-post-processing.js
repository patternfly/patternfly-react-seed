const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const glob = require('glob');
const pfStylesheetPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly.css');
const pfComponentPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,layouts,utilities}');
// TODO: see how we can handle both pf and app stylesheets together
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';

// remove the closing bracket from variable definitions where found
function cleanup(variables) {
  return variables.map(v => {
    return (v.endsWith(`}`)) ? v.replace('}', '') : v;
  });
}

// build an array of global variables
// TODO: this only needs to be ran once, not for every file we want to process
function getGlobalVarDefinitions(css) {
  let fullPfStylesheet = fs.readFileSync(pfStylesheetPath, 'utf8');
  let vars;
  vars = cleanup(cleanup(fullPfStylesheet.match(/[^\r\n]+/g).filter(el => el.trim().substring(0, 13) === '--pf-global--')));
  return vars;
}

// build an array of local variables
function getLocalVarDefinitions(stylesheetPath) {
  // console.log('need to grab all vars defined in: ', stylesheetPath);
  let singlePfStylesheet = fs.readFileSync(stylesheetPath, 'utf8');
  let styleSheetAsArray = cleanup(cleanup(singlePfStylesheet.match(/[^\r\n]+/g)));
  let vars = styleSheetAsArray.filter(el => el.trim().substring(0, 5) === '--pf-');
  return vars;
}

// transforms variables to static values
function transformVariables(stylesheet) {
  // console.log('transformVariables before: ', stylesheet);
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
      // console.log('transformVariables after: ', result.css);
      return result.css;
    }); // return only the static css for next step of the process
}

// transforms modern grid definitions into legacy IE11 grid definitions
// function transformGrid(staticStylesheet) {
//   return postcss([
//     presetEnv({
//       stage: 0,
//       autoprefixer: { grid: 'autoplace' }
//     })
//   ])
//     .process(staticStylesheet, {
//       from: undefined,
//       to: undefined
//     })
//     .then(oldSchoolStylesheetFormat => oldSchoolStylesheetFormat.css);
// }

function doTheTransform(stylesheet) {
  const nextStylesheet = fs.readFileSync(stylesheet, 'utf8');
  const globalVars = getGlobalVarDefinitions(stylesheet).join('\n');
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n\n${nextStylesheet}`;

  // debugging stuffs
  // let fileName = path.basename(stylesheet);
  // let ie11StagedFilePath = path.dirname(stylesheet) + path.sep + `ie11-stage-${fileName}`;
  // fs.writeFileSync(
  //   ie11StagedFilePath,
  //   newStylesheet
  // );

  return transformVariables(newStylesheet)
    .then(stylesheet => {
      // processing these separately may not be necessary afterall
      // return transformGrid(stylesheet);
      return stylesheet;
    })
    .then(oldSchoolStylesheet => {
      return oldSchoolStylesheet;
    });
}

// produces an IE11 compatible version of a given stylesheet
const processStylesheet = stylesheet => {
  return new Promise(resolve => {
    doTheTransform(stylesheet).then((ie11ReadyStylesheet) => {
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
