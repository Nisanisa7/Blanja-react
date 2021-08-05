import React from 'react'
import Navbar from '../../Component/modules/navbar'
import style from './profile.module.css'

const ProfileSeller = () => {
    return (
        <div>
        <Navbar products={this.state.products}/>
        <div className="container">
        <div className={`card ${style.mainCard}`}>
        <div className="card-body">
          <h5 className="card-title">My Profile</h5>
          <h6 className="card-title">Manage your profile</h6>
          <hr/>

          <div className={style.parentFlex}>
              <div className={style.labelProf}>
                <div className={style.labelName}>
                    <label for="">Name</label>
                </div>
                <div className={style.labelName}>
                    <label for="">Email</label>
                </div>
                <div className={style.labelName}>
                    <label for="">Phone number</label>
                </div>
                <div className={style.labelName}>
                    <label for="">Gender</label>
                </div>
                <div className={style.labelName}>
                    <label for="">Date of Birth</label>
                </div>
              </div>
              <div className="inputProfile">
                <div className="inputP1">
                    <input className="inpt" type="text" name="" id=""  value="Johanes Mikael"/>
                </div>
                <div className="inputP2">
                    <input className="inpt" type="text" name="" id="" value="johanes@gmail.com"/>
                </div>
                <div className="inputP3">
                    <input className="inpt" type="text" name="" id="" value="08901289012"/>
                </div>
                <div className="inputP4">
                    <input className="radiow" type="radio" id="lakilaki" name="lakilaki"/>
                    <label className="labelS" for="lakilaki">Laki-laki</label>
                    <input className="radiow girl" type="radio" id="perempuan" name="perempuan"/>
                    <label className="labelS" for="perempuan">Perempuan</label>
                </div>
                <div className="inputP5">
                    {/* <!-- dropdown1 --> */}
                    <a className="btn btn-outline-secondary drdw dropdown-toggle" href="#" role="button" id="#date" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Date
                      </a>
                    
                      <div className="dropdown-menu" aria-labelledby="date">
                        <a className="dropdown-item" href="#">1</a>
                        <a className="dropdown-item" href="#">2</a>
                        <a className="dropdown-item" href="#">3</a>
                      </div>
                      {/* <!-- dropdown2 --> */}
                      <a className="btn btn-outline-secondary drdw dropD dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Month
                      </a>
                    
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">January</a>
                        <a className="dropdown-item" href="#">February</a>
                        <a className="dropdown-item" href="#">March</a>
                      </div>
                      {/* <!-- dropdown3 --> */}
                      <a className="btn btn-outline-secondary drdw dropD dropdown-toggle" href="#" role="button" id="year" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Year
                      </a>
                    
                      <div className="dropdown-menu" aria-labelledby="year">
                        <a className="dropdown-item" href="#">1990</a>
                        <a className="dropdown-item" href="#"></a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                </div>
                <div className="btnCenter">
                    <button type="button" className="btn btn-danger">Save</button>
                </div>
              </div>
              <div className = "vertical"></div>
             <div className="profilepic">
                 <div className="imageRight">
                    <img src="./asset/image/christian-buehner-DItYlc26zVI-unsplash 1.png" alt=""/>
                 </div>                
                <div className="Change">
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

export default ProfileSeller
