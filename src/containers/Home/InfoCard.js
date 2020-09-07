import React from "react";
import pic from "./../../images/potti.png";

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="card-content">
        <div>
          <h3>ITC : ENGAGE DEOS | DIGITAL ACTIVATION</h3>
          <h1>#loveImpormtwo - 1 Love Booth, 200 Dates</h1>
          {/* <h1>1 lov booth 200dates </h1> */}
          <p>online shopping is a slippery slope .your know whats great real first dates</p>
          <button>See how</button>
        </div>
      </div>
      <div className="imgbox">
        <img src={pic}></img>
      </div>
    </div>
  );
};

export default InfoCard;
