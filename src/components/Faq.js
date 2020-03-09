import React, { Component } from 'react'
import './faq.css'
import FaqList from './FaqList'

export class Faq extends Component {
    render() {
    
        let faqLists=this.props.faqs.map((faq,index) =>{
            let faqLists=<FaqList question={faq.question} answer={faq.answer}/>
                return(
                        <li key={index}>
                            {faqLists}
                        </li>
                )
        })
        return (
            <div className="container2">
                <h1 className="headh">Frequently Asked Questions</h1>
                <br/>
                <br/>
                <div className="fcontainer">
                    <div className="startAccordion"/>
                    <ol className="accordion">
                            {faqLists}
                    </ol>
                    <div className="endAccordion"/>
                </div>
                <button type="button" class="collapsible">+</button>
            </div>
        )
    }
}
 
export default Faq
