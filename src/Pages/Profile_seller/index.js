import React, { useState } from "react";
import style from "./profile.module.css";
import Sidebar_seller from "../../Component/modules/Sidebar_seller";
import NavbarSeller from "../../Component/modules/Navbar_seller";
import Profile from "../../asset/image/christian-buehner-DItYlc26zVI-unsplash 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import * as string from "../../configs/redux/string";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../App.css";
import { toastify } from "../../utils";

function Profile_seller() {
  const [preview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const [errImageSize, setErrImage] = useState(false);
  console.log(errImageSize);
  const [errImageType, setErrImageType] = useState(false);
  const idSeller = localStorage.getItem("idSeller");
  const store_name = localStorage.getItem("store_name");
  const email = localStorage.getItem("email");
  const phone_number = localStorage.getItem("phone_number");
  const store_description = localStorage.getItem("store_description");
  const image = localStorage.getItem("image");
  const token = localStorage.getItem("token");
   const handleLogout = () =>{
      localStorage.clear();
      window.location.href = "/"
      setTimeout(window.location.href, 8000)
      toastify("you're logged out! see yaa 👋", "info");
  }
  const handlePreview = (e) => {
    if (e.target.files[0].size > 2000000) {
      setErrImage(true);
      setErrImageType(false);
    } else if (
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg" &&
      e.target.files[0].type !== "image/jpeg"
    ) {
      setErrImageType(true);
      setErrImage(false);
    } else if (e.target.files.length !== 0) {
      setErrImage(false);
      setErrImageType(false);
      formik.setFieldValue("image", e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const phoneRegExp =
    /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
  const formik = useFormik({
    initialValues: {
      store_name: "",
      phone_number: "",
      store_description: "",
      image: null,
      //   imagePreview: URL.createObjectURL(target.files[0])
    },
    onSubmit: (values) => {
      let form = new FormData();
      form.append("store_name", values.store_name);
      form.append("phone_number", values.phone_number);
      form.append("store_description", values.store_description);
      form.append("image", values.image);
      console.log(form);
      axios
        .patch(`${process.env.REACT_APP_BACKEND_API}/profile/${idSeller}`, form)
        .then((res) => {
          const dataResponse = res.data.data;
          console.log(dataResponse, "data");
          const sendData = {
            profile: dataResponse,
          };
          console.log(dataResponse);
          localStorage.setItem("store_name", dataResponse.store_name);
          localStorage.setItem("phone_number", dataResponse.phone_number);
          localStorage.setItem(
            "store_description",
            dataResponse.store_description
          );
          localStorage.setItem("image", dataResponse.image);
          dispatch({ type: string.AVATAR_SELLER, payload: sendData });
          Swal.fire("Success", "Your Profile has been updated", "success");
        })
        .catch((error) => {
          // console.log(error.response.statusText, 'error');
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error?.response?.statusText,
          });
        });
    },
    validationSchema: Yup.object({
      store_name: Yup.string().required("store name is required"),
      phone_number: Yup.string()
        .matches(phoneRegExp, "phone number is invalid")
        .required("Phone number is required")
        .min(10, "Phone number is too short")
        .max(13, "phone must be 12 digits"),
      store_description: Yup.string().required("store name is required"),
    }),
  });
  return (
    <div>
      <NavbarSeller />
      <Sidebar_seller />
      <div className="Container">
        <div className={`card  ${style.mainCard}`}>
          <div className={`card-header ${style.card_header}`}></div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <h5 className="card-title">My Profile Store</h5>
              <h6 className="card-title">Manage your profile information</h6>
              <hr />
              <div className={style.parent_Flex}>
                <div className={style.labelProf}>
                  <div className={style.labelName}>
                    <label for="">Store Name</label>
                  </div>
                  <div className={style.labelName2}>
                    <label for="">Email</label>
                  </div>
                  <div className={style.labelName3}>
                    <label for="">Phone number</label>
                  </div>
                  <div className={style.labelName4}>
                    <label for="">Store Description</label>
                  </div>
                </div>
                <div className={style.inputProfile}>
                  <div className={style.inputP1}>
                    <input
                      className={
                        formik.errors.store_name
                          ? "errorborder_profile"
                          : style.inpt
                      }
                      type="text"
                      name="store_name"
                      value={formik.values.store_name}
                      onChange={formik.handleChange}
                      placeholder={store_name}
                    />
                    {formik.errors.store_name && formik.touched.store_name && (
                      <p className="errors">{formik.errors.store_name}</p>
                    )}
                  </div>
                  <div className={style.inputP2}>
                    <input
                      className={style.inpt}
                      disabled
                      type="text"
                      placeholder={email}
                    />
                  </div>
                  <div className={style.inputP3}>
                    <input
                      className={
                        formik.errors.phone_number
                          ? "errorborder_profile"
                          : style.inpt
                      }
                      type="text"
                      name="phone_number"
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      placeholder={phone_number}
                    />
                    {formik.errors.phone_number &&
                      formik.touched.phone_number && (
                        <p className="errors">{formik.errors.phone_number}</p>
                      )}
                  </div>
                  <div className={style.inputP4}>
                    <input
                      className={
                        formik.errors.store_description
                          ? "errorborder_profile"
                          : style.inpt
                      }
                      type="text"
                      name="store_description"
                      value={formik.values.store_description}
                      onChange={formik.handleChange}
                      placeholder={store_description}
                    />
                    {formik.errors.store_description &&
                      formik.touched.store_description && (
                        <p className="errors">
                          {formik.errors.store_description}
                        </p>
                      )}
                  </div>
                </div>
                <div className={style.vertical}></div>
                <div className={style.profilepic}>
                  <div className={style.imageRight}>
                    <img
                      className={style.profile_picture}
                      src={preview ? preview : image ? image : Profile}
                      alt=""
                    />
                  </div>
                  <div className={style.button_Wrap}>
                    <label className={style.button} for="upload">
                      Save Change
                    </label>
                    <input
                      id="upload"
                      type="file"
                      name="image"
                      onChange={handlePreview}
                    />
                    {/* <input id="upload" type="file" name="image" onChange={(e) =>{formik.setFieldValue("image", e.target.files[0]); setImagePreview(URL.createObjectURL(e.target.files[0]))}}/> */}
                  </div>
                  {errImageSize ? (
                    <p className={style.error}>
                      Image size is too large. <br /> max 1mb
                    </p>
                  ) : (
                    ""
                  )}
                  {errImageType ? (
                    <p className={style.error}>
                      Invalid file type. <br /> only png, jpg, and jpeg <br />{" "}
                      format allowed
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={style.btnCenter}>
                <button type="submit" className={`${style.btn} btn-danger`}>
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className={`${style.btnlogout} btn-outline-dark`}
                >
                  Log Out
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_seller;
