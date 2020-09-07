import React, { Component } from 'react'
import "./shredness.scss"
import fl from "./../images/potti.png"
class shredness extends Component {
    render() {
        return (
            <>
                <main className="bg-black">
                    {/* <section className="ness">
                        <div>
                            <h1>THE SHREWDNESS</h1>
                            <p>If you are the kind of person wants to inspire<br></br>positive change ,to refuses to think inside the<br></br>box and is looking for the opprtunity to <br></br>take charge. you are checking out an agency<br></br>that should be the part of.</p>
                        </div>
                        <div className="images">
                            <img src={fl}></img>
                            <img src={fl}></img>

                        </div>
                        <div className="images">
                            <img src={fl}></img>
                            <img src={fl}></img>
                        </div>

                    </section> */}
                    <section>
                        <div className="ness">
                        <h1>THE SHREWDNESS</h1>
                        <p>If you are the kind of person wants to inspire<br></br>positive change ,to refuses to think inside the<br></br>box and is looking for the opprtunity to <br></br>take charge. you are checking out an agency<br></br>that should be the part of.</p>

                        </div>
                        <div className="images">
                            <img src={fl}></img>
                            <img src={fl}></img>

                        </div>
                        <div className="images">
                            <img src={fl}></img>
                            <img src={fl}></img>

                        </div>
                    </section>

                </main>

            </>
        )
    }
}

export default shredness
