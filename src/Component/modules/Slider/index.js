import React, { Component } from "react";
import Slider from "react-slick";
import Banner from "../../../asset/image/benjamin captiom.png"
import Banner_black from "../../../asset/image/ian caption black edition.png"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      arrows:true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 2,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Banner} alt="" />
          </div>
          <div>
            <img src={Banner_black} alt="" />
          </div>
          <div>
             <img src={Banner} alt="" />
          </div>
          <div>
            <img src={Banner_black} alt="" />
          </div>
          <div>
             <img src={Banner} alt="" />
          </div>
          <div>
          <img src={Banner_black} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}