import React from "react";
import "./Home.scss";
import download from "./../../images/Logo-wa.png";
import pic from "./../../images/potti.png";
import InfoCard from "./InfoCard";
import Rotation from "../../components/Rotation/Rotation";
import NavBar from "../../Layouts/NavBar/NavBar";
import Header from "./../../components/HeaderHome/HeaderHome";

const videoConfig = [
  {
    name: "Axis - Do Your Home Work",
    image: require("../../images/workimages/axis.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=g0Y3opLVAc0",
  },
  {
    name: "British Council - IELTS Prep App",
    image: require("../../images/workimages/darkfantasy.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=1HSZPnv5_W8&t=25s",
  },
  {
    name: "Dark Fantasy - Lot Can Happen  Inside",
    image: require("../../images/workimages/dhl.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=nKx1Pu6mzKQ&t=15s",
  },
  {
    name: "DHL - Chant for Teams",
    image: require("../../images/workimages/engage1.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=q6GH6IgcUDA&t=13s",
  },
  {
    name: "Engage - Blind Dating Booth",
    image: require("../../images/workimages/toffel.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=bQv2MgFniig&t=15s",
  },
  {
    name: "Engage - Pocket Full Of Stories 2.0",
    image: require("../../images/workimages/engage2.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: '#LoveImporttwo-',
    heading2: '1 Love Both, 200Dates',
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=rBmcCRrf5ZU",
  },
];

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
          
          { videoConfig.map((item) => {

         
            <div className="work-list">
            <div className="work-item">
              <img src={item.image}></img>
              <h3>
                DIGITAL ACTIVATION<br></br>ENGAGES BIG
              </h3>
              <h1>
                #Loveimpormtwo-<br></br>1 Love Booth, 200 Dates
              </h1>
            </div>
          </div>  })}
        </div>
      </div>

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Home;
