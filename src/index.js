import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept("./App/index.js", () => {
    const NextApp = require("./App/index").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
serviceWorker.unregister();
