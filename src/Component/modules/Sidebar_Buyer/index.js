import React from 'react'
import styled  from 'styled-components'
import { DefaulAvatar, Pen } from '../../../asset/image'
import Profile_logo from "../../../asset/image/sidebar customer/Ellipse 281.png";
import Address_logo from "../../../asset/image/sidebar customer/Ellipse 282.png";
import Copy_logo from "../../..//asset/image/sidebar customer/Ellipse 286.png";
import { useSelector } from "react-redux";
const SidebarBuyer = () => {
    const profileState = useSelector(state => state.profile)
    const avatar = profileState?.profile?.image
    const profilename = profileState?.profile?.name
    const profileSeller = localStorage.getItem('image')
    const name = localStorage.getItem('name')
    return (
        <Styled>
           <aside>
            <div className="sidebar">
            <div className="profile">
                <div className="imageprofile">
                    <img className="img1" src={avatar ? avatar : profileSeller ? profileSeller : DefaulAvatar} alt=""/>
                </div>
                <div className="profile-det">
                    <h4 className="nameP">{profilename ? profilename : name}</h4>
                        <button className="btn-profile">
                            <img className="pen" src={Pen} alt=""/>
                            <p className="editP">Ubah profile</p>
                        </button>
                        {/* <div className="row">
                            <div className="col-md-1">
                                <img className="pen" src={Pen} alt=""/>
                            </div>
                            <div className="col-md-10">
                                <p className="editP">Ubah profile</p>
                            </div>
                        </div> */}
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
                            <a href="/profile">My account</a>
                        </div>
                        <div className="nameli2">
                            <a href="/profile-address">Shipping address</a>
                        </div>
                        <div className="nameli3">
                            <a href="/profile-myorder">My order</a>
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
aside{
    width: 33%;
    position: absolute;
    left: 0;
    background: #FFFFFF;
.sidebar{
        @media screen and (min-width: 1119px) {
            height: 100vh;  
        }
    .profile{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 50px;
        margin-left: 122px;
        margin-right: 48px;
        @media screen and (min-width: 600px) {
            margin-left: 50px;
            margin-right: 40px;   
        }                 
        @media screen and (min-width: 786px) {
            margin-left: 90px;
            margin-right: 40px;       
        }
        @media screen and (min-width: 992px) {
            margin-left: 100px;
            margin-right: 40px;
        }
        @media screen and (min-width: 1119px) {
            margin-left: 122px;
            margin-right: 48px;
        }
        .imageprofile{
            /* background-color: brown; */
            width: 99px;
            height: 100px;
            .img1{
                border-radius: 80%;
                width: 99px;
                height: 100px;
                object-fit: cover;
            }
        }
        .profile-det{
            margin-top: 19px;
            
            /* @media screen and (min-width: 600px) {
                margin-left: 50px;
   
            }                 
            @media screen and (min-width: 786px) {
                margin-left: 90px;
       
            }
            @media screen and (min-width: 992px) {
                margin-left: 100px;

            }
            @media screen and (min-width: 1119px) {
                margin-left: 122px;

            } */
            .nameP{
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #222222;
                margin-left: 13px;
                /* @media screen and (min-width: 600px) {
                    margin-left: 50px;
                }                  */
                @media screen and (min-width: 786px) {
                    margin-left: 17px;
        
                }
                @media screen and (min-width: 992px) {
                    margin-left: 19px;

                }
                @media screen and (min-width: 1119px) {
                    margin-left: 20px;

                }
            }
            .btn-profile{
                display: flex;
                border: none;
                outline: none;
                background: none;
                margin-left: 13px;
                @media screen and (min-width: 786px) {
                    margin-left: 8px;
        
                }
                @media screen and (min-width: 992px) {
                    margin-left: 9px;

                }
                @media screen and (min-width: 1119px) {
                    margin-left: 15px;

                }
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
        margin-top: 50px;
        margin-left: 20%;
        margin-right: 20%;
        /* @media screen and (min-width: 600px) {
            margin-top: 69px; 
            margin-right: auto !important;
        }                 
        @media screen and (min-width: 786px) {
            margin-top: 69px; 
            margin-left: 50px;
        }
        @media screen and (min-width: 992px) {
            margin-top: 69px;
            margin-left: 65px;
        }
        @media screen and (min-width: 1119px) {
            margin-top: 69px;
            margin-left: 120px;
        } */
        .imag2, .imag3{
            margin-top: 20px;
                @media screen and (min-width: 600px) {
                   
                }                 
                @media screen and (min-width: 786px) {
                   
                }
                @media screen and (min-width: 992px) {
                   
                }
                @media screen and (min-width: 1119px) {
                   
                }
            
        }
        .namelink{
            padding-left: 14px;
            .nameli2, .nameli3{
                margin-top: 20px;
                @media screen and (min-width: 600px) {
                    margin-top: 7px;
                }                 
                @media screen and (min-width: 786px) {
                    margin-top: 8px;
                }
                @media screen and (min-width: 992px) {
                    margin-top: 20px;
                }
                @media screen and (min-width: 1119px) {
                    margin-top: 20px;
                }
            }
            .nameli1 a{
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #222222;
                @media screen and (min-width: 600px) {
                    font-size: 12px;
                }                 
                @media screen and (min-width: 786px) {
                    font-size: 12px;
                }
                @media screen and (min-width: 992px) {
                    font-size: 14px;
                }
                @media screen and (min-width: 1119px) {
                    font-size: 14px;
                }
            } 
            .nameli2 a, .nameli3 a{
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #9B9B9B;
                @media screen and (min-width: 600px) {
                    font-size: 12px;
                }                 
                @media screen and (min-width: 786px) {
                    font-size: 12px;
                }
                @media screen and (min-width: 992px) {
                    font-size: 14px;
                }
                @media screen and (min-width: 1119px) {
                    font-size: 14px;
                }
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
}

`