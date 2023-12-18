# Patternfly Seed

Patternfly Seed is an open source build scaffolding utility for web apps. The primary purpose of this project is to give developers a jump start when creating new projects that will use patternfly. A secondary purpose of this project is to serve as a reference for how to configure various aspects of an application that uses patternfly.

## Quick-start

```bash
git clone --branch javascript https://github.com/patternfly/patternfly-react-seed # clone the project
cd patternfly-react-seed # navigate into the project directory
npm install --legacy-peer-deps # install patternfly-react-seed dependencies
npm run build # build the project
npm run start:dev # start the development server
```

## Development Scripts

Install development/build dependencies
`npm install --legacy-peer-deps`

Start the development server
`npm run start:dev`

Run a full build
`npm run build`

Run the test suite
`npm run test`

Run the linter
`npm run lint`

Launch a tool to inspect the bundle size
`npm run bundle-profile:analyze`

## Configurations

- [Babel Config](./babel.config.js)
- [Webpack Config](./webpack.config.js)
- [Jest Config](./jest.config.js)

## Code Quality Tools

- For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
- To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
- To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
