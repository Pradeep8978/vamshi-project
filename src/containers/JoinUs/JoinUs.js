import React, { Component } from "react";
import NavBar from "./../../Layouts/NavBar/NavBar";
import "./JoinUs.scss";
import Yellowimg from "./../../images/Annotation 2020-09-03 132008.png";
import Pinkimg from "./../../images/Annotation 2020-09-03 132111.png";
import Rotation from "./../../Layouts/Rotation/Rotation";
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
          <NavBar />
          <div className="join-us-container">
            <div className="joinus-heading">
              <div className="heading">
                <h2>JOIN US</h2>
                <p>
                  We do it with a dash of insight, a sprinking of creativity and
                  a whole lot of market understanding.
                </p>
              </div>
              <div className="filterblog">
                <span>
                  FILTER:RECENT &nbsp; &nbsp; &nbsp;{" "}
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <section>
              <div className="textBlog">
                <h4>QUIRKY PERSONNA HEADER | DESIGNATION</h4>
                <p>
                  We think long and hard about your business challenges and
                  comeup with the best way to reach your goals. Thn we develop
                  strategies.
                </p>
              </div>
              <div className="imgBlog">
                {/* <img src={Yellowimg} /> */}
                  <Rotation />
                

                <div className="yrs">
                  <Years />
                </div>
              </div>
            </section>
            <section>
              <div className="textBlog">
                <h4>QUIRKY PERSONNA HEADER | DESIGNATION</h4>
                <p>
                  We think long and hard about your business challenges and
                  comeup with the best way to reach your goals. Thn we develop
                  strategies.
                </p>
              </div>
              <div className="imgBlog">
              <div className="rotation-text">
               
                <Rotation />
</div>
                <div className="yrs">
                  <Years />
                </div>
              </div>
            </section>
            <section>
              <div className="textBlog">
                <h4>QUIRKY PERSONNA HEADER | DESIGNATION</h4>
                <p>
                  We think long and hard about your business challenges and
                  comeup with the best way to reach your goals. Thn we develop
                  strategies.
                </p>
              </div>
              <div className="imgBlog">
                {/* <img src={Yellowimg} /> */}
                <Rotation />

                <div className="yrs">
                  <Years />
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default JoinUs;
