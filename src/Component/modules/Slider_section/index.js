import React, { Component } from "react";
import Slider from "react-slick";
import Tshirt from "../../../asset/image/smol pic/tshirt.png"
import Shorts from "../../../asset/image/smol pic/shorts.png"
import Shoes from "../../../asset/image/smol pic/Group 1229.png"
import Jacket from "../../../asset/image/smol pic/Group 1231.png"
import Pants from "../../../asset/image/smol pic/Group 1230.png"


export default class SimpleSlider extends Component {
  render() {
    const settings = {

      autoplay: true,
      arrows:true,
      infinite: true,
      centerMode: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Tshirt} alt="" />
          </div>
          <div>
            <img src={Shorts} alt="" />
          </div>
          <div>
             <img src={Shoes} alt="" />
          </div>
          <div>
            <img src={Jacket} alt="" />
          </div>
          <div>
             <img src={Pants} alt="" />
          </div>
          {/* <div>
          <img src={} alt="" />
          </div> */}
        </Slider>
      </div>
    );
  }
}