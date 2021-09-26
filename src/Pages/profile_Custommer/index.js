import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { DefaulAvatar } from '../../asset/image'
import Navbar from '../../Component/modules/navbar'
import SidebarBuyer from '../../Component/modules/Sidebar_Buyer'
import { updateProfileBuyer } from '../../configs/redux/actions/buyerActions'
import style from './profile.module.css'

const ProfileCustommer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const profileUser = useSelector(state => state.buyer.profile)
  const token = localStorage.getItem('token')
  const idCustommer = localStorage.getItem('idCustommer')
  const email = localStorage.getItem('email')
  console.log(profileUser);
  const [showImage, setShowImage] = useState(null)
  const [errorSizeImage, setErrorSizeImage] = useState(false)
  const [errorImageType, setErrorImageType] = useState(false)

  const handleimagePreview = (e) =>{
    e.preventDefault()
        if (e.target.files[0].size > 1048576) {
            setErrorSizeImage(true)
            setErrorImageType(false)
        }
        else if (e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpg" && e.target.files[0].type !== "image/jpeg") {
            setErrorImageType(true)
            setErrorSizeImage(false)
        }
        else if (e.target.files.length !== 0) {
            setErrorSizeImage(false)
            setErrorImageType(false)
            setShowImage(URL.createObjectURL(e.target.files[0]))
            dispatch({ type: 'CHANGE_VALUE', payload: { showImage: showImage } })
        }
        dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.files[0] } })
  }
  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProfileBuyer(profileUser, idCustommer,token, handleimagePreview))
  }
  return (
    <Styles>
      <Navbar />
      <SidebarBuyer/>
      <div className="container">
        <div className="card mainCard">
          <div className="card-body">
            <h5 className="card-title">My Profile</h5>
            <h6 className="card-title">Manage your profile</h6>
            <hr/>
            <form onSubmit={handleSubmit}>

            <div className ="parentFlex">
            <div className ="labelProf">
                <div className ="labelName">
                <label for="">Name</label>
                </div>
                <div className ="labelName2">
                <label for="">Email</label>
                </div>
                <div className ="labelName3">
                <label for="">Phone number</label>
                </div>
                <div className ="labelName4">
                <label for="">Gender</label>
                </div>
                <div className ="labelName5">
                <label for="">Date of Birth</label>
            </div>
            </div>
            <div className ="inputProfile">
                  <div className ="inputP1">
                  <input className ="inpt" type ="text" name="name"  value={profileUser.name}  onChange={handleChange}/>
                  </div>
                  <div className ="inputP2">
                  <input className ="inpt" type ="text" name="email" value={email}/>
                  </div>
                  <div className ="inputP3">
                  <input className ="inpt" type ="text" name="phone_number" value={profileUser.phone_number}  onChange={handleChange}/>
                  </div>
                  <div className ="inputP4">
                    <input className ="checkmark bg_red" type ="radio" name="gender" value="male"  onChange={handleChange} />
                    <label className ="labelS" >Male</label>
                    <input className ="checkmark bg_red girl" type ="radio"  name="gender" value="female"  onChange={handleChange}/>
                    <label className ="labelS" >Female</label>
                  </div>
                  <div className ="inputP5">
          
                    <input type="date" className="date" name="datebirth" value={profileUser.datebirth} onChange={handleChange}/>

                  </div>
            </div>
            <div className = "vertical"></div>
            <div className ="profilepic">
                <div className ="imageRight">
                  <img className="profile_picture" src={showImage ? showImage : profileUser.image ? profileUser.image : DefaulAvatar} alt=""/>
                </div>
                <div className="button_Wrap">
                    <label className="button" for="upload">Save Change</label>
                    <input id="upload" type="file" name="image" onChange={handleimagePreview}/>
                    {/* <input id="upload" type="file" name="image" onChange={handlePreview}/> */}
                            {/* <input id="upload" type="file" name="image" onChange={(e) =>{formik.setFieldValue("image", e.target.files[0]); setImagePreview(URL.createObjectURL(e.target.files[0]))}}/> */}
                </div>
            </div>
            </div>
            <div className="btnCenter">
                <button type="submit" className="btn btn-danger">Save</button>
            </div>
            </form>
            </div>
          </div>
        </div>
        </Styles>

   
      )
}

