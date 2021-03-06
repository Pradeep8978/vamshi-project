import React, { Component } from "react";
import HeaderSticky from '../../components/Headersticky/HeaderSticky.js'
import "./JoinUs.scss";
// import Yellowimg from "./../../images/Annotation 2020-09-03 132008.png";
// import Pinkimg from "./../../images/Annotation 2020-09-03 132111.png";
import Rotation from "./../../components/Rotation/Rotation";
import Years from "./../../Layouts/Years/Years";

class JoinUs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <main className="joinus-main">
          <HeaderSticky bgColor ='#f814cb'/>
          <section className="bg-wrapper"></section>
          <div className="join-us-container">
            <div className="joinus-heading">
              <h2 className="org-name">MONKEY GROUP ILLUSTRATION BG</h2>
              <div className="joinUs-text-rotation"></div>
              <div className="heading">
                <h2 className="join-us">
                  <Rotation />
                  JOIN US{" "}
                </h2>
                <div className="filterblog">
                  <div className="first-para">
                    <p>
                      We do it with a dash of insight, a sprinking of creativity and a whole lot of
                      market understanding.
                    </p>
                  </div>
                  <div className="icon-blog">
                    <p>FILTER:RECENT</p> &nbsp; &nbsp; &nbsp; &nbsp;
                    <p>
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <section> */}
            {Array(5)
              .fill(null)
              .map(() => {
                return (
                  <section className="experience-card">
                    <div className="textBlog">
                      <h4>QUIRKY PERSONNA HEADER | DESIGNATION</h4>
                      <p>
                        We think long and hard about your business challenges and comeup with the
                        best way to reach your goals. Thn we develop strategies.
                      </p>
                      <button>Read More</button>
                    </div>
                    <div className="imgBlog">
                      {/* <img src={Yellowimg} /> */}
                      <Rotation text="MINIMUM WORK EXPERIENCE . MINIMUM WORK EXPERENCE . " />
                      <span className="bubble"></span>
                      <div className="yrs">
                        <Years />
                      </div>
                    </div>
                  </section>
                );
              })}
          </div>
        </main>
      </>
    );
  }
}

export default JoinUs;
