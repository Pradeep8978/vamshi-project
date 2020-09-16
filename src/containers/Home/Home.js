import React, { Component } from "react";
import "./Home.scss";
import Image from "../../images/Logo-wa.png";
import Bgimage from "../../images/bg-wrapper.jpg";
import Carousal from "../../Layouts/Carousal/Carousal";
import ArrowCarousal from "../../Layouts/ArrowCarousal/ArrowCarousal";
import NavBar from "../../Layouts/NavBar/NavBar";
import ContactUsComponent from "../../components/ContactUs/ContactUs";

import Rotation from "../../components/Rotation/Rotation";
import ReactPageScroller from "react-page-scroller";
import WorkComponent from "./Work";
import StepIndicator from "../../components/StepIndicator/StepIndicator";

class Features extends Component {
  state = {
    pageNumber: 0,
  };
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  pageOnChange = (pageNumber) => {
    this.setState({
      pageNumber,
    });
  };
  render() {
    return (
      <main className="features-container">
        <StepIndicator pageNumber={this.state.pageNumber} pageOnChange={this.pageOnChange} />
        <ReactPageScroller
          // ref={(c) => (this.reactPageScroller = c)}
          className="page-scroller"
          pageOnChange={this.pageOnChange}
          customPageNumber={this.state.pageNumber}
        >
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
          <section>
            <WorkComponent />
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
                    <span style={ { fontStyle: "italic"}}>-By Siddhant M. | 05 mins read</span>
                  </div>
                  <div className="drumimg-card">
                    <div className="drumimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                      <i class="fas fa-arrow-up"></i>
                    </div>

                    <h1>Lorem ipsum doler with site amen</h1>
                    <p>We are driven by the driven and we don't get anything.</p>
                    <span style={ { fontStyle: "italic"}}>-By Aditya A. | 05 mins read</span>
                  </div>
                  <div className="drumimg-card">
                    <div className="drumimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepn2GOGauQdORu3oqqTBJblJZgDQ-lJZewg&usqp=CAU" />
                      <i class="fas fa-arrow-up"></i>
                    </div>

                    <h1>Lorem ipsum doler with site amen</h1>
                    <p>We are driven by the driven and we don't get anything.</p>
                    <span style={ { fontStyle: "italic"}}>-By Siddhant M. | 05 mins read</span>
                  </div>
                  
                </div>
                <div className="viewBtnRes">
              <button>VIEW ALL ARTICLES</button>
             
            </div>
                <div className="carousalBlog">
                  <Carousal />
                  <button>view all items</button>
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
                <h1> THE SHREWDNESS</h1>
              </div>
              <div className="text-wrapper-blog">
                <div>
                   If you're the kind of person wants to inspire postive change, if is to think inside the box and is 
                   and is looking for opportunity  to take change you're checking out an agency that you should part of.
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
                <img src={require("../../images/workimages/meet3.JPG")} />
                <div className="img_description_layer">
                  <div className="img-description-content">
                    <p className="img_description">
                      We are driven by the driven and we don't let anything get in the way.
                      <div style={{ backgroundColor: "#f814cb" }}>Sushant Shrike</div>
                    </p>
                    <Rotation
                      fill=""
                      text=". IMPULSIVE &nbsp; .	&nbsp; TREKKER 	&nbsp; .	&nbsp; DESIGNER .&nbsp;&nbsp;"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper-img-blog ">
                <img src={require("../../images/workimages/meet2.jpg")} />
                <div className="img_description_layer">
                  <div className="img-description-content">
                    <p className="img_description">
                      We are driven by the driven and we don't let anything get in the way.
                      <div style={{ backgroundColor: "#f814cb" }}>Sushant Shrike</div>
                    </p>
                    <Rotation
                      fill=""
                      text=". IMPULSIVE &nbsp; .	&nbsp; TREKKER 	&nbsp; .	&nbsp; DESIGNER .&nbsp;&nbsp;"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper-img-blog">
                <img src={require("../../images/workimages/meet1.JPG")} />
                <div className="img_description_layer">
                  <div className="img-description-content">
                    <p className="img_description">
                      We are driven by the driven and we don't let anything get in the way.
                      <div style={{ backgroundColor: "#f814cb" }}>Sushant Shrike</div>
                    </p>
                    <Rotation
                      fill=""
                      text=". IMPULSIVE &nbsp; .	&nbsp; TREKKER 	&nbsp; .	&nbsp; DESIGNER .&nbsp;&nbsp;"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper-img-blog ">
                <img src={require("../../images/workimages/meet4.JPG")} />
                <div className="more-layer">
                  <div className="meet-all">
                    <i className="fas fa-arrow-up" />
                    <div>MEET ALL</div>
                  </div>
                </div>
                <div className="img_description_layer">
                  <div className="img-description-content">
                    <p className="img_description">
                      We are driven by the driven and we don't let anything get in the way.
                      <div style={{ backgroundColor: "#f814cb" }}>Sushant Shrike</div>
                    </p>
                    <Rotation
                      fill=""
                      text=". IMPULSIVE &nbsp; .	&nbsp; TREKKER 	&nbsp; .	&nbsp; DESIGNER .&nbsp;&nbsp;"
                    />
                  </div>
                </div>
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
