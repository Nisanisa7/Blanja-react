import React, { Component, useEffect, useState } from 'react'
import Navbar from '../../Component/modules/navbar'
import style from './checkout.module.css'
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../configs/redux/actions/OrderActions';
import * as string from '../../configs/redux/string'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { CC, Gopay, Pos } from '../../asset/image';

const Checkout = () => {
    const [show, setShow] = useState(false);
    const [paymentvalue, setPaymentValue] = useState({
        payment: ''
    })
    const handleCheck = (e)=> {
        setPaymentValue({
            ...paymentvalue,
            [e.target.name] : e.target.value
        })
    }
   const {payment} = paymentvalue
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CardData = useSelector(state => state.cartItem.cart)
    const destruct = {...CardData}
    const history = useHistory()
    const dispatch = useDispatch()
    const name = localStorage.getItem('name')
    const address = localStorage.getItem('address')
    const token = localStorage.getItem('token')
    const idCustommer = localStorage.getItem('idCustommer')
    const custommer = useSelector(state=> state.buyer.profile)
    const totalPrice = useSelector(state=> state.cartItem.totalPrice)
    const orderQty = useSelector(state=> state.cartItem.quantity)

    console.log(orderQty);
    
    let countDelivery = (totalPrice * 10)/100;
    const totalSummary = totalPrice + countDelivery
    
    // const payment = 'transfer'
    let arr = []
    Object.values(destruct).forEach(value=>{
       arr.push(value.productName)
     });
    const product = arr.toString()
    const handleCheckout = () =>{
        dispatch(addOrder( product, idCustommer, totalSummary, orderQty, payment, token, history))
        dispatch({ type: string.EMPTY_CART , payload: {} })
    
    }
    return (
        <div>
             <Navbar/>
                <div className="container">
                    <div className={style.texthead2}>
                    <h1 className={style.text_category}>Checkout</h1>
                    <p className={style.text_smol}>Shipping Address</p>
                    </div>
                

                <div className="row no-gutters">
                    <div className="col-md-8">
                     <div className={`card shadow ${style.topcard}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${style.tittle1}`}>{CardData.name ? CardData.name : name}</h5>
                            <p className={`card-text ${style.tittle2}`}>{CardData.address ? CardData.address : address}</p>
                            {/* <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#address">Choose
                            another address</button> */}
                        </div>
                    </div>   
                    {CardData.map((item)=>
                    <div className={`card shadow ${style.topcard}`}>
                        <div className={`card-body ${style.bodyC}`}>
                        <img className={style.imagejas} src={item.image} alt=""/>
                            <div className={style.text}>
                                <p className={style.txt1}>{item.productName}</p>
                                <span className={style.txt2}>{item.brands}</span>
                            </div>
                            <div className={style.text3}>
                                <span className={style.price}>Rp. {item.price}</span>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

                <div className="col-md-4">
                    <div className={`card shadow ${style.sec_card}`}>
                        <div className="card-body">
                        <h5 className={`card-title ${style.shoppingsum}`}>Shopping summary</h5>
                        <div className="row">

                            <div className={`col ${style.orderDetail}`}>
                                <p className={style.Cardtext}>Order</p>
                                <p className={style.Cardtext}>Delivery</p>
                            </div>

                            <div className={`col ${style.orderDetail}`}>
                            <p className={style.priceCard} for="">Rp. {totalPrice}</p>
                            <p className={style.priceCard} for="">Rp. {countDelivery}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className={`col ${style.orderDetail2}`}>
                                <p className={style.shoppingsum2}>Shopping summary</p>
                            </div>
                            <div className={`col ${style.orderDetail2}`}>
                                <p className={style.priceCard2} for="">Rp. {totalSummary}</p>
                            </div>
                        </div>
                    <button type="button" disabled={CardData.length === 0} className={`btn btn-danger ${style.btncard2}`} onClick={handleShow} data-toggle="modal" data-target="#exampleModal">Select
                    {/* <button type="button" disabled={CardData.length === 0} className={`btn btn-danger ${style.btncard2}`} onClick={handleCheckout} data-toggle="modal" data-target="#exampleModal">Select */}
                payment</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            {/* ---------------- Modal payment ------------------------------- */}
            <Modal show={show} fade={false} onHide={handleClose} backdropC="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>

            </Modal.Header>
            <Modal.Body>
            <h5 className="paymentM">Payment Method</h5>
            <div className={style.paymentitem}>
              <div className={style.imagepay}>

                <div className={style.method1}>
                  <img src={Gopay} alt=""/>
                </div>

                <div className={style.method2}>
                  <img src={Pos} alt=""/>
                </div>

                <div className={style.method3}>
                  <img src={CC} alt=""/>
                </div>

              </div>

              <div className={style.namepay}>
                <div className={style.payname1}>
                  <label for="">Gopay</label>
                </div>
                <div className={style.payname2}>
                  <label for="">Pos Indonesia</label>
                </div>
                <div className={style.payname3}>
                  <label for="">Master Card</label>
                </div>

              </div>

              <div className={style.boxpay}>
                <div className={style.cek1}>
                  <input type="checkbox"  onChange={handleCheck} className={`${style.checkmark} ${style.checkS}`} id="" name="payment" value="gopay"/>
                </div>
                <div className={style.cek2}>
                  <input type="checkbox" className={`${style.checkmark} ${style.checkS}`} onChange={handleCheck} id="pos indonesia" name="payment" value="pos indonesia"/>
                </div>
                <div className={style.cek3}>
                  <input type="checkbox" className={`${style.checkmark} ${style.checkS}`} onChange={handleCheck} id="" name="payment" value="master card"/>
                </div>

              </div>
            </div>
            <hr/>
            <h5 className={style.paymentM2}>Payment Method</h5>
            <div className="row">
                <div className={`col ${style.orderDetail}`}>
                    <p className={style.Cardtext}>Order</p>
                    <p className={style.Cardtext}>Delivery</p>
                </div>
                <div className={`col ${style.orderDetail}`}>
                    <p className={style.priceCard} for="">Rp. {totalPrice}</p>
                    <p className={style.priceCard} for="">Rp. {countDelivery}</p>
                </div>
            </div>
            </Modal.Body>


            <Modal.Footer className={`${style.footer} ${style.foot}`}>
                <div className={style.textWrap}>
                <p className={style.summ}>Shopping summary</p>
                <p className={style.total}>Rp. {totalSummary}</p>
                </div>
                <input type="submit" className="btn btn-danger" value="Save" onClick={handleCheckout}/>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Checkout

