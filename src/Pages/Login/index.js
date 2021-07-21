import React from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../Component/base login/Button_baseLogin";
import Input from "../../Component/base login/Input";
import Logo_login from "../../Component/base login/logo";
const Login = ({ props }) => {
  return (
    <div className={style.wrapper}>
    
      <Logo_login/>
      <p className={style.texttitle}>Please login with your account</p>

      <div className={style.buttonGroup}>
        <Link to="/login_user">
        <button className={style.cus} type="button">
          Customer
        </button>
        </Link>
        <button className={style.seller} type="button">
          Seller
        </button>
      </div>
      <div className={style.formwrap}>

        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      
        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>

        <Link to ="/home">
        <Button_baseLogin title="Login" />
        </Link>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register"> Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
