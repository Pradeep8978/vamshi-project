import React, { Component } from "react";
import "./AboutUs.scss";
import Logo from './../../images/logo.png'
import NavBar from "./../../Layouts/NavBar/NavBar";
import Rotation from "./../../components/Rotation/Rotation";
import HeaderSticky from "../../components/Headersticky/HeaderSticky";

class AboutUs extends Component {
  componentDidMount(){
    var pageHeader = document.querySelector(".sticky-wrapper");
    pageHeader.classList.add("d-none");
    var scroll = 0;
    window.addEventListener("scroll", function () {
      scroll = Math.floor(window.pageYOffset);
      if (scroll > 150) {
        pageHeader.classList.add("d-block");
        pageHeader.classList.remove("d-none");
      } else {
        pageHeader.classList.add("d-none");
        pageHeader.classList.remove("d-block");
      }
    });
  }
  componentWillUnmount(){
    window.removeEventListener("scroll")
  }
  render() {
    return (
      <>
        <main className="about-us-wrapper">
          <HeaderSticky bgColor ='#f814cb' />
          <section className="wrapper">
            <NavBar />
            <div className="img-blog">
              <img src={Logo} width="100%" height="450px" />
              <div className="circle-animation">
                <Rotation text=". &nbsp;&nbsp;WE ARE WISEAPE	&nbsp; . &nbsp;	&nbsp; TAG LINE COMES . &nbsp; &nbsp;WE ARE WISEAPE	&nbsp;  &nbsp; &nbsp;.	&nbsp; TAG LINE COMES &nbsp;&nbsp; "/>
                </div>
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
