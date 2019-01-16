# Patternfly Seed

Patternfly Seed is an open source build scaffolding utility for web apps. The primary purpose of this project is to give developers a jump start when creating new projects that will use patternfly. A secondary purpose of this project is to serve as a reference for how to configure various aspects of an application that will use patternfly.

## Quick-start

    npm install yarn -g # to install yarn on your machine globally 
    git clone https://github.com/patternfly/patternfly-react-seed
    cd patternfly-react-seed
    yarn # to install react-seed dependencies
    yarn build # to build the project
    yarn start # to start the server

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
* [Babel Config](./babel.config.js)
* [Webpack Config](./webpack.config.js)
* [Jest Config](./jest.config.js)

## Code Quality Tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
