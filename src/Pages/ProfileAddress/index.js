import React, { useState } from "react";
import { StyledProfile } from "./StyledProfile.js";
import SidebarBuyer from "../../Component/modules/Sidebar_Buyer";
import Navbar from "../../Component/modules/navbar";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAddress } from "../../configs/redux/actions/buyerActions.js";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Swal from "sweetalert2";
const ProfileAddress = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const address = localStorage.getItem('address')
  const idCustommer = localStorage.getItem('idCustommer')
  const phone_number = localStorage.getItem('phone_number')
  const token = localStorage.getItem('token')
  const profile = useSelector(state => state.buyer.profile)
  const fetchAddress = profile?.address

  const name = localStorage.getItem("name");
  const formik = useFormik({
    initialValues:{
        address: ''
    },
    onSubmit: values=>{
        axios.put(`${process.env.REACT_APP_BACKEND_API}/profile/address/${idCustommer}`, values ,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((res) => {

        const dataResponse = res.data.data
        console.log(dataResponse, 'data');
        console.log(dataResponse);
        localStorage.setItem('address', dataResponse.address)
            Swal.fire(
            'Success',
            'Your address has been updated',
            'success'
            )
        })
    .catch((error) => {
        // console.log(error.response.statusText, 'error');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.response?.statusText,
            })
        })

    },
    validationSchema : Yup.object({
        address: Yup.string().required('address is required').min(8, "address be at least 8 characters"), 
    })
  })
  return (
    <StyledProfile>
      <Navbar />
      <SidebarBuyer />
      <div className="container">
        <div className="card mainCard">
          <div className="card-body">
            <h5 className="card-title">Choose another address</h5>
            <h6 className="card-title">Manage your shipping address</h6>
            <hr />
            <div className="contentwrap">
              <div className="box1">
                <p className="textup">Add new address address</p>
              </div>

              <div className="box2">
                <p className="box2txt">{name}</p>
                <p className="box2txt2">
                    {address ? address : 'add your address by clicking change address text'}
                </p>
                <a
                  onClick={handleShow}
                  className="MainNavText"
                  id="MainNavHelp"
                >
                  Change address
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          fade={false}
          onHide={handleClose}
          backdropC="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
              <p className="text-center titlem" id="exampleModalLongTitle">Change address</p>
    
              <div className="form-group firstform">
                <label for="recipient-name" className="col-form-label">Save address as (ex : home address, office
                  address)</label>
                <input type="text" className="form-control fieldS" id="recipient-name" name="" placeholder="Rumah"/>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="editname">Recipient’s name</label>
                  <input type="text" className="form-control fieldS" id="editname" value={name}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="editphonenumber">Recipient's telephone number</label>
                  <input type="text" className="form-control fieldS" id="editphonenumber" value={phone_number}/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control h-50" id="inputAddress" name="address" value={formik.values.address} placeholder={address} onChange={formik.handleChange}/>
                    {formik.errors.address && formik.touched.address && ( <p className='errors'>{formik.errors.address}</p>)}
                </div>     
              </div>

              <div className="form-group">
                <div className="form-check ">
                  <input className="form-check-input mt-20 boxC" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label labelC" for="gridCheck">
                    Make it the primary address
                  </label>
                </div>


              </div>
          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-outline-secondary buttonfoot" data-dismiss="modal">Close</button>
            <input type="submit" className="btn btn-danger buttonfoot" value="Save"/>
          </Modal.Footer>
          </form>
        </Modal>
      </div>
    </StyledProfile>
  );
};

export default ProfileAddress;