export default ProfileCustommer
const Styles = styled.div`
.mainCard{
    position: absolute;
    margin-top: 50px;
    margin-left: 450px !important;
    width: 60%;
    height: 590px;
    hr{
        border: 1px solid #D4D4D4;
    }
    .parentFlex{
    display: flex;
    justify-content: space-around;
        .vertical {
        margin-top: 25px;
        border: 1px solid #D4D4D4;
        height: 166px;
        left: 50%;
        }
        .labelProf{
            margin-top: 34px;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            text-align: right;
            color: #9B9B9B;
            .labelName2, .labelName3, .labelName4, .labelName5{
                  margin-top: 40px;
              }
        }
        .inputProfile{
            margin-top: 34px;
              .inputP2, .inputP3, .inputP5{
                  margin-top: 30px !important;
              }
              .inputP4{
                  margin-top: 45px;
              }
              .inputP4{
                  margin-top: 50px;
                  .checkmark{
                      height: 25px;
                      width: 25px;
                      -webkit-appearance: none;
                      border-radius: 50%;
                      vertical-align: middle;
                      box-shadow: 0px 0px 0px 1px #9B9B9B;
                      outline: none;
                      cursor: pointer;
                      border: 3px solid #fff;
                  }
                  .bg_red{
                      background-color:#9B9B9B;
                  }
                  .bg_red:checked{
                      box-shadow: 0px 0px 0px 1px #D84242;
                      background-color: #D84242;
                  }
                  label{
                      font-size: 14px;
                      /* line-height: 24px; */
                      color: #9B9B9B;
                      padding-left: 12px;
                  }
                  .girl{
                      margin-left: 10px;
                  }
              }
              .inpt{
                  width: 100%;
                  height: 48px;
                  border: 1px solid #9B9B9B;
                  box-sizing: border-box;
                  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
                  border-radius: 4px;
                  padding-left: 20px;
                  font-size: 14px;
                  line-height: 24px;
              }
              .date{
                  width: 100%;
                  height: 40px;
                  box-sizing: border-box;
                  border: 1px solid #9B9B9B;
                  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
                  border-radius: 4px;
                  font-size: 14px;
                  line-height: 20px;
                  padding-top: 10px;
                  padding-left: 20px;
              }
              .dropD{
                  margin-left: 16px;
              }
              
            }      
            .profilepic{
                margin-top: 34px;
                .Change{
                    margin-top: 19px;
                }
                .Change button{
                    border: 1px solid #9B9B9B;
                    box-sizing: border-box;
                    border-radius: 24px;
                    width: 120px;
                    height: 36px;
                    font-size: 14px;
                }
                .imageRight{
                    width: 100px;
                    height: 99px;
                    border-radius: 80px;
                    .profile_picture{
                      object-fit: cover;
                      width: 100%;
                      height: 99px;
                      border-radius: 80%;
                      
                    }
                }
                .button_Wrap {
                  margin-top: 19px;
                  .button {
                      display: inline-block;
                      padding-top: 7px;
                      padding-left: 20px;
                      /* padding-right: auto; */
                      cursor: pointer;
                      border: 1px solid #9B9B9B;
                      box-sizing: border-box;
                      border-radius: 24px;
                      font-size: 12px;
                      font-weight: bold;
                      border-radius: 24px;
                      width: 120px;
                      height: 36px;
                      color: #9B9B9B;
                    }
                    input[type="file"] {
                      position: absolute;
                      z-index: -1;
                      top: 10px;
                      left: 8px;
                      font-size: 17px;
                      color: black;
                    }
                }
            }
          }
          .btnCenter button{
              margin-top: 30px;
              width: 100px;
              height: 36px;
              border-radius: 25px;
              font-size: 14px;
              margin-left: 30%;
          }
}


`
