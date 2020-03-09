import React, { Component } from 'react'
import './imagecarousel.css'

export class ImageCarousel extends Component {
    render() {
        return (
            <div className="carousel">
                <img src={this.props.image} alt="Not Availabe"/>
                <section className="slideContent">
                    <h1>Helping Educators Grow</h1>
                    <p>
                        Ready to use classrooms for rent at multiple locations in Delhi NCR.<br/>
                        Start batches quickly. Reach more students.<br/>
                        Pay only for the batch hours that you use.<br/>
                    </p>
                 </section>
            </div>
        )
    }
}

export default ImageCarousel
