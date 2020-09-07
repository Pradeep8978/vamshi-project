import React, { Component } from "react";
import "./Features.scss";
import Image from "../../images/lllogoooo.png";
import Bgimage from "../../images/bg-wrapper.jpg";
import Rotation from "./../../components/Rotation/Rotation";
class Features extends Component {
  render() {
    return (
      <main className="features-container">
        <section className="firstBlog">
          <div className="imgBlog">
            <img src={Image} />
          </div>
          <div className="contentBlog">
            <div>
              <h2>Hello, How do you do?</h2>
              <p>We help brands become a real and meaningful contributor to our lives.</p>
            </div>
          </div>
        </section>
        <section className="secondBlog">
          <div className="img-wrapper">
            <img src={Bgimage} />
          </div>
          <div className="textBlog">
            <div>
              <p>STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE</p>
              <h2>
                #LoveImporttwo-
                <br />1 Love Both, 200Dates
              </h2>
              <p>We help brands become a real and meaningful contributor to our lives.</p>
              <button>See Now</button>
            </div>
          </div>
        </section>
        <section className="drumbeatBlog">
          <div className="whiteBg">
            <div className="subDrumBeat">
              <h2>DRUMBEAT</h2>
              <div className="rotion-blog">
                <Rotation />
              </div>
              <div className="drumBeatImagesBlog">
                <div className="drumimg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                  <h2>Lorem ipsum doler with site amen</h2>
                  <p>We are driven by the driven and we don't get anything.</p>
                </div>
                <div className="drumimg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />

                  <h2>Lorem ipsum doler with site amen</h2>
                  <p>We are driven by the driven and we don't get anything.</p>
                </div>
                <div className="drumimg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />

                  <h2>Lorem ipsum doler with site amen</h2>
                  <p>We are driven by the driven and we don't get anything.</p>
                  <button>view all items</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-Black-container">
          <div className="bg-black-blog">
            <div className="black_first">
              <h2>
                THE <br /> SHREWDNESS
              </h2>
            </div>
            <div className="text-wrapper-blog">
              <p>
                We think long and hard about your business challenges and comeup with the best way
                to reach your goals. Thn we develop strategies. We think long and hard about your
                business challenges and comeup with the best way to reach your goals. Thn we develop
                strategies.
              </p>
            </div>
          </div>
        </section>
        <section className="imagesBlog-container">
          <div className="wrapper-img-blog">
            <img src="https://image1.masterfile.com/getImage/ODc3LTA4MTI5NDM3ZW4uMDAwMDAwMDA=AEnoCK/877-08129437en_Masterfile.jpg" />
          </div>
          <div className="wrapper-img-blog">
            <img src="https://i.pinimg.com/474x/ea/27/0d/ea270d4d381838c06c5b004edfe64950.jpg" />
          </div>
          <div className="wrapper-img-blog">
            <img src="https://image.freepik.com/free-photo/beautiful-business-woman-blue-suit-is-smiling-white-background_33799-2639.jpg" />
          </div>
          <div className="wrapper-img-blog">
            <img src="https://i.pinimg.com/originals/10/17/23/1017230f6ed9a3ecdbb65ea9494bdc58.jpg" />
          </div>
        </section>
        <section className="hang-container">
          <div className="">
            <h2>LET'S HANGS</h2>
            <p>
              We think long and hard about your business challenges and comeup with the best way to
              reach your goals.
            </p>
            <h4>
              <b>Address:</b>
            </h4>
            <p>
              We think long and hard about your business challenges and comeup with the best way to
              reach your goals.
            </p>
            <p>
              <i class="fas fa-phone" style={{ color: "#f814cb" }}></i> &nbsp;Contact Us : +91
              42789456
            </p>
            {/* <p style={{color:"#f814cb"}}><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp; <a href="#"/></a> </p> */}
            <p style={{ color: "#f814cb" }}>
              <i class="fa fa-map-marker" style={{ fontSize: "14px" }} aria-hidden="true"></i>&nbsp;
              <u>Get Discovers</u>
            </p>
          </div>
          <form>
            <div className="rotationcmp">
              <Rotation />
            </div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Contact no:" />
            <ul>
              <li>
                <input type="radio" /> &nbsp; New Business{" "}
              </li>
              <li>
                <input type="radio" /> &nbsp; Job activity
              </li>
              <li>
                <button>SUBMIT</button>{" "}
              </li>
            </ul>
          </form>
        </section>
        <footer>footer</footer>
      </main>
    );
  }
}

export default Features;
