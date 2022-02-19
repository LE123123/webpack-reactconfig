import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "@babel/polyfill";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById("root")
);
