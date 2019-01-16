const fs = require('fs');
const path = require('path');
const glob = require('glob');
const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const basePfStylesheet = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly-base.css');

// [utils] build an array of global variables
function getGlobalVarDefinitions(stylesheetPath) {
  let fullPfStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  let startToken = '--pf-global--';
  return fullPfStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// [utils] build an array of local variables
function getLocalVarDefinitions(stylesheet) {
  let singleStylesheet = stylesheet.match(/[^\r\n]+/g);
  const startToken = '--pf-';
  return singleStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// [utils] transforms variables to static values
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

// [utils] transforms modern grid definitions into legacy IE11 grid definitions
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

const globalVars = getGlobalVarDefinitions(basePfStylesheet).join('\n');

// [utils] transforms a string of css into an ie11 ready format
function transform(stylesheet, excludeBase) {
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const basePf = (excludeBase) ? '' : fs.readFileSync(basePfStylesheet, 'utf8');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n${basePf} \n\n${stylesheet}`;
  return transformVars(newStylesheet)
    .then(staticStylesheet => transformGrid(staticStylesheet))
    .catch(error => {
      console.log('error in the transform pipeline', error);
    });
}

// globPattern is a fileGlob that points to patternfly stylesheet we want to include
// for example: path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,utilities,layouts}/**/*.css');
// excludes is an array of stylesheets to exclude, use the Uppercase directory name
// for example: ['Table', 'Stack', 'BoxShadow']
// appStylesheets is an array of abs paths to stylesheets to be appended to the end of the transform
function getStylesheetPaths(basePfCssGlob, excludes = [], appStylesheets = []) {
  return new Promise((resolve, reject) => {
    glob(basePfCssGlob, function (err, files) {
      if (err) {
        reject(`Error fetching glob: ${basePfCssGlob}`);
      }
      const allFiles = files.concat(appStylesheets);
      const selectedStylesheets = excludes.reduce((acc, curExclude) => acc.filter(el => !el.includes(curExclude)), allFiles);
      resolve(selectedStylesheets);
    });
  });
}

module.exports = {
  getGlobalVarDefinitions,
  getLocalVarDefinitions,
  getStylesheetPaths,
  globalVars,
  transform,
  transformGrid,
  transformVars
};
