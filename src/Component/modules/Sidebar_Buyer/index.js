import React from 'react'
import styled  from 'styled-components'
import { DefaulAvatar, Pen } from '../../../asset/image'
import Profile_logo from "../../../asset/image/sidebar customer/Ellipse 281.png";
import Address_logo from "../../../asset/image/sidebar customer/Ellipse 282.png";
import Copy_logo from "../../..//asset/image/sidebar customer/Ellipse 286.png";

const SidebarBuyer = () => {
    return (
        <Styled>
           <aside>
            <div className="sidebar">
            <div className="profile">
                <div className="imageprofile">
                    <img className="img1" src={DefaulAvatar} alt=""/>
                </div>
                <div className="profile-det">
                    <h4 className="nameP">Johanes Mikael</h4>
                        <div className="row">
                            <div className="col-md-1">
                                <img className="pen" src={Pen} alt=""/>
                            </div>
                            <div className="col-md-10">
                                <p className="editP">Ubah profile</p>
                            </div>
                        </div>
                    </div>                   
            </div>

                <div className="link-profile">
                    <div className="imagePr">
                        <div className="imag1">
                            <img src={Profile_logo} alt=""/>
                        </div>
                        <div className="imag2">
                            <img src={Address_logo} alt=""/>
                        </div>
                        <div className="imag3">
                            <img src={Copy_logo} alt=""/>
                        </div>
                    
                    </div>
                    <div className="namelink">
                        <div className="nameli1">
                            <a href="profile.html">My account</a>
                        </div>
                        <div className="nameli2">
                            <a href="profile-address.html">Shipping address</a>
                        </div>
                        <div className="nameli3">
                            <a href="profile-myOrder.html">My order</a>
                        </div>
                    </div>
                </div>   
            </div>
        </aside> 
    </Styled>
    )
}

export default SidebarBuyer
const Styled = styled.div`
.sidebar{
    position: absolute;
    left: 0;
    width: 33%;
    height: 100vh;
    background: #FFFFFF;
    .profile{
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        margin-left: 122px;
        margin-right: 48px;
        .imageprofile{
            /* background-color: brown; */
            width: 99px;
            height: 60px;
            .img1{
                border-radius: 80%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .profile-det{
            margin-top: 19px;
            margin-left: 13px;
            .nameP{
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #222222;
            }
            .pen{
                width: 16px;
                height: 16px;
            }
            .editP{
                padding-top: 1px;
                padding-left: 8px;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #9B9B9B;
            }
        }
    }
    .link-profile{
        display: flex;
        justify-content: flex-start;
        margin-top: 69px;
        margin-left: 120px;
        .imag2, .imag3{
            margin-top: 20px;
        }
        .namelink{
            padding-left: 14px;
            .nameli2, .nameli3{
                margin-top: 20px;
            }
            .nameli1 a{
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #222222;
            } 
            .nameli2 a, .nameli3 a{
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #9B9B9B;
            }
            .nameli1{
                padding-bottom: 0;
                padding-top: 5px;
            }
            .nameli2{
                padding-bottom: 0;
                padding-top: 5px;
            }
            .nameli3{
                padding-top: 10px;
            }
        }
        .namelink a{
            text-decoration: none;
        }
        .namelink a:hover{
            color: #6d5c5c;
        }
    }
}


`