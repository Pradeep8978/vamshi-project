import React, { useEffect, useState } from "react";
import "./ContactUs.scss";
import Rotation from "../Rotation/Rotation.js";
import logo from "../../images/wa_logo_yellow.png";
import NavBar from "../../Layouts/NavBar/NavBar";

const ContactUsComponent = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="contactus-content">
      <Rotation />
      <div className="text-form-container ">
        <div className="text-form">
          <div className="text">
            <h1>LET'S HANG</h1>
            <p>
              If you're ever in the neighbourhood swing by. Or leave your details here and we'll get
              in touch with you!
            </p>
            <p>
              <b>Address:</b> <br></br>205/206,Eco House,Vishweswar Nagar,Off Aarey Road,Goregaon
              East,Mumbai,Maharastra,400063
            </p>
            <div className="icon-line">
              <i class="fa fa-phone phone" aria-hidden="true"></i>Contact us:+022 4037 9988{" "}
            </div>
            <div className="icon-line">
              <i class="fa fa-map-marker map-marker" aria-hidden="true"></i>
              <input type="checkbox" className="checkBox" id="map" />
              <label className="directions" onClick={() => setShowMap(!showMap)}>
                Get Directions <span className={`plus-icon ${showMap ? "active" : ""}`}>+</span>
              </label>
            </div>
          </div>
          <div className="form">
            <form>
              <input type="text" id="name" placeholder="Name"></input>
              <input type="email" id="Email" placeholder="Email"></input>
              <input type="number" id="contact" placeholder="Contact no.:"></input>
              <div className="radio">
                <div className="radio-op">
                  <input type="radio" id="radio" value="New business"></input>&nbsp;New business
                </div>
                <div className="radio-op">
                  <input type="radio" id="radio" value="Job enqiury"></input>&nbsp;Job enqiury
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`map-blog ${showMap ? "active" : ""}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.90439468704!2d78.3941416!3d17.4369123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3243b12997ac0805!2sThe%20Digital%20Street!5e0!3m2!1sen!2sin!4v1599379388627!5m2!1sen!2sin"
          width="100%"
          className="target"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsComponent;
