const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const concat = require('concat');
const { getStylesheetPaths, transform } = require('@patternfly/patternfly-next/scripts/ie-conversion-utils');
const pfStylesheetsGlob = path.resolve(__dirname, './node_modules/@patternfly/patternfly-next/{components,layouts,utilities}/**/*.css');
const patternflyBasePath = path.resolve(__dirname, './node_modules/@patternfly/patternfly-next/patternfly-base.css');
const myAppStylesheetPath = path.resolve(__dirname, './src/App/app.css');
const toPath = './src/App/pf-ie11.css';
const filesThatNeedPathAdjustments = [
  path.resolve(__dirname, './node_modules/@patternfly/patternfly-next/components/BackgroundImage/background-image.css')
];

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

fixAssetPaths(filesThatNeedPathAdjustments);

const stylesheetsToExclude = ['Table', 'Login'];

getStylesheetPaths(pfStylesheetsGlob, stylesheetsToExclude, [myAppStylesheetPath])
  .then(files => concat(files))
  .then(concatCss => transform(concatCss, patternflyBasePath))
  .then(ie11ReadyStylesheet => {
    fs.writeFileSync(
      path.resolve(__dirname, toPath),
      ie11ReadyStylesheet
    );

    // copy assets into local directory where our stylesheets can find them
    const sourceAssetsDir = path.resolve(__dirname, './node_modules/@patternfly/patternfly-next/assets');
    const newAssetDir = path.resolve(__dirname, './src/App/assets');

    fse.copy(sourceAssetsDir, newAssetDir, function (error) {
      if (error) {
        throw new Error(error);
      }
    });
  })
  .catch(error => {
    throw new Error(error);
  });
