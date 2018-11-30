import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@patternfly/react-core/dist/styles/base.css";

if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
