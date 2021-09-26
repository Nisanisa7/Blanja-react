import React, { Component, useEffect, useState } from 'react'
import Sidebar_seller from '../../Component/modules/Sidebar_seller'
import NavbarSeller from '../../Component/modules/Navbar_seller'
import style from './seller.module.css'
import Image from '../../asset/image/Group 1246.png'
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Table from '@mui/material/Table';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Myorder_seller = () => {
    // const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [orders, setOrders] = useState({})
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/orders`)
            .then((res) => {
                setOrders(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(orders);

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
                                    <a href="#items" className="nav-link active" data-toggle="tab">All Items</a>
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
                                    <a href="#cancel" className="nav-link" data-toggle="tab">Order Cancel</a>
                                </li>

                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className={`tab-pane ${style.pane} active`} id="items">
                                    <div className="row">
                                        <div className={style.search_box}>
                                            <i className={`material-icons ${style.icon}`}>&#xE8B6;</i>
                                            <input type="text" className="form-control" value="" onChange="" placeholder="Search&hellip;" />
                                        </div>
                                    </div>
                                    <table className={`table ${style.table} table-striped table-hover table-bordered ${style.table_hover} ${style.table_strip}`}>
                                        <thead className={style.item_head}>
                                            <tr>

                                                <th>Custommer</th>
                                                <th>Product</th>
                                                <th>Price
                                                </th>
                                                <th>Payment</th>
                                                <th>Status</th>
                                                <th>Quantity</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                       {orders.map((item) => (
                                            <tr>
                                                <td>{item.idCustommer}</td>
                                                <td>{item.productName}</td>
                                                <td>{item.totalPrice}</td>
                                                <td>{item.payment}</td>
                                                <td>{item.status_order}</td>
                                                <td>{item.orderQty}</td>
                                                <td>
                                                        {/* <Link to={"/seller/edit/"+item.idProduct}> */}
                                                    <Link to="">
                                                        <button type="button" className="btn btn-outline-success">
                                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                                        </button>
                                                    </Link>
                                                        <button type="button" onClick="" className={`btn btn-outline-danger ${style.delete}`}>
                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                        </button>
                                                </td>
                                            </tr>
                                       )
                                            )}

                                        </tbody> 
                                    </table>

                                </div>
                                <div role="tabpanel" className="tab-pane" id="soldout"> Sold Out</div>
                                <div role="tabpanel" className="tab-pane" id="paid">Paid</div>
                                <div role="tabpanel" className="tab-pane" id="process">process</div>
                                <div role="tabpanel" className="tab-pane" id="sent">sent</div>
                                <div role="tabpanel" className="tab-pane" id="cancel">cancel</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myorder_seller
