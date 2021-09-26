import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import style  from "./slider.module.css";

import Banner from "../../../asset/image/benjamin captiom.png"
import Banner_black from "../../../asset/image/ian caption black edition.png"


const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 1500,
};

function Carousel_Banner({className}) {
  return (
    <Flickity
      className={"carousel", className} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className={style.carousel_cell}> <img src={Banner} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner_black} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner_black} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner_black} alt="" /> </div>
      <div className={style.carousel_cell}> <img src={Banner} alt="" /> </div>
    </Flickity>
  );
}

export default Carousel_Banner;
