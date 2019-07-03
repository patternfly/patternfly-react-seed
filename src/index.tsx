import React from "react";
import ReactDOM from "react-dom";
import { App } from '@app/index';

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
