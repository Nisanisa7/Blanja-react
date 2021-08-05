import React, {useState} from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../Component/base login/Button_baseLogin";
import Input from "../../Component/base login/Input";
import Logo_login from "../../Component/base login/logo";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router"; 
import { loginSeller } from "../../configs/redux/actions/sellerAction";

const Login = ({ props }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    'email':'',
    'password':''
  })

const handleChange = (e)=>{
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}
const handleLogin = (e)=>{
  dispatch(loginSeller(form, history))
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
        <button className={style.seller} type="button">
          Seller
        </button>
      </div>
      <div className={style.formwrap}>

        <Input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange}/>
        <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
      
        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>

        <Button_baseLogin title="Login" onClick={handleLogin}/>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register"> Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
