import React, { Component } from "react";
import "./Years.scss"
class Years extends Component {
  render() {
    return (
      <div>
        <div id="app">
          <span style={{ fontSize: "60px", fontWeight:"500" }}>3</span>
          <span className="years">YRS</span>
        </div>
      </div>
    );
  }
}

export default Years;
