import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import download from './images/wa logo.png';
import pic from './images/potti.png';
function App() {
  return (
    <div>
      <div className="head">
        <div className="logo">

          <img src={download} ></img>

        </div>
        <div className="text">
          <h1>Effectiveness through influence</h1>
          <p>Drog 5 is inthe bussiness of creative problem solving<br></br> from integrated campaign to bussiness design<br></br> our work creates real connections with people and drives results</p>

        </div>
      </div>
      <div className="content">
        <div className="love">
          <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
          <h1>love formtwo</h1>
          <h1>1 lov booth 200dates </h1>
          <p>online shopping is a slippery slope .your know whats great real first dates</p>
          <button>see you</button>
        </div>
        <div calssName="imgbox">
          <img src={pic} ></img>
        </div>
      </div>
      <div className="content1">
        <div className="imgbox1">
          <img src={pic} ></img>
        </div>
        <div className="hate">
        <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
          <h1>love formtwo</h1>
          <h1>1 lov booth 200dates </h1>
          <p>online shopping is a slippery slope .your know whats great real first dates</p>
          <button>see you</button>
        </div>

      </div>
      <div className="content">
        <div className="love">
        <h3>DIGITAL ACTIVATION:ENGAGE BIG</h3>
          <h1>love formtwo</h1>
          <h1>1 lov booth 200dates </h1>
          <p>online shopping is a slippery slope .your know whats great real first dates</p>
          <button>see you</button>
        </div>
        <div calssName="imgbox">
          <img src={pic} ></img>
        </div>
      </div>

      <h1>ALL WORK</h1>
      <div className="allwork">
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
         
        </div>
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
         
        </div>
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
          
        </div>

      </div>
      <div className="allwork">
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
          
        </div>
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
          
        </div>
        <div className="work">
          <img src={pic} ></img>
          <h3>DIGITAL ACTIVATION<br></br>ENGAGEs</h3>
          <h1>#Loveimpormtwo-<br></br>1 Love Booth, 200 Dates</h1>
          
          
        </div>

      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default App;
