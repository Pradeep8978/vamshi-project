import React, { Component } from "react";
import logo from "../../images/Logo-wa.png";
import NavBar from "../../Layouts/NavBar/NavBar";
// import Letshang from "../services/letshang"
import ContactUsComonent from "../../components/ContactUs/ContactUs";
import "./ContactUs.scss";

class contactus extends Component {
  render() {
    return (
      <>
        <main className="contactus-container">
          <div className="header">
            <img src={logo} />
            {/* <div className="icon-position">
                            <i class="fa fa-search search" aria-hidden="true"></i>
                            <i class="fas fa-expand expand"></i>
                        </div> */}
            <NavBar />
          </div>
          <ContactUsComonent />
          <div className="end">
            <p>Footer</p>
          </div>
        </main>
      </>
    );
  }
}

export default contactus;