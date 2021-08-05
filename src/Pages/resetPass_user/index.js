import React, {useState} from "react";
import style from "./resetPass.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../Component/base login/logo";
import Input from "../../Component/base login/Input";
import Button from "../../Component/base login/Button_baseLogin";
import axios from "axios";

const ResetPasswordCust = (props) => {
  
  const[form, setForm] = useState({
    'email': ''
  })
  const handleChange = (e) =>{
      setForm({
        ...form,
      [e.target.name] : e.target.value
      })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://localhost:4000/v1/user/email', form)
    .then(()=>{
      alert('check your email for more information')
    })
    .catch((err)=>{
      console.log(err);
      alert('something wrong')
    })
  }
  
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <p className={style.texttitle}>Reset Password</p>
      <div className={style.formwarp}>
        <Input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <div className={style.forgotPass}>
          <Link to="/reset_password_custommer">Forgot Password?</Link>
        </div>
      </div>
      <Button title="Find Email" onClick={handleSubmit}/>
      <div className={style.registerLink}>
        Dont have a Tokopedia account?<Link to="/register_customer"> Register</Link>
      </div>
    </div>
  );
};

export default ResetPasswordCust;
