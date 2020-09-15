import React, { Component } from "react";
import "./Features.scss";
import Image from "../../images/Logo-wa.png";
import Bgimage from "../../images/bg-wrapper.jpg";
import Carousal from "./../../Layouts/Carousal/Carousal";
import ArrowCarousal from "./../../Layouts/ArrowCarousal/ArrowCarousal";
import NavBar from "../../Layouts/NavBar/NavBar";
import ContactUsComponent from "./../../components/ContactUs/ContactUs";

import Rotation from "./../../components/Rotation/Rotation";
import ReactPageScroller from "react-page-scroller";

class Features extends Component {
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  render() {
    return (
      <main className="features-container">
        <ReactPageScroller ref={(c) => (this.reactPageScroller = c)}>
          <section className="firstBlog">
            <div className="imgBlog">
              <img src={Image} />
            </div>
            <div className="contentBlog">
              <NavBar />
              <div>
                <h2>Hello. How do you do?</h2>
                <p>We help brands become a real and meaningful contributor to our lives.</p>
                <button className="sec-one-btn">See how</button>
              </div>
            </div>
          </section>
          <section className="secondBlog">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" />
              <div className="image-layer"></div>
            </div>
            <div className="textBlog">
              <div>
                <p className="step-content">STEP:1 MINIMUM WORK : DIGITAL EXPERIENCE</p>
                <h2>
                  #LoveImporttwo-
                  <br />1 Love Both, 200Dates
                </h2>
                <p className="step-content-two">
                  We help brands become a real and meaningful contributor to our lives.
                </p>
                <button>See Now</button>
              </div>
            </div>
          </section>
          {/* <section className="responsive-carousel">
            <ArrowCarousal />
          </section> */}
          <section className="drumbeatBlog">
            <div className="whiteBg">
              <div className="subDrumBeat">
                <h2>
                  <Rotation />
                  DRUMBEAT
                </h2>

                <div className="drumBeatImagesBlog">
                  <div className="drumimg-card">
                    <div className="drumimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                      <i class="fas fa-arrow-up"></i>
                    </div>

                    <h1>Lorem ipsum doler with site amen</h1>
                    <p>We are driven by the driven and we don't get anything.</p>
                    <span>-By Siddhant M. | 05 mins read</span>
                  </div>
                  <div className="drumimg-card">
                    <div className="drumimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                      <i class="fas fa-arrow-up"></i>
                    </div>

                    <h1>Lorem ipsum doler with site amen</h1>
                    <p>We are driven by the driven and we don't get anything.</p>
                    <span>-By Siddhant M. | 05 mins read</span>
                  </div>
                  <div className="drumimg-card">
                    <div className="drumimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                      <i class="fas fa-arrow-up"></i>
                    </div>

                    <h1>Lorem ipsum doler with site amen</h1>
                    <p>We are driven by the driven and we don't get anything.</p>
                    <span>-By Siddhant M. | 05 mins read</span>
                  </div>
                </div>
                <div className="carousalBlog">
                  <Carousal />
                </div>
                <button>view all items</button>
              </div>
            </div>
            <div className="viewBtnRes">
              <button>view all items</button>
            </div>
          </section>
          <section className="bg-Black-container">
            <div className="bg-black-blog">
              <div className="black_first">
                <h2>
                  THE <br /> SHREWDNESS
                </h2>
                <h1> THE SHREWDNESS</h1>
              </div>
              <div className="text-wrapper-blog">
                <div>
                  We think long and hard about your business challenges and comeup with the best way
                  to reach your goals. Thn we develop strategies. We think long and hard about your
                  business challenges and comeup with the best way to reach your goals. Thn we
                  develop strategies.
                </div>
              </div>
              <div className="responsive-images-blog">
                <img src="https://image1.masterfile.com/getImage/ODc3LTA4MTI5NDM3ZW4uMDAwMDAwMDA=AEnoCK/877-08129437en_Masterfile.jpg" />
                <img src="https://i.pinimg.com/474x/ea/27/0d/ea270d4d381838c06c5b004edfe64950.jpg" />
              </div>
              <div className="responsive-images-blog2">
                <img src="https://image.freepik.com/free-photo/beautiful-business-woman-blue-suit-is-smiling-white-background_33799-2639.jpg" />
                <img src="https://i.pinimg.com/originals/10/17/23/1017230f6ed9a3ecdbb65ea9494bdc58.jpg" />
              </div>
            </div>
            <div className="imagesBlog-container">
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
            </div>
          </section>
          <section className="hang-container">
            <ContactUsComponent />
            <footer>footer</footer>
          </section>
        </ReactPageScroller>
      </main>
    );
  }
}

export default Features;
