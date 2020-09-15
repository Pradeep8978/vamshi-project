import React from "react";
import pic from "./../../images/potti.png";

const InfoCard = ({ item, onClickSeeHow }) => {
  return (
    <div className="info-card">
      <div className="card-content">
        <div>
          <h3>ITC : ENGAGE DEOS | DIGITAL ACTIVATION</h3>
          <h1>{item.name}</h1>
          {/* <h1>1 lov booth 200dates </h1> */}
          <p>{item.description}</p>
          <button onClick={() => onClickSeeHow(item)}>See how</button>
        </div>
      </div>
      <div className="imgbox">
        <img src={item.image}></img>
      </div>
    </div>
  );
};

export default InfoCard;
