const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const fs = require('fs');
const fse = require('fs-extra');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const fromPath = '../node_modules/@patternfly/patternfly-next/patternfly.css';
const toPath = '../src/App/pf-ie11.css';

const css = fs.readFileSync(
  path.resolve(__dirname, fromPath),
  'utf8'
);

postcss([
  presetEnv({
    stage: 0,
    features: {
      'custom-properties': false
    },
    autoprefixer: { grid: true }
  }),
  cssvariables()

])
  .process(css, {
    from: path.resolve(__dirname, fromPath),
    to: path.resolve(__dirname, toPath)
  })
  .then(result => {

    // replace asset paths with one that points from the src directory to node_modules
    // doesn't work, webpack won't serve assets from this directory
    // const re = new RegExp('./assets/', 'g');
    // result.css = result.css.replace(re, '../node_modules/@patternfly/patternfly-next/assets/');

    // instead, let's just copy them over into the app
    const sourceAssetsDir = path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/assets');
    const newAssetDir = path.resolve(__dirname, '../src/App/assets');

    fse.copy(sourceAssetsDir, newAssetDir, function (err) {
      if (err) {
        console.error(err);
      }
    });

    fs.writeFileSync(
      path.resolve(__dirname, toPath),
      result.css
    );
  });

