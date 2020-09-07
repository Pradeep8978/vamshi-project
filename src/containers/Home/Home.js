import React from "react";
import "./Home.scss";
import download from "./../../images/wa_logo.png";
import pic from "./../../images/potti.png";
import InfoCard from "./InfoCard";
import Rotation from "../../components/Rotation/Rotation";

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
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
        <div className="work-container">
          <div className="work-header">
            <Rotation text="TAG LINE COMES. WE ARE WISEAPE" />
            <h1>ALL WORK</h1>
            {/* <hr /> */}
          </div>
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
                DIGITAL ACTIVATION<br></br>ENGAGES BIG
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
                DIGITAL ACTIVATION<br></br>ENGAGES BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Home;
