import React, { Component } from 'react'
import Yellow from "../subcomponents/yellow"
import Red from "../subcomponents/red"
import Blue from "../subcomponents/blue"
import Pink from "../subcomponents/pink"
import "./main.css"

class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <div className="frst">
                        <Yellow/>
                    </div>
                    <div className="secnd">
                        <Red/>
                    </div>
                    <div className="thrd">
                        <Blue/>
                    </div>
                    <div className="fourt">
                        <Pink/>
                    </div>
                </main>

            </>
        )
    }
}

export default Main
