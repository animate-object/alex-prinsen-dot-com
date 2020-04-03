import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { AboutPage } from "../../about";
import { Nav } from "../../nav";
import { Splash } from "../../splash";
import { Maggie } from "../../maggie";
import { Blog } from "../../blog";
import { WidgetsPage } from "../../widgets";

export const App = () => (
  <main className="content-container">
    <Nav />
    <Switch>
      <Route exact path="/maggie" component={Maggie} />
      <Route exact path="/" component={Splash} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={WidgetsPage} />
    </Switch>
  </main>
);
