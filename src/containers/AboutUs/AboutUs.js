import React, { Component } from "react";
import "./AboutUs.scss";
import Logo from "./../../images/walogo.png";
import NavBar from "./../../Layouts/NavBar/NavBar";
import Rotation from "./../../components/Rotation/Rotation";

class AboutUs extends Component {
  render() {
    return (
      <>
        <main className="about-us-wrapper">
          <section className="wrapper">
            <NavBar />
            <div className="img-blog">
              <img src={Logo} width="100%" height="450px" />
            </div>
            <div className="text-blog">
              <div className="text-content">
                <p>
                  <b>
                    In this Chose Content exist in between <br></br> brands and customers today
                  </b>
                </p>
                <h2>WISEAPE is here to and some order.</h2>
              </div>
            </div>
            <Rotation text=". &nbsp;&nbsp;WE ARE WISEAPE	&nbsp; .	&nbsp; TAG LINE COMES " />
          </section>
          <section className="middleBlog">
            <div className="container">
              <h2>
                WISEAPE is here to to help brands
                <br /> discover their purpose as a fellow human and
                <br /> make things of importance.
              </h2>
              <p>
                <div>
                  Pioneering a new kind of relationship between the brands and the people that
                  follow them.
                </div>
                <div>
                  We stay true to the brands and carve out a place for the brand in the culture that
                  our audience lives in.
                </div>
                <div>
                  Your audience wants ownership of your brand and we are here to help you amke that
                  transition and reap the commercial success that comes along with it.
                </div>
              </p>
            </div>
          </section>
          <footer>footer</footer>
        </main>
      </>
    );
  }
}

export default AboutUs;
