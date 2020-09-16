import React, { useEffect } from "react";
import "./Header.scss";
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
        <img
          class="page-header__banner"
          src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1992&q=80"
          alt="A fish"
        />
        <a href="" class="page-header__logo logo">
          <img
            class="logo__image"
            src="https://image.flaticon.com/icons/svg/836/836054.svg"
            width="300"
            alt=""
          />
        </a>
        <nav class="page-header__nav main-nav">
          <ul class="main-nav__list">
            <li class="main-nav__item main-nav__item--active">
              <a class="main-nav__link" href="">
                home
              </a>
            </li>
            <li class="main-nav__item">
              <a class="main-nav__link" href="">
                about
              </a>
            </li>
            <li class="main-nav__item">
              <a class="main-nav__link" href="">
                services
              </a>
            </li>
            <li class="main-nav__item">
              <a class="main-nav__link" href="">
                portfolio
              </a>
            </li>
            <li class="main-nav__item">
              <a class="main-nav__link" href="">
                team
              </a>
            </li>
            <li class="main-nav__item">
              <a class="main-nav__link" href="">
                contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
