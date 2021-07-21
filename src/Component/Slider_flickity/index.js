import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import style  from "./slider.module.css";

import Tshirt from "../../asset/image/smol pic/tshirt.png"
import Shorts from "../../asset/image/smol pic/shorts.png"
import Shoes from "../../asset/image/smol pic/Group 1229.png"
import Jacket from "../../asset/image/smol pic/Group 1231.png"
import Pants from "../../asset/image/smol pic/Group 1230.png"
import Highheels from "../../asset/image/smol pic/high heels.png"
import Wristwatch from "../../asset/image/smol pic/wrist watch.png"


import { Link } from "react-router-dom";


const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 1500,
  pageDots: false,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className={style.carousel_cell}>
         <img src={Tshirt} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Shorts} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Shoes} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Jacket} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Pants} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Highheels} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Wristwatch} alt="" /> </div>
    </Flickity>
  );
}

export default Carousel;
