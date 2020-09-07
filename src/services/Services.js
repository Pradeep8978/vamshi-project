import React from "react";
import "./Services.scss";
import Logo from "./logo"
import Img from "./img";
import Text from "./text";
import View from './view';
import Drumbeat from "./drumbeat";
import Shredness from "./shredness";
import Letshang from "./letshang"; 
import Footer from "./footer";

const Services = () => {
    return (
        <div className="main-container">
            <Logo>
            </Logo>
            
            <Img/>
            <Text/>
            <View/>
            <Drumbeat/>
            <Shredness/>
            <Letshang/>
            <Footer/>
        
        </div>
        

    )
};
export default Services;