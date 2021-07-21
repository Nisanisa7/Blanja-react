import React from "react";
import style  from "./navbar_seller.module.css";
import LogoBag from "../../../asset/image/shopping-bag 1.png";
import LogoText from "../../../asset/image/Blanja.png";
import Bell from "../../../asset/image/bell (1) 1.png";
import Mail from "../../../asset/image/mail (3) 1.png";
import Profile from "../../../asset/image/Mask Group.png";


const NavbarSeller = () => {
  return (
    <div>
    <header>
      <div className={style.logo}>
        <img src={LogoBag} alt="" />
        <img className={style.img2} src={LogoText} alt="" />
      </div>
      <div className={style.center_element}></div>

      <div className={style.nav}>
        <ul className={style.nav_link}>
          <li>
            <a href="">
              <img src={Bell} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Mail} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Profile} alt="" />
            </a>
          </li>
        </ul>
      </div>
      </header>
    </div>
  );
};

export default NavbarSeller;
