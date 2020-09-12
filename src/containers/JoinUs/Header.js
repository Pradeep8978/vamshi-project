import React, { Component } from 'react'
import './Header.css'
import Logo from "../../images/Logo-wa.png"
import Navbar from "../.././Layouts/NavBar/NavBar"
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
      {/* <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label> */}
      <label className="logo">
       <img src={Logo}  width="80px" height="50px"/>
      </label>
      {/* <ul>
        <li><a href=""><i class="fa fa-search" aria-hidden="true"></i></a></li>
        <li><a href=""><i class="fas fa-expand"></i></a></li>
      </ul> */}
      <div className="navbarblog">
      <Navbar/>
      </div>
    </nav>
    <section className="bg-wrapper"></section>
            </div>
        )
    }
}

export default Header;