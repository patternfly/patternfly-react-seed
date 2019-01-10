const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const pfStylesheetPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly.css');
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';

function cleanup(variables) {
  // remove the closing bracket from variable definitions where found
  return variables.map(v => {
    return (v.endsWith(`}`)) ? v.replace('}', '') : v;
  });
}

function getVarDefinitions(css) {
  // build an array of variables by looking for which lines start with patternfly namespace
  // cleanup() twice because some entries end in two } }, this is only POC.. don't judge me :)
  return cleanup(cleanup(css.match(/[^\r\n]+/g).filter(el => el.trim().substring(0, 5) === '--pf-')));
}

// first concat patternfly along with our custom app's stylesheet so we can process them together
concat([pfStylesheetPath, myAppStylesheetPath])
  .then(concatCss => {
    // postcss can't process vars and grid stuff at the same time, so let's split the transform script into parts
    // part 1 processes css variables into static values and hoists all vars into the global scope
    const globalVarsForIE = getVarDefinitions(concatCss).join('\n');
    const newStylesheet = `:root {\n${globalVarsForIE} } \n\n${concatCss}`;

    // turn this on to see the before/after of the entire stylesheet
    // fs.writeFileSync(
    //   path.resolve(__dirname, '../src/App/pf-ie11.stage.css'),
    //   newStylesheet
    // );

    // turn this on to see variables captured
    // fs.writeFileSync(
    //   path.resolve(__dirname, '../src/App/pf-ie11.variables.css'),
    //   globalVarsForIE
    // );

    return postcss([
      presetEnv({
        stage: 0,
        features: {
          'custom-properties': false
        }
      }),
      cssvariables()
    ])
      // no need to write to disk here, it's all in memory and needs another transform
      .process(newStylesheet, {
        from: undefined,
        to: undefined
      })
      .then(result => result.css); // return only the static css for next step of the process
  })
  .then(staticCss => {
    // part 2 processes grid related properties
    postcss([
      presetEnv({
        stage: 0,
        autoprefixer: { grid: 'autoplace' }
      })
    ])
      .process(staticCss, {
        from: undefined,
        to: undefined
      })
      .then(oldSchoolStylesheetFormat => {
        // copy assets into local directory where our stylesheets can find them
        const sourceAssetsDir = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/assets');
        const newAssetDir = path.resolve(__dirname, '../src/App/assets');

        fse.copy(sourceAssetsDir, newAssetDir, function (err) {
          if (err) {
            console.error(err);
          }
        });

        // write the ie11 ready css file to disk
        fs.writeFileSync(
          path.resolve(__dirname, toPath),
          oldSchoolStylesheetFormat.css
        );
      });
  });

