import React from 'react'
import style from './profile.module.css'
import Sidebar_seller from '../../Component/modules/Sidebar_seller'
import NavbarSeller from '../../Component/modules/Navbar_seller'
import Profile from "../../asset/image/christian-buehner-DItYlc26zVI-unsplash 1.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";

function Profile_seller() {
    

    return (
        <div>
            <NavbarSeller/>
            <Sidebar_seller/>
        <div className="Container">
           <div className={`card  ${style.mainCard}`}>
               <div className={`card-header ${style.card_header}`}>
               </div>
                <div className="card-body">
                    <h5 className="card-title">My Profile Store</h5>
                    <h6 className="card-title">Manage your profile information</h6>
                <hr/>
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
                            <label for="">Address</label>
                    </div>
                    </div>
                    <div className={style.inputProfile}>
                        <div className={style.inputP1}>
                            <input className={style.inpt} type="text" name="" id=""  value="Johanes Mikael"/>
                        </div>
                        <div className={style.inputP2}>
                            <input className={style.inpt} type="text" name="" id="" value="johanes@gmail.com"/>
                        </div>
                        <div className={style.inputP3}>
                            <input className={style.inpt} type="text" name="" id="" value="08901289012"/>
                        </div>
                        <div className={style.inputP4}>
                            <input className={style.inpt} type="text" name="" id="" value=""/>
                        </div>
                        <div className={style.btnCenter}>
                            <button type="button" className="btn btn-danger">Save</button>
                        </div>
                    </div>
                    <div className ={style.vertical}></div>
                    <div className={style.profilepic}>
                         <div className={style.imageRight}>
                            <img src={Profile} alt=""/>
                        </div>                
                        <div className={style.Change}>
                            <button type="button" className="btn btn-outline-secondary">Save change</button>
                        </div>
                    </div>
                 </div>
                </div>
                </div>
                </div>    
           </div>

    )

}

export default Profile_seller
