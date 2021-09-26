import React, {useState} from "react";
import style from "./register_cus.module.css";
import { Link } from "react-router-dom";
import Logo_login from "../../../Component/base login/logo";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { RegisterBuyer } from "../../../configs/redux/actions/buyerActions";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Register_custommer = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
        name:'',
        email: '',
        password:''
     },
    onSubmit: values =>{
        dispatch(RegisterBuyer(values, history))
      },
    validationSchema: Yup.object({

        name: Yup.string().required('name is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string().required('Password is required').min(8, "Password must be at least 8 characters")
      })
    })

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
      <form onSubmit={formik.handleSubmit}>

      <input type="text" name="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange} className={formik.errors.name ? 'errorborder' : style["form-control"]}/>
      {formik.errors.name && formik.touched.name && ( <p className='errors'>{formik.errors.name}</p>)}

      <input type="text" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} className={formik.errors.email ? 'errorborder' : style["form-control"]}/>
      {formik.errors.email && formik.touched.email && ( <p className='errors'>{formik.errors.email}</p>)}

      <input type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} className={formik.errors.password ? 'errorborder' : style["form-control"]}/>
      {formik.errors.password && formik.touched.password && ( <p className='errors'>{formik.errors.password}</p>)}
{/*         
        <Button title="Register" } /> */}
        <button className={style.btnLogin} type="submit">Register</button>
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login_user"> Login</Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register_custommer;
