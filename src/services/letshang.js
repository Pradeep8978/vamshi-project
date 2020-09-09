import React, { Component } from 'react'
import "./letshang.scss"

class letshang extends Component {
    render() {
        return (
            <>
                <div className="hang-container">
                    <h1>LET'S HANG</h1>
                    <p>If you're ever in the neighbourhood swing <br></br> by. Or leave your details here and we'll get<br></br> in touch with you! </p>
                    <p><b>Address</b><br></br> 205/206,Eco House,Vishweswar<br></br>Nagar,Off Aarey Road,Goregaon<br></br>East,Mumbai,Maharastra,400063</p>
                    <h5>Contact us:+022 4037 9988<br></br>Get Direction+</h5>

                </div>
                <div className="hang">
                    <form>
                        <input type="text" id="name" placeholder="Name"></input>
                        <input type="email" id="Email" placeholder="Email"></input>
                        <input type="number" id="contact" placeholder="Contact no"></input>
                        <div className="radio">
                            <div><input type="radio" id="radio" value="New Business"></input>New Business</div>
                            <div><input type="radio" id="radio" value="Job Enqiury"></input>Job Enqiury</div>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default letshang;
