import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Buy from "./Buy";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={Buy} />
    </Switch>
  </BrowserRouter>
);

export default Router;
