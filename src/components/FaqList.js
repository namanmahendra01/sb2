import React, { Component } from 'react'
import './faqlist.css'

export class FaqList extends Component {
    render() {
        return (
            <div className="item">
                <h3 className="question">+ {this.props.question}</h3>
                    <div className="answer">
                        <p>{this.props.answer}</p>
                    </div>  
            </div>
        )
    }
}

export default FaqList
