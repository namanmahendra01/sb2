import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import logo from './logo.png'
import Carousel from './components/Carousel'
import Tabletop from 'tabletop'
import Grid from './components/Grid'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import Whyuseus from './components/Whyuseus'
import WorkSteps from './components/WorkSteps'
import './App.css'
import ModesOfEngagement from './components/ModesOfEngagement'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Look from './components/Look'
import Typeslider from './components/Typeslider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




export class App extends Component {

  state ={
    links : [
      { label: '9811683092', link: '#home', },
      { label: 'Blog', link: '#blog' },
      { label: 'Case Studies', link: '#case-Studies' },
      { label: 'Careers', link: '/career' },
      { label: 'Pricing Plans', link: '#pricing-plans' },
      { label: 'Space Providers', link: '#space-providers' },
      { label: 'Request Quote', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc5V3eG3yBV8qjtnHBkub7xHlhq2SN5F0vKAbBg2PgfKbUzOQ/viewform', },
    ],
    images :[],
    faq:[]

  } 
  componentDidMount(){
    Tabletop.init({
      key:'1GLdMtnJrWUejr-QiXvbjRLTG55CO7RVOXJAcGWZV-Zw',
      callback:googleData =>{
        this.setState({
          images:googleData
        })
      },
      simpleSheet:true
    })
    Tabletop.init({
      key:'1FESf_Ikp8n0CrXviZKtLt0gKv-ZedhaKh8IfT4j9H8s',
      callback:googleData =>{
        this.setState({
          faq:googleData
        })
      },
      simpleSheet:true
    })
  }
  
  
  render() {
    return (
      <Router>
        <div className="container">
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links} logo={logo} quoteLink={this.state.quote} className="NavigationBar"/>
                <Carousel images={this.state.images} className="CorouselSlide" />
                <button type="button" className="BRbutton"><p>CONTACT US</p></button>
                <Grid/> 
                <Typeslider/>

                <HowItWorks/>
                <Faq faqs={this.state.faq}/>
                <Testimonials />
                <Footer />
              </React.Fragment>
            )} />
            <Route exact path="/partner" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links} logo={logo} quoteLink={this.state.quote} className="NavigationBar"/>
                <Carousel images={this.state.images} className="CorouselSlide" />
                <button type="button" className="BRbutton"><p>CONTACT US</p></button>
                <Whyuseus />
                <HowItWorks/>
                <Faq faqs={this.state.faq}/>
                <Footer/>
              </React.Fragment>
            )} />
            <Route exact path="/career" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links} logo={logo} quoteLink={this.state.quote} className="NavigationBar"/>
                <Carousel images={this.state.images} className="CorouselSlide" />
                <button type="button" className="BRbutton"><p>CONTACT US</p></button>
                <Team />
                <ModesOfEngagement />
                <Look />
                <WorkSteps />
                <Faq faqs={this.state.faq}/>>
                <Footer/>
              </React.Fragment>
            )} />
        </div>
      </Router>
    );
  }
}

export default App