import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs"
import JoinUs from "./containers/JoinUs/JoinUs"
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/joinUs" component={JoinUs} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
