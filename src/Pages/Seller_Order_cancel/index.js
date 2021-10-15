import React, { Component } from 'react'
import Sidebar_seller from '../../Component/modules/Sidebar_seller'
import NavbarSeller from '../../Component/modules/Navbar_seller'
import style from './order_cancel.module.css'
import Image from '../../asset/image/Group 1246.png' 

export class CancelOrder_seller extends Component {
    render() {
        return (
            <div>
            <NavbarSeller />
            <Sidebar_seller />
            <div className="container">
                <div className={`card ${style.mainCard}`}>
                    <div className="head-card">
                    <h4 className={style.mineOrder}>My Order</h4>
                    </div>
                    <div className="body-card">
                    <div className={style.nav}>          
                    <ul className="nav nav-tabs">

                        <li className="nav-item">
                            <a href="#items" className="nav-link " data-toggle="tab">All Items</a>
                        </li>
                        <li className="nav-item">
                            <a href="#paid" className="nav-link" data-toggle="tab">Get Paid</a>
                        </li>
                        <li className="nav-item">
                            <a href="#process" className="nav-link" data-toggle="tab">Processed</a>
                        </li>
                        <li className="nav-item">
                            <a href="#sent" className="nav-link" data-toggle="tab">Sent</a>
                        </li>
                        <li className="nav-item">
                            <a href="#complete" className="nav-link" data-toggle="tab">Completed</a>
                        </li>
                        <li className="nav-item">
                            <a href="#cancel" className="nav-link active" data-toggle="tab">Order Cancel</a>
                        </li>

                    </ul>

                    <div className="tab-content">  
                    <div role="tabpanel" className="tab-pane active" id="cancel">  

                                <div className="row">
                                        <div className={style.search_box}>
                                            <i className={`material-icons ${style.icon}`}>&#xE8B6;</i>
                                            <input type="text" className="form-control" value={this.search} onChange={this.searchCange}placeholder="Search&hellip;"/>
                                        </div>
                                </div>   
                                <div className={style.centerImage}>
                                    <img src={Image} alt=""/>         
                                </div>
                    
                    </div>
                        <div role="tabpanel" className="tab-pane" id="soldout"> Sold Out</div>
                        <div role="tabpanel" className="tab-pane" id="paid">Paid</div>
                        <div role="tabpanel" className="tab-pane" id="process">process</div>
                        <div role="tabpanel" className="tab-pane" id="sent">sent</div>
                        <div role="tabpanel" className="tab-pane" id="complete">Complete</div>
                        <div role="tabpanel" className="tab-pane" id="cancel">cancel</div>
                        </div>
                    </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CancelOrder_seller

