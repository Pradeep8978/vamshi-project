import React, { Component } from 'react'
import './NavBar.css'
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
        DOIDDE
      </label>
      <ul>
        <li><a className="active" href="">home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact us</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
    <section className="bg-wrapper"></section>
            </div>
        )
    }
}

export default NavBar
