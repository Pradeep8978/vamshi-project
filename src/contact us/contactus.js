import React, { Component } from 'react'
import "./contactus.scss"
import logo from "../images/wa_logo_yellow.png"
// import Letshang from "../services/letshang"

class contactus extends Component {
    render() {
        return (
            <>
                <main className="contactus-container">
                    <div className="header">
                        <img src={logo} />
                        <div className="icon-position">
                            <i class="fa fa-search search" aria-hidden="true"></i>
                            <i class="fas fa-expand expand"></i>
                        </div>

                    </div>
                    <div className="text-form-container">
                        <div className="text-form">
                            <div className="text">
                                <h1>LET'S HANG</h1>
                                <p>If you're ever in the neighbourhood swing by. Or leave your details here and we'll get in touch with you! </p>
                                <p><b>Address:</b> <br></br>205/206,Eco House,Vishweswar Nagar,Off Aarey Road,Goregaon East,Mumbai,Maharastra,400063</p>
                                <span><i class="fa fa-phone phone" aria-hidden="true"></i>Contact us:+022 4037 9988 </span>
                                <h5><i class="fa fa-map-marker map-marker" aria-hidden="true"></i>Get Direction+</h5>

                            </div>
                            <div className="form">
                                <form>
                                    <input type="text" id="name" placeholder="Name"></input>
                                    <input type="email" id="Email" placeholder="Email"></input>
                                    <input type="number" id="contact" placeholder="Contact no.:"></input>
                                    <div className="radio">
                                        <div className="radio-op"><input type="radio" id="radio" value="New business"></input>&nbsp;New business</div>
                                        <div className="radio-op"><input type="radio" id="radio" value="Job enqiury"></input>&nbsp;Job enqiury</div>
                                        <button>Submit</button>
                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.90439468704!2d78.3941416!3d17.4369123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3243b12997ac0805!2sThe%20Digital%20Street!5e0!3m2!1sen!2sin!4v1599379388627!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <div className="end">
                        <p>Footer</p>
                    </div>
                </main>
            </>
        )
    }
}

export default contactus