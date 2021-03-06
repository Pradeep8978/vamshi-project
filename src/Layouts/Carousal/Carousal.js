import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousal.css";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousal-conatiner">
        <Carousel>
          <div>
            <div className="drumimg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
              <div className="img-arrow-Round-click">
                <i class="fas fa-arrow-up"></i>
              </div>
            </div>
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
            <span>-By Siddhant M. | 05 mins read</span>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
            <div className="img-arrow-Round-click">
              <i class="fas fa-arrow-up"></i>
            </div>
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
            <span>-By Siddhant M. | 05 mins read</span>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
            <div className="img-arrow-Round-click">
              <i class="fas fa-arrow-up"></i>
            </div>
            <h4>Lorem ipsum the dolor sit amen</h4>
            <p className="legend">Online Swiping is a slippery slope. You know what's great?</p>
            <span>-By Siddhant M. | 05 mins read</span>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default DemoCarousel;
