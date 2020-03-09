import React, { Component } from "react";
import Slider from "react-slick";
import './typeslider.css'
import Tabletop from 'tabletop';




export class Typeslider extends Component {
  constructor() {
    super()
    this.state = {
      data1: [],
      data2: [],
      data3: [],

      data4: []

    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1lY5yHa0sxr9qFW4udT1Y0-gAcWiYBM5POjRFeuUa-mo',
      callback: googleData => {
        this.setState({
          data4: googleData
        })
      },
      simpleSheet: true
    })
    Tabletop.init({
      key: '11ZHAteH21BA5FmUdRUFiZCUGPdtBRmsrSQsqm4_Lb0w',
      callback: googleData => {
        this.setState({
          data3: googleData
        })
      },
      simpleSheet: true
    })
    Tabletop.init({
      key: '1eDShnYgdia9qzbYSwagubjxh6hxDUOsu2PVq39yW7ps',
      callback: googleData => {
        this.setState({
          data2: googleData
        })
      },
      simpleSheet: true
    })
    Tabletop.init({
      key: '1L9gTNxSqrVOpiUK_yubqua5i_nIh5xUTdIBySvLkdYw',
      callback: googleData => {
        this.setState({
          data1: googleData
        })
      },
      simpleSheet: true
    })
  } l

  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      className: "slides",
    };
    const { data1 } = this.state
    const { data2 } = this.state

    const { data3 } = this.state

    const { data4 } = this.state

    return (
      <div>
        <div className="Inventtype">
          <h1 id="toptype">Inventory type</h1><br />
          <p>You can rent the following classrooms and spaces across multiple locations</p>
        </div>
        <div className="typecontainer">
          <div className="starttype" />
          <div className="midtype">
            <div className="typerow">
              <div className="rtb0">
                <div className="rtb1">
                  <div className="typehead">

                    <h1>  Classroom </h1>
                  </div>
                  <div className="typecontent">
                    <div className="typeimage">
                      <Slider {...settings}>
                        {data1.map((obj1) => {
                          return (
                            <div className="image3">
                              <img width="100%" src={obj1.image} />
                              <div className="typedetail">
                              <p id="p1">{obj1.heading}</p><br />
                                <p>{obj1.capacity}</p><br />
                                <p>{obj1.rent}</p><br />
                              </div>
                            </div>
                          )
                        }
                        )}
                      </Slider>
                    </div>

                  </div>
                </div>
              </div>
              <div className="rtb0">
                <div className="rtb1">
                  <div className="typehead">

                    <h1> Activity </h1>
                  </div>
                  <div className="typecontent">
                    <div className="typeimage">
                      <Slider {...settings}>
                        {data2.map((obj2) => {
                          return (
                            <div className="image3">
                              <img width="100%" src={obj2.image} />
                              <div className="typedetail">
                                <p id="p1">{obj2.heading}</p><br />
                                <p>{obj2.capacity}</p><br />
                                <p>{obj2.rent}</p><br />
                              </div>
                            </div>
                          )
                        }
                        )}
                      </Slider>
                    </div>

                  </div>
                </div>
              </div>
              <div className="rtb0">
                <div className="rtb1">
                  <div className="typehead">

                    <h1>  Event </h1>
                  </div>
                  <div className="typecontent">
                    <div className="typeimage">
                      <Slider {...settings}>
                        {data3.map((obj3) => {
                          return (
                            <div className="image3">
                              <img width="100%" src={obj3.image} />
                              <div className="typedetail">
                                <p id="p1">{obj3.heading}</p><br />
                                <p>{obj3.capacity}</p><br />
                                <p>{obj3.rent}</p><br />
                              </div>
                            </div>
                          )
                        }
                        )}
                      </Slider>
                    </div>

                  </div>
                </div>
              </div>
              <div className="rtb0">
                <div className="rtb1">
                  <div className="typehead">

                    <h1>  Admin </h1>
                  </div>
                  <div className="typecontent">
                    <div className="typeimage">
                      <Slider {...settings}>
                        {data4.map((obj4) => {
                          return (
                            <div className="image3">
                              <img width="100%" src={obj4.image} />
                              <div className="typedetail">
                                <p id="p1">{obj4.heading}</p><br />
                                <p>{obj4.capacity}</p><br />
                                <p>{obj4.rent}</p><br />
                              </div>
                            </div>
                          )
                        }
                        )}


                      </Slider>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="endtype" />
        </div>
      </div >
    );
  }
}
export default Typeslider
