import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.less";

import { BrowserRouter, HashRouter } from "react-router-dom";
import Routes from "@/router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Routes />
  </HashRouter>
);
