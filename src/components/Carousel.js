import React, { Component } from 'react'
import './ImageCarousel'
import ImageCarousel from './ImageCarousel'

export class Carousel extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          count: 0
        }
    }

    render() {
        return(
            this.props.images.map((obj,index) =>{
                const size = Object.keys(this.props.images).length;
                if(index===(this.state.count%size))
                    return(
                        <div className="slideCarousel" >
                            <ImageCarousel  image={obj.url} />
                        </div>
                    )
            })
        )
    }

    // setInterval
    // clearInterval
    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(({count}) => ({
                count:count+1
            }))
        },1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
            
}

export default Carousel