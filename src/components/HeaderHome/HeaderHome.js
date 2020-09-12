import React, { useEffect } from "react";
import NavBar from "../../Layouts/NavBar/NavBar";
import download from "./../../images/wa_logo.png";
import "./HeaderHome.scss";

const Header = () => {
  useEffect(() => {
    var pageHeader = document.querySelector(".page-header");
    var scroll = 0;

    window.addEventListener("scroll", function () {
      scroll = Math.floor(window.pageYOffset);
      if (scroll > 0) {
        pageHeader.classList.add("page-header--scrolled");
      } else {
        pageHeader.classList.remove("page-header--scrolled");
      }
    });
  }, []);

  return (
    <div className="home-header">
      <header class="page-header">
        <NavBar />
        <div className="logo">
          <img src={download}></img>
        </div>
        <div className="header-right">
          <div className="text">
            <h1>Effectiveness through influence</h1>
            <p>
              Drog 5 is inthe bussiness of creative problem solving from integrated campaign to
              bussiness design our work creates real connections with people and drives results
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
