import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Works from "./containers/Work/Works";
import Services from "./services/Services";
// import Main from "./Practce/main/main"
import AboutUs from "./containers/AboutUs/AboutUs";
import JoinUs from "./containers/JoinUs/JoinUs";
import Home from "./containers/Home/Home";
import Contactus from "./containers/ContactUs/ContactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        {/* <Route path="/main" component={Main} /> */}
        <Route exact path="/works" component={Works} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/joinUs" component={JoinUs} />
        <Route path="/features" component={Home} />
        <Route path="/contactus" component={Contactus} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
