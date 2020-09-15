import React from "react";
import "./Home.scss";
import download from "./../../images/Logo-wa.png";
import pic from "./../../images/potti.png";
import InfoCard from "./InfoCard";
import Rotation from "../../components/Rotation/Rotation";
import NavBar from "../../Layouts/NavBar/NavBar";
import Header from "./../../components/HeaderHome/HeaderHome";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
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
