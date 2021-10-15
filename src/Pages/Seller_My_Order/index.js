import React, { Component, useEffect, useState } from "react";
import Sidebar_seller from "../../Component/modules/Sidebar_seller";
import NavbarSeller from "../../Component/modules/Navbar_seller";
import style from "./seller.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

const Myorder_seller = () => {
  // const [order, setOrder] = React.useState('asc');
  const [orders, setOrders] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    status_order: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (idOrder) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/orders/` + idOrder)
      .then((res) => {
        setOrderDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(true);
  };

  const handleSubmit = (e, idOrder) => {
    e.preventDefault();
    axios
      .patch(`${process.env.REACT_APP_BACKEND_API}/orders/${idOrder}`, form)
      .then(() => {
        Swal.fire("Succes", "Status order has been changed", "success");
        axios
          .get(`${process.env.REACT_APP_BACKEND_API}/orders`)
          .then((res) => {
            setOrders(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message,
        });
      });
  };
  console.log(orderDetail);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/orders`)
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(orders);
  const handleDelete = (idOrder) => {
    console.log(idOrder);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_API}/orders/` + idOrder, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire("delete Succes", "order history has been deleted", "success");
        axios
          .get(`${process.env.REACT_APP_BACKEND_API}/orders`)
          .then((res) => {
            setOrders(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message,
        });
      });
  };
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
                  <a
                    href="#items"
                    className="nav-link active"
                    data-toggle="tab"
                  >
                    All Items
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#paid" className="nav-link" data-toggle="tab">
                    Get Paid
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#process" className="nav-link" data-toggle="tab">
                    Processed
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#sent" className="nav-link" data-toggle="tab">
                    Sent
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#complete" className="nav-link" data-toggle="tab">
                    Completed
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#cancel" className="nav-link" data-toggle="tab">
                    Order Cancel
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  role="tabpanel"
                  className={`tab-pane ${style.pane} active`}
                  id="items"
                >
                  <div className="row">
                    <div className={style.search_box}>
                      <i className={`material-icons ${style.icon}`}>&#xE8B6;</i>
                      <input
                        type="text"
                        className="form-control"
                        value=""
                        onChange=""
                        placeholder="Search&hellip;"
                      />
                    </div>
                  </div>
                  <table
                    className={`table ${style.table} table-striped table-hover table-bordered ${style.table_hover} ${style.table_strip}`}
                  >
                    <thead className={style.item_head}>
                      <tr>
                        <th>Custommer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders &&
                        orders.map((item) => (
                          <tr>
                            <td>{item.idCustommer}</td>
                            <td>{item.productName}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.Payment}</td>
                            <td>{item.status_order}</td>
                            <td>{item.orderQty}</td>
                            <td>
                              {/* <Link to={"/seller/edit/"+item.idProduct}> */}
                              <button
                                type="button"
                                onClick={() => handleShow(item.idOrder)}
                                className="btn btn-outline-success"
                              >
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              {/* </Link> */}
                              <button
                                type="button"
                                onClick={() => handleDelete(item.idOrder)}
                                className={`btn btn-outline-danger ${style.delete}`}
                              >
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div role="tabpanel" className="tab-pane" id="soldout">
                  Sold Out
                </div>
                <div role="tabpanel" className="tab-pane" id="paid">
                  Paid
                </div>
                <div role="tabpanel" className="tab-pane" id="process">
                  process
                </div>
                <div role="tabpanel" className="tab-pane" id="sent">
                  sent
                </div>
                <div role="tabpanel" className="tab-pane" id="cancel">
                  cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        fade={false}
        onHide={handleClose}
        backdropC="static"
        keyboard={false}
      >
        {orderDetail.map((data) => (
          <>
            <Modal.Header closeButton></Modal.Header>
            <form onSubmit={(e) => handleSubmit(e, data.idOrder)}>
              <Modal.Body>
                <p className="text-center titlem" id="exampleModalLongTitle">
                  Detail Order
                </p>
                <div className="form-group">
                  <label for="productname" className="col-form-label">
                    Product Name:
                  </label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="productname"
                    value={data.productName}
                  />
                </div>
                <div className="form-group">
                  <label for="price" className="col-form-label">
                    Price:
                  </label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="price"
                    value={data.totalPrice}
                  />
                </div>
                <div className="form-group">
                  <label for="payment" className="col-form-label">
                    Payment:
                  </label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="payment"
                    value={data.Payment}
                  />
                </div>
                <div className="form-group">
                  <label for="status" className="col-form-label">
                    Status:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="status_order"
                    onChange={handleChange}
                  >
                    <option selected disabled hidden value={data.status_order}>
                      {data.status_order}
                    </option>
                    <option value="Processing Order">Processing Order</option>
                    <option value="Packed">Packed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Arrive on custommer address">
                      Arrive on custommer address
                    </option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="qty" className="col-form-label">
                    Quantitiy:
                  </label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="qty"
                    value={data.orderQty}
                  />
                </div>
              </Modal.Body>

              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-outline-secondary buttonfoot"
                  onClick={handleClose}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <input
                  type="submit"
                  className="btn btn-danger buttonfoot"
                  value="Save"
                />
              </Modal.Footer>
            </form>
          </>
        ))}
      </Modal>
    </div>
  );
};

export default Myorder_seller;
