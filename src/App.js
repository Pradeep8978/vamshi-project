import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
