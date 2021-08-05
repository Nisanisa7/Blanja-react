import React, {useState} from "react";
import style from "./register_cus.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../../Component/base login/logo";
// import Button_switch from "../../Component/base login/ButtonSwitch";
// import Input from "../../Component/base login/Input";
// import Button from "../../Component/base login/Button_baseLogin";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { RegisterBuyer } from "../../../configs/redux/actions/buyerActions";
const Register_custommer = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    'name':'',
    'email' : '',
    'password': ''
    
})

  const handlerChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })

}
const handleRegister = () =>{
  dispatch(RegisterBuyer(form, history))
}

  return (
    <div className={style.wrapper}>
      <Logo_login />
      <p className={style.texttitle}>Please Signup with your account</p>
      <div className={style.buttonGroup}>
        <Link to="/register_customer">
        <button className={style.cus} type="button">
          Customer
        </button>
        </Link>
      <Link to="/Register">
        <button className={style.seller} type="button">
          Seller
        </button>
      </Link>
      </div>
      <div className={style.formwarp}>

      <input type="text" name="name" placeholder="name" value={form.name} onChange={handlerChange} className={style["form-control"]}/>
      <input type="text" name="email" placeholder="Email" value={form.email} onChange={handlerChange} className={style["form-control"]}/>
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handlerChange} className={style["form-control"]}/>

{/*         
        <Button title="Register" } /> */}
        <button className={style.btnLogin} onClick={handleRegister}>Register</button>
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login_user"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register_custommer;
