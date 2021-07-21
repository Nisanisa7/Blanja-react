import React from "react";
import style from "./sidebar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import { Dropdown } from "react-bootstrap";
import Pen from "../../../asset/image/Pen.png";
import Profile from "../../../asset/image/christian-buehner-DItYlc26zVI-unsplash 1.png";
import Profile_logo from "../../../asset/image/sidebar customer/Ellipse 281.png";
import Address_logo from "../../../asset/image/sidebar customer/Ellipse 282.png";
import Copy_logo from "../../..//asset/image/sidebar customer/Ellipse 286.png";

function Sidebar_seller() {
  return (
    <div>
      <aside>
        <div className={style.sidebar}>
          <div className={style.profile}>
            <div className={style.imageprofile}>
              <img className={style.img1} src={Profile} alt="" />
            </div>
            <div className={style.profile_det}>
              <h4 className={style.nameP}>Johanes Mikael</h4>
              <div className="row">
                <div className="col-md-1">
                  <img className={style.pen} src={Pen} alt="" />
                </div>
                <div className="col-md-10 ">
                  <p className={style.editP}>Ubah profile</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.link_profile}>
            <div className={style.imagePr}>
              <div className={style.imag1}>
                <img src={Profile_logo} alt="" />
              </div>
              <div className={style.imag2}>
                <img src={Address_logo} alt="" />
              </div>
              <div className={style.imag3}>
                <img src={Copy_logo} alt="" />
              </div>
            </div>

            <div className={style.namelink}>
              <div className={style.nameli1}>
              <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Store
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/seller/profile_seller">Store Profile</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={style.nameli2}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Product
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/seller/my_product">
                      My products
                    </Dropdown.Item>
                    <Dropdown.Item href="/seller/selling_product">
                      Selling Product
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={style.nameli3}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Order
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/seller/my_order">My Order</Dropdown.Item>
                    <Dropdown.Item href="/seller/cancel_order">
                      Order Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar_seller;
