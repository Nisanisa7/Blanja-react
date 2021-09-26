import React, {useState} from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../../Component/base login/Button_baseLogin";
import Input from "../../../Component/base login/Input";
import Logo_login from "../../../Component/base login/logo";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router"; 
import { loginSeller } from "../../../configs/redux/actions/sellerAction";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = ({ props }) => {

  const history = useHistory()
  const dispatch = useDispatch()
//   const [form, setForm] = useState({
//     'email':'',
//     'password':''
//   })

// const handleChange = (e)=>{
//   setForm({
//     ...form,
//     [e.target.name] : e.target.value
//   })
// }
// const handleLogin = (e)=>{
//   dispatch(loginSeller(form, history))
// }
const formik = useFormik({
  initialValues:{
    email: '',
    password:''
  },
  onSubmit: values=>{
    dispatch(loginSeller(values, history))
  },
  validationSchema : Yup.object({
    email: Yup.string().email('email is invalid').required('email is required'),
    password: Yup.string().required('password is required')
  })
})
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
      <form onSubmit={formik.handleSubmit}>
      <div className={style.formwrap}>

        <input type="text" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} className={formik.errors.email ? 'errorborder' : style["form-control"]}/>
        {formik.errors.email && formik.touched.email && ( <p className='errors'>{formik.errors.email}</p>)}

        <input type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} className={formik.errors.password ? 'errorborder' : style["form-control"]}/>
       {formik.errors.password && formik.touched.password && ( <p className='errors'>{formik.errors.password}</p>)}

        <div className={style.forgotPass}>
          <Link to="/reset_password">Forgot Password?</Link>
        </div>

        <Button_baseLogin title="Login" type="submit"/>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register"> Register</Link>
        </div>
      </div>
      </form>
    </div>
  );
};
export default Login;
