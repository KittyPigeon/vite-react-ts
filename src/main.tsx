import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Router from "@/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <HashRouter>
  //   <Routes />
  // </HashRouter>
  <Router></Router>
);
