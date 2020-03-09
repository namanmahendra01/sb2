import React, { Component } from 'react'
import TestimonialItem from './TestimonialItem'

export class Testimonials extends Component {
    constructor (props) {
        super(props)
        this.state = {
          count: 0,
          testi : [
            { content: 'Accessible staff, flexibility in time slots and timely billing have made our meetings at these space hassle-free.', imgLink: '<img class="testimonials-icon" src="https://drive.google.com/uc?export=view&amp;id=1b34XD24FBzWGNP7RSmIw6b9aG7Hj4uWw" alt="Millennium Gurgaon Toastmasters Club">', redirectLink: 'https://www.toastmasters.org/',link:'Anubhav,Millennium Gurgaon Toastmasters Club'},
            { content: "I've had a very pleasant and positive ex1perience working with SpaceBoat. The team is great at understanding your requirements and providing options with a fast turnaround time. I had a requirement for a venue at very short notice, and the SpaceBoat team ensured we got what we required. On the days of the event, a member of the team was there to ensure everything ran smoothly. Will definitely use their services again when required!", imgLink: 'https://drive.google.com/uc?export=view&id=1IklgWhR-5hUPQLRHJBf6c658_FTQ2QJe', redirectLink: 'https://www.ashoka.edu.in/',link:'Prerna Seth,Ashol University'},
            { content: "Stellar experience! I have been a happy user of Spaceboat's services for almost a year now. They are willing to be flexible and accommodate requirements.", imgLink: 'https://doc-10-8s-docs.googleusercontent.com/docs/securesc/ir1fob5n29ovi2q6jfvbc98l65o4jq1p/a51vhlu2ijdkjcdol8a98rq5nphjoieb/1583312250000/07965019405249740533/02060146413294165991/1eGBdUYECrILVYNDeoAhtKO8bGPLqEIKZ?e=view&authuser=0', redirectLink: 'https://www.delhilawacademy.com/',link:'Vivek Subraimaniyam, Delhi Law University'},
            { content: "Stellar experience! I have been a happy user of Spaceboat's services for almost a year now. They are willing to be flexible and accommodate requirements.", imgLink: 'https://drive.google.com/uc?export=view&id=1r4ub72AUFpOa822o_y0EW3cPEKH60qez', redirectLink: 'https://www.edushastra.com/',link:'Vipul Parashar, Edushashtra'}
          ]
        }
    }
    render(){
        return (
            this.state.testi.map((obj,index) =>{
                if(index===(this.state.count%4))
                {
                    console.log(obj.content)
                    return(
                            <TestimonialItem content={obj.content} imgLink={obj.imgLink} redirectLink={obj.redirectLink} link={obj.link}/>
                    )
                }               
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
        },5000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
}
}
export default Testimonials
