import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import style from "./product.module.css";
import Navbar from "../../Component/modules/navbar";
import Star from "../../asset/image/Star.png";

import Coksu from "../../asset/image/orang/coksu.png";
import Orange from "../../asset/image/orang/oren (1).png";
import Ash_Blue from "../../asset/image/orang/biru kelabu.png";
import Donker from "../../asset/image/orang/dongker.png";
import White from "../../asset/image/orang/putih.png";
// import Line from '../../asset/image/Line 48.png'

import Button_count from "../../Component/Base/Button_count";
import CardProduct from "../../Component/modules/Card_Products";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedProduct,
  updateStock,
} from "../../configs/redux/actions/productsAction";
import CardDetailProduct from "../../Component/Base/CardDetailProduct";
import { ToastContainer } from "react-toastify";
import { addCart } from "../../configs/redux/actions/cartActions";

const Product = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const Profile = useSelector((state) => state.buyer.profile);
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [totalPerItem, settotalPerItem] = useState(0);

  useEffect(() => {
    dispatch(
      getSelectedProduct(id, (data) => {
        setDetail(data);
      })
    );
  }, []);
  console.log("ini isi detail", detail);

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((res) => {
        setItems(res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(items, "result data");
  const handleClick = () => {
    dispatch(addCart(detail, count));
  };
  const handleBuyNow = () => {
    dispatch(addCart(detail, count));
    history.push("/checkout");
  };
  console.log(totalPerItem);
  const handleIncrement = () => {
    if (count < detail.stock) {
      setCount(count + 1);
    } else {
      setCount(detail.stock);
    }
  };
  const handleDecrement = () => {
    if (count < 2) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  console.log("logitem", count);
  console.log(detail.stock, "ini stock");

  return (
    <div>
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      <div className="container">
        {detail && (
          <>
            <nav aria-label={`breadcrumb ${style.breadCrumb}`}>
              {/* <nav style="--bs{`breadcrumb ${style.breadCrumb-`}divider: '>';" aria-label={`breadcrumb ${style.breadCrumb"`}> */}
              <ol className={`breadcrumb ${style.breadCrumb}`}>
                <li className={`breadcrumb-item`}>
                  <Link to="/home">Home</Link>
                </li>
                <li className={`breadcrumb-item`} aria-current="page">
                  Category
                </li>
                <li className={`breadcrumb-item active`} aria-current="page">
                  {detail.idCategory}
                </li>
              </ol>
            </nav>

            {/* <!-- ---------------------------------------------------------- --> */}

            <div className={style.wrapper}>
              <div className={style.wrapper_Image}>
                <div className={style.main_Image}>
                  <img className={style.main_img} src={detail.image} alt="" />
                </div>
                <div className={style.small_Image}>
                  <img className={style.image_Section} src={Orange} alt="" />
                  <img className={style.image_Section} src={Donker} alt="" />
                  <img className={style.image_Section} src={Ash_Blue} alt="" />
                  <img className={style.image_Section} src={White} alt="" />
                  <img className={style.image_Section} src={Coksu} alt="" />
                </div>
              </div>

              <div className={style.wrapper_Content}>
                <h1 className={style.headline}>{detail.productName}</h1>
                <h4 className={style.brand_Name}>{detail.brands}</h4>

                <div className={style.star}>
                  <img className={style.star_image} src={Star} alt="" />
                  <img className={style.star_image} src={Star} alt="" />
                  <img className={style.star_image} src={Star} alt="" />
                  <img className={style.star_image} src={Star} alt="" />
                  <img className={style.star_image} src={Star} alt="" />
                  <p className={style.rate}>(10)</p>
                </div>
                <p className={style.text_Price}>Price</p>
                <p className={style.price}>{detail.price}</p>

                <p className={style.text_Color}></p>
                <input
                  className={`${style.checkmark} ${style.bg_black}`}
                  type="radio"
                  name="radio"
                />
                <input
                  className={`${style.checkmark} ${style.bg_red}`}
                  type="radio"
                  name="radio"
                />
                <input
                  className={`${style.checkmark} ${style.bg_blue}`}
                  type="radio"
                  name="radio"
                />
                <input
                  className={`${style.checkmark} ${style.bg_green}`}
                  type="radio"
                  name="radio"
                />

                <div className={style.text_Wrap}>
                  <p className={style.text_size}>Size</p>
                  <p className={style.text_total}>Jumlah</p>
                </div>
                <div className={style.button_wrapper}>
                  <div className={style.button_left}>
                    <Button_count />
                  </div>
                  <div className={style.button_rigth}>
                    <Button_count
                      plus={() => handleIncrement()}
                      minus={() => handleDecrement()}
                      counter={count}
                    />
                  </div>
                </div>
                <div className={style.button_content}>
                  <button
                    type="button"
                    className={`btn btn-outline-dark ${style.chat}`}
                  >
                    Chat
                  </button>
                  <button
                    type="button"
                    disabled={count === 0}
                    onClick={handleClick}
                    className={`btn btn-outline-dark ${style.addbag}`}
                  >
                    Add bag
                  </button>
                  <button
                    type="button"
                    disabled={count === 0}
                    onClick={handleBuyNow}
                    className={`btn btn-danger ${style.buynow}`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------------------------------------------------------------------- */}

            <article>
              <div className={style.wrap_article}>
                <h1 className={style.info_text}>Informasi Produk</h1>
                <h3 className={style.condition}>Condition</h3>
                <h4 className={style.status_Condition}>New</h4>

                <section>
                  <h1 className={style.desc}>Description</h1>
                  <p className={style.placeholder_desc}>{detail.description}</p>
                </section>
              </div>
              {/* ----------------------------------------------------------------------------------------------------------------------  */}

              <h3 className={style.review}>Product Review</h3>

              <div className={style.review_wrap}>
                <div className={style.star_Rate}>
                  <div className={style.Rate}>
                    <p className={style.ratenum}>5.0</p>
                    <p className={style.num}>/10</p>
                  </div>
                  <div className={style.bottomstar}>
                    <img className={style.star_image} src={Star} alt="" />
                    <img className={style.star_image} src={Star} alt="" />
                    <img className={style.star_image} src={Star} alt="" />
                    <img className={style.star_image} src={Star} alt="" />
                    <img className={style.star_image} src={Star} alt="" />
                  </div>
                </div>
                <div className={style.statistic}>
                  <div className={style.star_review}>
                    <img className="starrate" src={Star} alt="" />
                    <span>5</span>
                    <progress id="file" value="100" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                    <span>4</span>
                  </div>
                  <div className={style.star_review}>
                    <img className="starrate" src={Star} alt="" />
                    <span>4</span>
                    <progress id="file" value="60" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                    <span>1</span>
                  </div>
                  <div className={style.star_review}>
                    <img className="starrate" src={Star} alt="" />
                    <span>3</span>
                    <progress id="file" value="0" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                    <span>0</span>
                  </div>
                  <div className={style.star_review}>
                    <img className="starrate" src={Star} alt="" />
                    <span>2</span>
                    <progress id="file" value="0" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                    <span>0</span>
                  </div>
                  <div className={style.star_review}>
                    <img className="starrate" src={Star} alt="" />
                    <span>1</span>
                    <progress id="file" value="0" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </article>
            {/* ======================================================================== */}
            <hr />
            <div className={style.texthead2}>
              <h1 className={style.text_category}>Popular</h1>
              <p className={style.text_smol}>
                find clothes that are trending rencently
              </p>
            </div>

            {/* ======================================================================== */}

            <div className="row">
              {items.map((item) => (
                <div className={`col-xs-6 col-sm-4 ${style.col_md_24}`}>
                  <div className={`card card-md-5 ${style.cardS}`}>
                    <Link to={"/product/" + item.idProduct}>
                      <img
                        className={`card-img-top ${style.image}`}
                        src={item.image}
                        alt="Card image cap"
                      />
                    </Link>
                    <div className={`card-body ${style.card_Body}`}>
                      <h5 className="card-title">{item.productName}</h5>
                      <h5 className={`card-title ${style.pr}`}>
                        Rp.{item.price}
                      </h5>
                      <p className="card-text">{item.brands}</p>
                      <div className={style.starcard}>
                        <img className={style.str_imgC} src={Star} alt="" />
                        <img className={style.str_imgC} src={Star} alt="" />
                        <img className={style.str_imgC} src={Star} alt="" />
                        <img className={style.str_imgC} src={Star} alt="" />
                        <img className={style.str_imgC} src={Star} alt="" />
                        <p className={style.ratecard}>(10)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
