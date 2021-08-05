import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from "./loginUser.module.css";
// import Input from "../../../Component/base login/Input";
// import Button_switch from "../../../Component/base login/ButtonSwitch";
// import Button_baseLogin from "../../../Component/base login/Button_baseLogin";
import Logo_login from "../../../Component/base login/logo";
import {loginBuyer} from '../../../configs/redux/actions/buyerActions'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Login_User = (props) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
      
    'email' : '',
    'password': ''
    
})

  const handlerChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })

}
  const handleLogin = ()=>{
     dispatch(loginBuyer(form, history))
  }

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
      <Link to="/login">
        <button className={style.seller} type="button">
          Seller
        </button>
      </Link>
      </div>

      <div className={style.formwrap}>

           <input type="text" name="email" placeholder="Email" value={form.email} onChange={handlerChange} className={style["form-control"]}/>

           <input type="password" name="password" placeholder="Password" value={form.password} onChange={handlerChange} className={style["form-control"]}/>
  
    <div className={style.forgotPass}>
          <Link to="reset_password_custommer">Forgot Password?</Link>
        </div>

        <button className={style.btnLogin} onClick={handleLogin}>Login</button>
        {/* <Button_baseLogin title="Login"  onClick={handleLogin}/> */}

        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register_customer"> Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login_User;
