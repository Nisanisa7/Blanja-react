import React, {useState} from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import Button_baseLogin from "../../../Component/base login/Button_baseLogin";
import Input from "../../../Component/base login/Input";
import Logo_login from "../../../Component/base login/logo";
import { useDispatch } from "react-redux";
import { registerSeller } from "../../../configs/redux/actions/sellerAction";
import { useFormik } from "formik";
import * as Yup from 'yup'
const Register = ({props}) => {
  const dispatch = useDispatch()
//   const [form, setForm] = useState({
//     'name':'',
//     'email' : '',
//     'phone_number':'',
//     'store_name':'',
//     'password': ''
    
// })

//   const handleChange = (e) =>{
//     setForm({
//         ...form,
//         [e.target.name] : e.target.value
//     })
// }
// const handleRegister = () =>{
//   dispatch(registerSeller(form))
// }
const phoneRegExp = /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
const formik = useFormik({
  initialValues: {
      name:'',
      phone_number:'',
      email: '',
      store_name: '',
      password:''
   },
  onSubmit: values =>{
      dispatch(registerSeller(values))
    },
  validationSchema: Yup.object({

      name: Yup.string().required('name is required'),
      phone_number: Yup.string().matches(phoneRegExp, "phone number is invalid").required('Phone number is required').min(10, "Phone number is too short").max(13,"phone must be 12 digits"),
      email: Yup.string().required('Email is required').email('Email is invalid'),
      store_name: Yup.string().required('store name is required').min(4, "store name must be at least 4 characters"),
      password: Yup.string().required('Password is required').min(8, "Password must be at least 8 characters")
    })
  })
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
      <form onSubmit={formik.handleSubmit}>
      <div className={style.formwarp}>

        <input type="text"value={formik.values.name} name="name" onChange={formik.handleChange}  className={formik.errors.name ? 'errorborder' : style["form-control"]} placeholder="Name"/>
        {formik.errors.name && formik.touched.name && ( <p className='errors'>{formik.errors.name}</p>)}

        <input type="text"value={formik.values.email} name="email" onChange={formik.handleChange}  className={formik.errors.email ? 'errorborder' : style["form-control"]} placeholder="Email"/>
        {formik.errors.email && formik.touched.email && ( <p className='errors'>{formik.errors.email}</p>)}

        <input type="text"value={formik.values.phone_number} name="phone_number" onChange={formik.handleChange}  className={formik.errors.phone_number ? 'errorborder' : style["form-control"]} placeholder="Phone number"/>
        {formik.errors.phone_number && formik.touched.phone_number && ( <p className='errors'>{formik.errors.phone_number}</p>)}

        <input type="text"value={formik.values.store_name} name="store_name" onChange={formik.handleChange}  className={formik.errors.store_name ? 'errorborder' : style["form-control"]} placeholder="Store name"/>
        {formik.errors.store_name && formik.touched.store_name && ( <p className='errors'>{formik.errors.store_name}</p>)}

        <input type="password"value={formik.values.password} name="password" onChange={formik.handleChange}  className={formik.errors.password ? 'errorborder' : style["form-control"]} placeholder="Password"/>
        {formik.errors.password && formik.touched.password && ( <p className='errors'>{formik.errors.password}</p>)}
        <Button_baseLogin title="register" type="submit"/>
        <div className={style.registerLink}>
          Already have a Tokopedia account?<Link to="/login"> Login</Link>
        </div>

      </div>
      </form>
    </div>
  );
};

export default Register;