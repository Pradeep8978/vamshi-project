import React, { useEffect } from "react";
import NavBar from "../../Layouts/NavBar/NavBar";
import Image from "../../images/Logo-wa.png";
import Bgimage from "../../images/bg-wrapper.jpg";
import "./FeaturesHeader.scss";
const FeaturesHeader = () => {
  useEffect(() => {
    var pageHeader = document.querySelector(".features-header");
    var scroll = 0;
    window.addEventListener("scroll", function () {
      scroll = Math.floor(window.pageYOffset);
      if (scroll > 0) {
        pageHeader.classList.add("features-header--scrolled");
      } else {
        pageHeader.classList.remove("features-header--scrolled");
      }
    });
  }, []);
  return (
    <>
      <NavBar />
      <section className="features-header">
        <div className="imgBlog">
          <img src={Image} />
        </div>
        <div className="contentBlog">
          <div className="features-content">
            <h2>Hello. How do you do?</h2>
            <p>We help brands become a real and meaningful contributor to our lives.</p>
            <button className="sec-one-btn">See how</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesHeader;
