import React, { Component } from "react";
import "./Rotation.css";

class Rotation extends Component {
  render() {
    const {size} = this.props;
    const width = `${size}px`;
    const height = `${size}px`;
    const viewBox = `0 0 ${size} ${size}`;
    // const viewBox = `0 0 ${size} ${size}`;
    const cx = size/2;
    const radius = size/4
    return (
      <div>
        <div id="circle">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width={width}
            height={height}
            viewBox={viewBox}
            // enable-background="new 0 0 150 150"
            space="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx={cx} cy="100" r={radius} fill="none" />
            <g>
              <use href="#circlePath" fill="none" />
              <text >
                <textPath href="#circlePath">
                  Minimum Work Experience Minimum work
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Rotation;

Rotation.defaultProps = {
  size: 150
}
