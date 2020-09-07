import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousal.css"

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousal-conatiner">
        <Carousel>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
           

          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default DemoCarousel;
