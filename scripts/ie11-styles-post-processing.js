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

// first concat patternfly along with our custom app's stylesheet so we can process them together
concat([pfStylesheetPath, myAppStylesheetPath])
  .then(concatCss => {
    // postcss can't process vars and grid stuff at the same time, so let's split the transform script into parts
    // part 1 only processes the css variables into static values
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
      .process(concatCss, {
        from: undefined,
        to: undefined
      })
      .then(result => result.css); // return only the static css for next step of the process
  })
  .then(staticCss => {
    // part 2 only processes grid related properties
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

