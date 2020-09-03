import React, { Component } from 'react'
import './AboutUs.css'
import Logo from './../../images/walogo.png'
// import NavBar from "./../../Layouts/NavBar/NavBar"

class AboutUs extends Component {
    render() {
        return (
            <>

            <main>
                <section className="wrapper">
                    <div className="img-blog">
                        <img src={Logo} width="100%" height="450px" />
                    </div>
                    <div className="text-blog">
                        <div>
                            <p><b>In this Chose Content exist in between  <br></br> brands and customers today</b></p>
                            <h2>WISEAPE is here to and some order.</h2>
                        </div>
                    </div>
                </section>
                <section className="middleBlog">
                    <div>
                        <h2>WISEAPE is here to and some order.<br /> WISEAPE is here to
                        WISEAPE is here to and some order.<br /> WISEAPE is here
                        </h2>
                        <p>Warangal (About this soundpronunciation
                        (help·info)) is a city in the Indian state of Telangana. It serves as the district headquarters of both Warangal Urban District and Warangal Rural District.[5] With a population of 830,281 per 2011 Census of India,[3][4] and spreading over an 406 km2 (157 sq mi),[1]
                             Warangal is the second most populous city in the state after the capital Hyderabad.</p>
                    </div>
                </section>
                <footer>
                    footer
                </footer>
            </main>
            </>
        )
    }
}

export default AboutUs;




