import React from "react";
import "./Home.scss";
import download from "./../../images/wa_logo.png";
import pic from "./../../images/potti.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="header">
        <div className="logo">
          <img src={download}></img>
        </div>
        <div className="header-right">
          <div className="nav-bar">
            <ul>
              <li>Home</li>
              <li>Works</li>
              <li>About</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="text">
            <h1>Effectiveness through influence</h1>
            <p>
              Drog 5 is inthe bussiness of creative problem solving<br></br> from integrated
              campaign to bussiness design<br></br> our work creates real connections with people
              and drives results
            </p>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="card-container">
          <div className="info-card">
            <div className="card-content">
              <div>
                <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
                <h1>#love formtwo - One Love Booths, 200 Dates</h1>
                {/* <h1>1 lov booth 200dates </h1> */}
                <p>online shopping is a slippery slope .your know whats great real first dates</p>
                <button>See how</button>
              </div>
            </div>
            <div className="imgbox">
              <img src={pic}></img>
            </div>
          </div>
          <div className="info-card">
            <div className="card-content">
              <div>
                <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
                <h1>#love formtwo - One Love Booths, 200 Dates</h1>
                {/* <h1>1 lov booth 200dates </h1> */}
                <p>online shopping is a slippery slope .your know whats great real first dates</p>
                <button>See how</button>
              </div>
            </div>
            <div className="imgbox">
              <img src={pic}></img>
            </div>
          </div>

          <div className="info-card">
            <div className="card-content">
              <div>
                <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
                <h1>#love formtwo - One Love Booths, 200 Dates</h1>
                {/* <h1>1 lov booth 200dates </h1> */}
                <p>online shopping is a slippery slope .your know whats great real first dates</p>
                <button>See how</button>
              </div>
            </div>
            <div className="imgbox">
              <img src={pic}></img>
            </div>
          </div>
        </div>
        <div className="work-container">
          <h1>ALL WORK</h1>
          <div className="work-list">
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br> ENGAGES BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES  BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES  BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
            <div className="work-item">
              <img src={pic}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES  BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default Home;
