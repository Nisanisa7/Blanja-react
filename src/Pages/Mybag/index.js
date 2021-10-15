import React, { Component, useState } from "react";
import Navbar from "../../Component/modules/navbar";
import style from "./mybag.module.css";
import { useHistory } from "react-router";
import Button_count from "../../Component/Base/Button_count";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../configs/redux/actions/productsAction";

const Bag = () => {
  const CardData = useSelector((state) => state.cartItem.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalPrice = useSelector((state) => state.cartItem.totalPrice);

  console.log(CardData, "ini data di dalem cart checkout");
  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };
  const pushCheckOut = () => {
    history.push("/checkout");
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="container">
          <main>
            <div className={style.texthead2}>
              <h1 className={style.text_category}>My Bag</h1>
            </div>

            <div className="row no-gutters">
              <div className="col-md-8">
                <div className={`card shadow ${style.topcard}`}>
                  <div className="card-body">
                    <div className={style.cardC}>
                      <div className={style.check1st}>
                        <input
                          type="checkbox"
                          className={style.checkS}
                          id=""
                          name=""
                          value=""
                        />
                      </div>
                      <div className={style.text1st}>
                        <p className={style.txt1}>Select all items</p>
                      </div>
                      <div className={style.delText}>
                        <a href="">
                          <p className={style.deleteT}>Delete</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {CardData.map((item) => (
                  <div className={`card shadow ${style.topcard}`}>
                    <div className={`card-body ${style.bodyC}`}>
                      <div className={style.checkbSide}>
                        <input
                          type="checkbox"
                          className={style.checkS}
                          id=""
                          name=""
                          value=""
                        />
                      </div>

                      <div className={style.imageCard}>
                        <img
                          className={style.imagejas}
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className={style.text}>
                        <p className={style.txt1}>{item.productName}</p>
                        <span className={style.txt2}>{item.brands}</span>
                      </div>
                      <div className={style.buttonAdd}>
                        {/* <Button_count/> */}
                      </div>
                      <div className={style.text3}>
                        <span className={style.price}>Rp. {item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <div className={`card shadow ${style.sec_card}`}>
                  <div className="card-body">
                    <h5 className={`card-title ${style.shoppingsum}`}>
                      Shopping summary
                    </h5>
                    <div className="row">
                      <div className={`col-8 ${style.orderDetail}`}>
                        <p className={style.Cardtext}>Order</p>
                      </div>

                      <div className={`col ${style.orderDetail}`}>
                        <p className={style.priceCard} for="">
                          RP. {totalPrice}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={CardData.length === 0}
                      onClick={pushCheckOut}
                      className={`btn btn-danger ${style.btncard2}`}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bag;
