import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs"
import JoinUs from "./containers/JoinUs/JoinUs";
import Features from "./containers/Features/Features"
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/joinUs" component={JoinUs} />
        <Route path="/features" component={Features} />


      </Switch>
    </BrowserRouter>
  );
};

export default App;
