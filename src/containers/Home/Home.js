import React, { useState } from "react";
import "./Home.scss";
import download from "./../../images/Logo-wa.png";
import pic from "./../../images/potti.png";
import InfoCard from "./InfoCard";
import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

import Rotation from "../../components/Rotation/Rotation";
import NavBar from "../../Layouts/NavBar/NavBar";
import Header from "./../../components/HeaderHome/HeaderHome";
import HeaderSticky from "../../components/Headersticky/HeaderSticky";

const videoConfig = [
  {
    name: "Axis - Do Your Home Work",
    image: require("../../images/workimages/axis.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=g0Y3opLVAc0",
  },
  {
    name: "British Council - IELTS Prep App",
    image: require("../../images/workimages/darkfantasy.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=1HSZPnv5_W8&t=25s",
  },
  {
    name: "Dark Fantasy - Lot Can Happen  Inside",
    image: require("../../images/workimages/dhl.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=nKx1Pu6mzKQ&t=15s",
  },
  {
    name: "DHL - Chant for Teams",
    image: require("../../images/workimages/engage1.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=q6GH6IgcUDA&t=13s",
  },
  {
    name: "Engage - Blind Dating Booth",
    image: require("../../images/workimages/toffel.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=bQv2MgFniig&t=15s",
  },
  {
    name: "Engage - Pocket Full Of Stories 2.0",
    image: require("../../images/workimages/engage2.JPG"),
    step: "STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE",
    heading1: "#LoveImporttwo-",
    heading2: "1 Love Both, 200Dates",
    description: "We help brands become a real and meaningful contributor to our lives.",
    video: "https://www.youtube.com/watch?v=rBmcCRrf5ZU",
  },
];

const Home = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickSeeHow = (item) => {
    setSelectedItem(item);
    handleShow();
  };

  const onIncrement = () => {
    if (selectedIndex < videoConfig.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const onDecrement = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const renderModal = () => {
    return (
      <Modal show={show} onHide={handleClose} className="video-modal">
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <ReactPlayer playing="false" url={selectedItem.video} />
          {/* <video controls className="video-player" autoPlay>
            <source src={selectedItem.video} type="video/mp4" />
          </video> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
  };
  return (
    <div className="home-page">
    
        <HeaderSticky/>
        <Header />
      <div className="page-content">
        {renderModal()}
        <div className="card-container">
          {videoConfig.map((item) => {
            return <InfoCard item={item} onClickSeeHow={onClickSeeHow} />;
          })}
        </div>
        <div className="work-container">
          <div className="work-header">
            <Rotation text="TAG LINE COMES. WE ARE WISEAPE" />
            <h1>ALL WORK</h1>
            {/* <hr /> */}
          </div>
          <div className="work-list">
            {videoConfig.map((item) => {
              return (
                <div className="work-item">
                  <div className="work-item-hover">
                  <img src={item.image}></img>
                  <div className="more-layer">
                  <div className="meet-all">
                  <i class="fas fa-play" aria-hidden="true" onClick={()=> onClickSeeHow(item)}></i>
                  </div>
                </div>
                </div>
                  <h3>
                    DIGITAL ACTIVATION<br></br>ENGAGES BIG
                  </h3>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
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
