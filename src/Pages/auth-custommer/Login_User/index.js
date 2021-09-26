import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./loginUser.module.css";
import Logo_login from "../../../Component/base login/logo";
import { loginBuyer } from '../../../configs/redux/actions/buyerActions'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import '../../../App.css';

const Login_User = (props) => {

  const history = useHistory()
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues:{
      email: '',
      password:''
    },
    onSubmit: values=>{
      dispatch(loginBuyer(values, history))
    },
    validationSchema : Yup.object({
      email: Yup.string().email('email is invalid').required('email is required'),
      password: Yup.string().required('password is required')
    })
  })

  return (
    <div className={style.wrapper}>
      <Logo_login />
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
      
      <form onSubmit={formik.handleSubmit}>
      <div className={style.formwrap}>
        <input type="text" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} className={formik.errors.email ? style.errorborder : style["form-control"]}/>
        {formik.errors.email && formik.touched.email && ( <p className='errors'>{formik.errors.email}</p>)}

        <input type="password" name="password"  placeholder="Password" value={formik.values.password} onChange={formik.handleChange} className={formik.errors.password ? style.errorborder : style["form-control"]} />
        {formik.errors.password && formik.touched.password && ( <p className='errors'>{formik.errors.password}</p>)}
        
        <div className={style.forgotPass}>
          <Link to="reset_password_custommer">Forgot Password?</Link>
        </div>

        <button className={style.btnLogin} type="submit">Login</button>
        <div className={style.registerLink}>
          Dont have a Tokopedia account?<Link to="/register_customer"> Register</Link>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Login_User;
