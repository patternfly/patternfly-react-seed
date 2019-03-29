# Patternfly Seed

Patternfly Seed is an open source build scaffolding utility for web apps. The primary purpose of this project is to give developers a jump start when creating new projects that will use patternfly. A secondary purpose of this project is to serve as a reference for how to configure various aspects of an application that uses patternfly.

## Quick-start
```bash
npm install yarn -g # ensure you have yarn on your machine globally
git clone https://github.com/patternfly/patternfly-react-seed # clone the project
cd patternfly-react-seed # navigate into the project directory
yarn # install patternfly-react-seed dependencies
yarn build # build the project
yarn start # start the development server
```
## Development Scripts

Install development/build dependencies
`yarn`

Start the development server
`yarn start`

Run a full build
`yarn build`

Run the test suite
`yarn test`

Run the linter
`yarn lint`

Launch a tool to inspect the bundle size
`yarn bundle-profile:analyze`

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Image Support

To use an image asset that's shipped with patternfly core, you'll prefix the paths with `@pfassets`. `@pfassets` is an alias for the patternfly assets directory in node_modules.

`import imgSrc from '@pfassets/images/g_sizing.png';`
Then you can use it like:
`<img src={imgSrc} alt="Some image" />`

You can use a similar technique to import assets from your local app, just prefix the paths with. `@app`.
`import loader from '@app/assets/images/loader.gif';`
`<img src={loader} alt="Content loading />`

Inlining SVG in the app's markup is also possible.
`import logo from '@app/assets/images/logo.svg';`
Then you can use it like:
`<span dangerouslySetInnerHTML={{__html: logo}} />`

You can also use SVG to apply background images with CSS. To do this, your svg's must live under a `bgimages` directory. This is necessary because you may need to use SVG's in several other context (inline images, fonts, icons, etc.) and so we need to be able to differentiate between these usages so the appropriate loader is invoked.
```css
body {
  background: url(./assets/bgimages/img_avatar.svg);
}
```

## Code Quality Tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
