import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Logo from "../../images/wa_logo_yellow.png";
class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              home .
            </Link>
            <Link className="nav-link" to="/works">
              works .
            </Link>
          </Nav>
          <Nav>
            {/* <Link className="nav-link" to="joinUs">
              Join Us
            </Link> */}
            <Link className="nav-link" eventKey={2} to="aboutUs">
              about Us .
            </Link>
            <Link className="nav-link" eventKey={2} to="contactUs">
              get in touch .
            </Link>
            <Link className="nav-link" eventKey={2} href="#memes">
              <i class="fa fa-search search" aria-hidden="true"></i>
            </Link>
            <Link className="nav-link" eventKey={2} href="#memes">
              <i class="fas fa-expand expand"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
