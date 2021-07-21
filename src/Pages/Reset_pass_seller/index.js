import React from "react";
import style from "./resetPass.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../Component/base login/logo";
import Input from "../../Component/base login/Input";
import Button from "../../Component/base login/Button_baseLogin";

const ResetPassword = () => {
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <p className={style.texttitle}>Reset Password</p>
      <div className={style.formwarp}>
        <Input type="text" placeholder="Email" />
        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>
      </div>
      <Link to="/Confirmation">
      <Button title="Find Email"/>
      </Link>
      <div className={style.registerLink}>
        Dont have a Tokopedia account?<Link to="/register"> Register</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
