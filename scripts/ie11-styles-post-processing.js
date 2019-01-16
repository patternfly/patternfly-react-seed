const { getStylesheetPaths, transform } = require('./utils');
const fs = require('fs');
const path = require('path');
const pfStylesheetsGlob = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,utilities,layouts}/**/*.css');

function writeFileToDisk(file, stylesheetPath) {
  let fileName = path.basename(stylesheetPath);
  let ie11ReadyFilePath = path.dirname(stylesheetPath) + path.sep + `ie11-${fileName}`;

  fs.writeFileSync(
    ie11ReadyFilePath,
    file
  );
}

function processStylesheet(stylesheetPath) {
  const stylesheet = fs.readFileSync(stylesheetPath, 'utf8');
  return transform(stylesheet, true)
    .then(ie11ReadyStylesheet => writeFileToDisk(ie11ReadyStylesheet, stylesheetPath));
}

getStylesheetPaths(pfStylesheetsGlob)
  .then(files => {
    files.reduce((prevPromise, nextStylesheet) =>
      prevPromise.then(() => processStylesheet(nextStylesheet)), Promise.resolve());
  });
