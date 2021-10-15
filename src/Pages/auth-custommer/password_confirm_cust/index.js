import React, {useState} from "react";
import { useEffect } from 'react'
import style from "./passwordconf.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../../Component/base login/logo";
import Input from "../../../Component/base login/Input";
import Button from "../../../Component/base login/Button_baseLogin";
import queryString from "query-string";
import { useLocation} from "react-router-dom";
import axios from "axios";
const Confirm_pass_custommer = () => {

  const { search } = useLocation();

  const [form, setForm] = useState({
    token:'',
    password:'',
    verifyPassword:''
  })

  useEffect(() => {
    const query = queryString.parse(search)
    const token = query.token
    setForm({
      ...form,
      token:token
    })
  },[])

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_BACKEND_API}/user/changePass`)
    .then((res)=>{
      alert('success')
    })
    .catch((err)=>{
      console.log(err);
      alert('internal server error')
    })
  
  }
  return (
    <div className={style.wrapper}>
      <Logo_login />
      <h1 className={style.h1_title}>Reset Password</h1>
      <p className={style.texttitle}>
        You need to change your password to activate your account
      </p>
      <div className={style.formwarp}>
        <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange}/>
        <Input type="password" placeholder="Confirmation New Password" name="verifyPassword" value={form.verifyPassword} onChange={handleChange}/>
        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>
        <Link to="/login_Confirmation">
        <Button title="Save change" onClick={handleSubmit}  />
        </Link>
      </div>
    </div>
  );
};

export default Confirm_pass_custommer;
