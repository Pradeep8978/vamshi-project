import React, { Component } from 'react'
import './NavBar.css'
import Logo from "../../images/wa_logo_yellow.png"
class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
       <img src={Logo}  width="100px" height="70px"/>
      </label>
      <ul>
        <li><a href=""><i class="fa fa-search" aria-hidden="true"></i></a></li>
        <li><a href=""><i class="fas fa-expand"></i></a></li>
      </ul>
    </nav>
    <section className="bg-wrapper"></section>
            </div>
        )
    }
}

export default NavBar
