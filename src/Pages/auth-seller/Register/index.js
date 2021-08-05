import React, {useState} from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../../Component/base login/Button_baseLogin";
import Input from "../../../Component/base login/Input";
import Logo_login from "../../../Component/base login/logo";
import { useDispatch } from "react-redux";
import { registerSeller } from "../../../configs/redux/actions/sellerAction";

const Register = ({props}) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    'name':'',
    'email' : '',
    'phone_number':'',
    'store_name':'',
    'password': ''
    
})

  const handleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}
const handleRegister = () =>{
  dispatch(registerSeller(form))
}
  return (
    <div className={style.wrapper}>
        <Logo_login/>
        <p className={style.texttitle}>Please Signup with your account</p>
        
      <div className={style.buttonGroup}>
        <Link to="/register_customer">
        <button className={style.cus} type="button">
          Customer
        </button>
        </Link>
        <Link to="/register">
        <button className={style.seller} type="button">
          Seller
        </button>
        </Link>
      </div>
      <div className={style.formwarp}>

        <Input type="text"value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
        <Input type="text"value={form.email} name="email" onChange={handleChange} placeholder="Email"/>
        <Input type="text"value={form.phone_number} name="phone_number" onChange={handleChange} placeholder="Phone number"/>
        <Input type="text"value={form.store_name} name="store_name" onChange={handleChange} placeholder="Store name"/>
        <Input type="password"value={form.password} name="password" onChange={handleChange} placeholder="Password"/>

        <Button_baseLogin title="register" onClick={handleRegister}/>
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;