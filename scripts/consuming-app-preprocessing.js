const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const glob = require('glob');
const basePfStylesheet = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly-base.css');
const pfStylesheetsBaseGlob = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,layouts,utilities}');
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';
const problematicFiles = [
  path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/components/BackgroundImage/ie11-background-image.css')
];

// build an array of global variables
function getGlobalVarDefinitions(stylesheetPath) {
  let fullPfStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  let startToken = '--pf-global--';
  return fullPfStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// build an array of local variables
function getLocalVarDefinitions(stylesheet) {
  let singleStylesheet = stylesheet.match(/[^\r\n]+/g);
  const startToken = '--pf-';
  return singleStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

function fixAssetPaths(files) {
  // fix path discrepancy between .pf-c-background-image and font definitions
  files.map(filePath => {
    const startingCss = fs.readFileSync(filePath, 'utf8').match(/[^\r\n]+/g);
    const cssWithFixedPaths = startingCss.map(
      line => {
        const re = new RegExp('../../assets', 'g');
        return (line.includes('../../assets')) ? line.replace(re, './assets') : line;
      }).join('\n');

    // update these files in place
    fs.writeFileSync(
      filePath,
      cssWithFixedPaths
    );
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

function transform(stylesheet) {
  const globalVars = getGlobalVarDefinitions(basePfStylesheet).join('\n');
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const basePf = fs.readFileSync(basePfStylesheet, 'utf8');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n${basePf} \n\n${stylesheet}`;
  return transformVars(newStylesheet)
    .then(staticStylesheet => transformGrid(staticStylesheet))
    .catch(error => {
      console.log('error in the transform pipeline', error);
    });
}

function getStylesheetPaths(baseGlob) {
  return new Promise((resolve, reject) => {
    const globPattern = `${baseGlob}/**/ie11-*.css`;
    glob(globPattern, function (err, files) {
      if (err) {
        reject(`Error fetching glob: ${globPattern}`);
      }
      const allFiles = files.concat(myAppStylesheetPath);
      const componentsWeDoNotWant = ['Table', 'Login'];
      const selectedStylesheets = componentsWeDoNotWant.reduce((acc, curExclude) => acc.filter(el => !el.includes(curExclude)), allFiles);
      resolve(selectedStylesheets);
    });
  });
}

fixAssetPaths(problematicFiles);

getStylesheetPaths(pfStylesheetsBaseGlob)
  .then(files => concat(files))
  .then(concatCss => transform(concatCss))
  .then(ie11ReadyStylesheet => {
    fs.writeFileSync(
      path.resolve(__dirname, toPath),
      ie11ReadyStylesheet
    );

    // copy assets into local directory where our stylesheets can find them
    const sourceAssetsDir = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/assets');
    const newAssetDir = path.resolve(__dirname, '../src/App/assets');

    fse.copy(sourceAssetsDir, newAssetDir, function (err) {
      if (err) {
        console.error(err);
      }
    });
  })
  .catch(error => {
    console.log('There was an error: ', error);
    process.exit(1);
  });
