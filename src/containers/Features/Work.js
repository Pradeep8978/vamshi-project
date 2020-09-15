import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

import "./Work.scss";
import Carousal from "./../../Layouts/Carousal/Carousal";

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

const WorkComponent = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickButton = (item) => {
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
    <>
      {renderModal()}
      {/* <div className="carousalBlog secondBlog">
        <Carousal />
      </div> */}
      {videoConfig
        .filter((o, i) => i === selectedIndex)
        .map((item) => {
          return (
            <div className="secondBlog">
              <div className="img-wrapper" style={{ backgroundImage:`url(${item.image})` }}>
                
                <div className="image-layer"></div>
                <div className="nav-buttons">
                  <i class="fa fa-chevron-left" aria-hidden="true" onClick={onDecrement}></i>
                  <i class="fa fa-chevron-right" aria-hidden="true" onClick={onIncrement}></i>
                </div>
              </div>
              <div className="textBlog">
                <div>
          <p className="step-content"> {item.step}</p>
                  <h2>
                   {item.heading1}
                    <br />{item.heading2}
                  </h2>
                  <p className="step-content-two">
                    {item.description}
                  </p>
                  <button onClick={() => onClickButton(item)}>SEE HOW</button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default WorkComponent;
