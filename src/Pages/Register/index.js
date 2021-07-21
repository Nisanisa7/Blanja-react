import React from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../Component/base login/Button_baseLogin";
import Input from "../../Component/base login/Input";
import Logo_login from "../../Component/base login/logo";

const register = ({props}) => {
  return (
    <div className={style.wrapper}>
        <Logo_login/>
        <p className={style.texttitle}>Please Signup with your account</p>
        
      <div className={style.buttonGroup}>
        <button className={style.cus} type="button">
          Customer
        </button>
        <button className={style.seller} type="button">
          Seller
        </button>
      </div>
      <div className={style.formwarp}>

        <Input type="text" placeholder="Name"/>
        <Input type="text" placeholder="Email"/>
        <Input type="text" placeholder="Phone number"/>
        <Input type="text" placeholder="Store name"/>
        <Input type="password" placeholder="Password"/>

        <Button_baseLogin title="register"/>
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
};

export default register;