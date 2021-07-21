import React from "react";
import style from "./register_cus.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../Component/base login/logo";
import Button_switch from "../../Component/base login/ButtonSwitch";
import Input from "../../Component/base login/Input";
import Button from "../../Component/base login/Button_baseLogin";
const index = () => {
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <p className={style.texttitle}>Please Signup with your account</p>
      <Button_switch />
      <div className={style.formwarp}>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <Button title="Register" />
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login_user"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default index;
