import React from 'react'
import './modesofengagement.css'

export default function ModesOfEngagement() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="headh">Modes of Engagement</h1>
            <br/>
            <p className="headp">Whether you're a student, a fresher or a full-timer, we're always on the look-out for fresh talent looking to solve exciting problems.</p>
            <br/>
            <br/>
            <div className="bigContainer" >
                <div className="start" />
                <div className="main" >
                    <div className="MOEContainer">
                            <div className="gridMOE">
                                <div>
                                    <h1>Internship</h1>
                                    <h3>Candidate Profile:</h3>
                                    <br/>
                                    <p>Students / Recent Grads / Gap year students</p>
                                    <br/>
                                    <h3>Minimum commitment expected:</h3>
                                    <p>3 months*</p>
                                    <br/>
                                </div>
                            </div>
                            <div className="gridMOE">
                                <div>
                                    <h1>Apprenticeship</h1>
                                    <h3>Candidate Profile:</h3>
                                    <br/>
                                    <p>Students / Recent Grads / Gap year students</p>
                                    <br/>
                                    <h3>Minimum commitment expected:</h3>
                                    <p>12 months*</p>
                                    <br/>
                                </div>
                            </div>
                            <div className="gridMOE">
                                <div>
                                    <h1>Full-Time</h1>
                                    <h3>Candidate Profile:</h3>
                                    <br/>
                                    <p>Minimum 6 months in a full-time position after college</p>
                                    <br/>
                                    <h3>Minimum commitment expected:</h3>
                                    <p>2 years</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="end"/>
            </div>
        </div>
    )
}
