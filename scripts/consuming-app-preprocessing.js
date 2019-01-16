const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const concat = require('concat');
const glob = require('glob');
const basePfStylesheet = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/patternfly-base.css');
const pfStylesheetsPath = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,layouts,utilities}');
const myAppStylesheetPath = path.resolve(__dirname, '../src/App/app.css');
const toPath = '../src/App/pf-ie11.css';
const problematicFiles = [
  path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/components/BackgroundImage/ie11-background-image.css')
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

fixAssetPaths(problematicFiles);

// step 2: gather all the component stylesheet paths
glob(`${pfStylesheetsPath}/**/ie11-*.css`, function (err, files) {
  if (err) {
    process.exit(1);
  }

  const allFiles = [basePfStylesheet].concat(files, myAppStylesheetPath);
  const componentsWeDoNotWant = ['Table', 'Login'];
  // filter out components we don't want with a bit of manual tree shaking
  const selectedStylesheets = componentsWeDoNotWant.reduce((acc, curExclude) => acc.filter(el => !el.includes(curExclude)), allFiles);

  concat(selectedStylesheets)
    .then(concatCss => {
      // debugging stuffs
      // fs.writeFileSync(
      //   path.resolve(__dirname, '../src/App/stage-pf-ie11.css'),
      //   concatCss
      // );
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
        .process(concatCss, {
          from: undefined,
          to: undefined
        })
        .then(result => result.css); // return only the static css
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
