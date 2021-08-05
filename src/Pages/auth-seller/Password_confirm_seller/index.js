import React from "react";
import style from "./pass_conf_seller.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../../Component/base login/logo";
import Input from "../../../Component/base login/Input";
import Button from "../../../Component/base login/Button_baseLogin";

const Confirm_pass_seller = () => {
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <h1 className={style.h1_title}>Reset Password</h1>
      <p className={style.texttitle}>
        You need to change your password to activate your account
      </p>
      <div className={style.formwarp}>
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirmation New Password" />
        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>
        <Link to="/login_Confirmation">
        <Button title="Save change" />
        </Link>
      </div>
    </div>
  );
};

export default Confirm_pass_seller;
