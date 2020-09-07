import React, { Component } from 'react'
import './drumbeat.scss';
import br from "./../images/potti.png"

export class drumbeat extends Component {
    render() {
        return (
            <div className="drum">

                <div className="beat">
                    <h1>DRUMBEAT</h1>
                    <img src={br}></img>
                    <h1><b>Lorem ipsum dolar<br></br>sit amen</b></h1>
                    <p className="par">Online swipping is a slippery slope.<br></br> You know what's great? Real first dates</p>
                    <h3>By siddahant M. |  05 mins read</h3>

                </div>
                <button>View All Articles</button>


            </div>

        )
    }
}

export default drumbeat
