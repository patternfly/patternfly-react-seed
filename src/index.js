/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/array';
import 'core-js/es6/date';
import 'core-js/es6/function';
import 'core-js/es6/map';
import 'core-js/es6/math';
import 'core-js/es6/number';
import 'core-js/es6/object'; // added Object.values
import 'core-js/es6/parse-float';
import 'core-js/es6/parse-int';
import 'core-js/es6/regexp';
import 'core-js/es6/set';
import 'core-js/es6/string';
import 'core-js/es6/symbol';
import 'core-js/es6/weak-map';
import 'core-js/es7/array';
import 'core-js/es7/object'; // added import
require('es6-promise').polyfill();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@patternfly/react-core/dist/styles/base.css";

if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
