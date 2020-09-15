import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Services from "./services/Services";
// import Main from "./Practce/main/main"
import AboutUs from "./containers/AboutUs/AboutUs";
import JoinUs from "./containers/JoinUs/JoinUs";
import Features from "./containers/Features/Features";
import Contactus from "./containers/ContactUs/ContactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Features} />
        <Route path="/services" component={Services} />
        {/* <Route path="/main" component={Main} /> */}
        <Route exact path="/works" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/joinUs" component={JoinUs} />
        <Route path="/features" component={Features} />
        <Route path="/contactus" component={Contactus} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
