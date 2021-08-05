import React from "react";
import style from "./login_conf.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../../Component/base login/Button_baseLogin";
import Input from "../../../Component/base login/Input";
import Logo_login from "../../../Component/base login/logo";

const Login_confirmation = () => {
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <h1 className={style.h1_title}>Reset Password</h1>
      <p className={style.texttitle}>
        We have sent an email containing a password reset instruction to your
        email. please check your email
      </p>
      <div className={style.formwarp}>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div className={style.forgotPass}>
          <Link to="#">Forgot Password?</Link>
        </div>

        <Link to="/home">
        <Button_baseLogin title="Login" />
        </Link>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register"> Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login_confirmation;
