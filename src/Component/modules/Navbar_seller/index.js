



import React, { useEffect, useState } from "react";
import style from "./navbar_seller.module.css";
import LogoBag from "../../../asset/image/shopping-bag 1.png";
import LogoText from "../../../asset/image/Blanja.png";
import vector from "../../../asset/image/Vector.png";
import Cart from "../../../asset/image/shopping-cart (2) 1 (1).png";
import Bell from "../../../asset/image/bell (1) 1.png";
import Mail from "../../../asset/image/mail (3) 1.png";
import Profile from "../../../asset/image/Mask Group.png";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useClickOutside } from 'react-click-outside-hook'
import Suggest_product from "../../Base/Suggest_Product";
import { toastify } from "../../../utils";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapse: {
    height: "3.8em",
  }

}
const NavbarSeller = () => {
  const profileState = useSelector(state => state.seller)
  const avatar = profileState?.profile?.image
  const profileSeller = localStorage.getItem('image')
  return (
    <div>
      <ToastContainer />
      <div className={`${style.wrapperHead}`}>
        <div className={`container ${style.wrapper}`}>

          <Link to="/home">
            <div className={style.logo}>
              <img src={LogoBag} alt="" />
              <img className={style.img2} src={LogoText} alt="" />
            </div>
          </Link>
            <div className={style.search_bar}>
              <div className={style.box_container}>
               <form onSubmit="">
                <input
                  class={style.search}
                  type="text"
                  name=""
                  placeholder="search"         
                  onChange=""
                />
                <button className={style.hidden}typoe="submit">hidden</button>
          </form>
              </div>

              <div className={style.side_button}>
                <button>
                  {/* <button onClick={handleShow}> */}
                  <img src={vector} alt="" />
                </button>
              </div>
            </div>

          <div className={style.nav}>
            <ul className={style.nav_link}>
              <li>
                <Link to="">
                  <img src={Bell} alt="" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={Mail} alt="" />
                </Link>
              </li>
              <li>
                  <img className={style.avatar} src={avatar ? avatar : profileSeller ? profileSeller : Profile} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSeller;
