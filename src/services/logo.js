import React from "react";
import "./logo.scss";
import download from "./../images/Logo-wa.png";
const logo = () => {
  return (
    <div className="services">
      <div className="header">
        <div className="logo">
          <img src={download}></img>
        </div>
        <div className="info">
          <h3>Hello.How do you do ?</h3>
          <p>
            We help brands become real and<br></br>meaningful contributors to our lives.
          </p>

          <button>See how</button>
        </div>
      </div>
    </div>
  );
};
export default logo;
