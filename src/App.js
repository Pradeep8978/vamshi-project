import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Services from "./services/Services"
import Main from "./Practce/main/main"


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/main" component={Main} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
