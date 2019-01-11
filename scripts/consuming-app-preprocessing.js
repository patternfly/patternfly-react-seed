const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const glob = require('glob');
const pfComponentPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,layouts,utilities}');
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';

glob(`${pfComponentPath}/**/ie11-*.css`, function (err, files) {
  if (err) {
    process.exit(1);
  }

  const allFiles = files.concat(myAppStylesheetPath);

  concat(allFiles)
    .then(concatCss => {
      // console.log(concatCss);
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
        .process(concatCss, {
          from: undefined,
          to: undefined
        })
        .then(result => result.css); // return only the static css for next step of the process
    })
    .then(processedCss => {
      // write the ie11 ready css file to disk
      fs.writeFileSync(
        path.resolve(__dirname, toPath),
        processedCss
      );

      // copy assets into local directory where our stylesheets can find them
      const sourceAssetsDir = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/assets');
      const newAssetDir = path.resolve(__dirname, '../src/App/assets');

      fse.copy(sourceAssetsDir, newAssetDir, function (err) {
        if (err) {
          console.error(err);
        }
      });
    });
});
