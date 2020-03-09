import React, { Component } from 'react'

export class TestimonialItem extends Component {
    render() {
        return (
            <div className="Tgrid" >
                <h1 className="headh">Testimonials</h1>
                <center><p className="Tcontent">{this.props.content}</p></center>
                <image src={this.props.imgLink} />
                <center>
                    <a href={this.props.redirectLink} target="blank">
                        <i class="author">{this.props.link}</i>
                    </a>
                </center>
            </div>
        )
    }
}

export default TestimonialItem
