import React from "react";
import ReactDOM from "react-dom";
import { App } from '@app/index';

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("react-axe"); // eslint-disable-line
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
