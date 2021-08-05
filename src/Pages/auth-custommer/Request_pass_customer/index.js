import React from "react";
import style from "./reqpass.module.css";
import Lock from "../../../asset/image/reset password.png";
import Logo_login from "../../../Component/base login/logo";
import { Link } from "react-router-dom";

const RequestPass = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inner_Wrap}>

        <div className={style.logo}>
          <Logo_login />
        </div>

        <h1 className={style.h1Title}>Request to reset your password</h1>

        <div className={style.centerImage}>
          <img src={Lock} alt="" />
        </div>

        <p className={style.text}>
          The following is the button for you to reset the password
        </p>
        <Link to="/reset_password">
          <button className={style.btn}>Change Password</button>
        </Link>
      </div>

      <footer></footer>
    </div>
  );
};

export default RequestPass;
