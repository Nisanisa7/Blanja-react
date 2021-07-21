import React from "react";
import { Link } from "react-router-dom";
import style from "./loginUser.module.css";
import Input from "../../Component/base login/Input";
import Button_switch from "../../Component/base login/ButtonSwitch";
import Button_baseLogin from "../../Component/base login/Button_baseLogin";
import Logo_login from "../../Component/base login/logo";

function Login_User() {
  return (
    <div className={style.wrapper}>
      <Logo_login/>
      <p className={style.texttitle}>Please login with your account</p>
      <Link to="/login">
      <Button_switch color="primary" />
      </Link>
      <div className={style.formwrap}>

        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div className={style.forgotPass}>
          <Link to="/request_password">Forgot Password?</Link>
        </div>
        <Link to="/home">
        <Button_baseLogin title="Login" />
        </Link>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register_customer"> Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login_User;
