import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Navbar from "../../Component/modules/navbar";
import SidebarBuyer from "../../Component/modules/Sidebar_Buyer";
import Modal from "react-bootstrap/Modal";
const ProfileMyOrder = () => {
  const [showAllitem, setShowAllitem] = useState(true);
  const [showPaid, setPaid] = useState(false);
  const [orders, setOrders] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem('token')
  const idCustommer = localStorage.getItem('idCustommer')

  useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_API}/orders/custommer/`+idCustommer)
          .then((res) => {
              setOrders(res.data.data)
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])

  
  const handleCancel = (idOrder) => {
    Swal.fire({
        title: 'Are you sure to cancel your order?',
        showDenyButton: true,
        confirmButtonText: 'Cancel Order',
        denyButtonText: `Don't cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
            axios.patch(`${process.env.REACT_APP_BACKEND_API}/orders/cancel/`+idOrder, { 
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            .then(()=>{
                Swal.fire(
                    'Cancel Succes',
                    'Your order has been canceled',
                    'success'
                  )
                axios.get(`${process.env.REACT_APP_BACKEND_API}/orders/custommer/`+idCustommer)
                .then((res) => {
                    setOrders(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
                  
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                })
            })
        } else if (result.isDenied) {
          Swal.fire('Your order is not cancelled', '', 'info')
        }
      })
   
}

  return (
    <Styles>
      <Navbar />
      <SidebarBuyer />
      <div className="container">
        <div className="card mainCard">
          <div className="card-header headCard">
            <h4 className="mineOrder">My order</h4>
            <nav className="nav-tabs">
              <a
                className={showAllitem === true ? `active` : ``}
                onClick={() => setShowAllitem(!showAllitem)}
                href="#allitem"
                data-toggle="tab"
              >
                All items
              </a>

              <a
                href="#notyetpaid"
                className={showPaid === true ? `active a1` : `a1`}
                onClick={() => setPaid(!showPaid)}
              >
                Not yet paid
              </a>
              <a href="" data-toggle="tab" className="nav-item a1">
                Packed
              </a>
              <a href="" data-toggle="tab" className="nav-item a1">
                Sent
              </a>
              <a href="" data-toggle="tab" className="nav-item a1">
                Completed
              </a>
              <a href="" data-toggle="tab" className="nav-item a1">
                Order cancel
              </a>
              <div className="animation start-card"></div>
            </nav>
          </div>
          <div className="card-body">
            {showAllitem ? 
            <div>
            <table
              className={`table table-striped table-hover table-bordered table_hover table_strip`}
            >
              <thead className="item_head">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={item.idOrder}>
                    <td>{item.productName}</td>
                    <td>{item.totalPrice}</td>
                    <td>{item.Payment}</td>
                    <td>{item.status_order}</td>
                    <td>{item.orderQty}</td>
                    <td>
                      {/* <Link to={"/selle
                      r/edit/"+item.idProduct}> */}
                      {/* <button type="button"
                      onClick={() => handleShow(item.idOrder)} 
                      className="btn btn-outline-success"> */}
                      {/* <i className="fa fa-search" aria-hidden="true"></i>
                      </button> */}
                      {/* </Link> */}
                      <button
                        type="button"
                        onClick={() => handleCancel(item.idOrder)}
                        className={`btn btn-outline-danger delete`}
                      >
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            : null}
            {showPaid ? <div className="allitem">Anyeong</div> : null}
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
          <Modal.Header closeButton>
          </Modal.Header>
          <form>
          <Modal.Body>
              <p className="text-center titlem" id="exampleModalLongTitle">Detail Order</p>
    
              <div className="form-group firstform">
                <label for="recipient-name" className="col-form-label">Save address as (ex : home address, office
                  address)</label>
                <input type="text" className="form-control fieldS" id="recipient-name" name="" placeholder="Rumah"/>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="editname">Recipient’s name</label>
                  <input type="text" className="form-control fieldS" id="editname"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="editphonenumber">Recipient's telephone number</label>
                  <input type="text" className="form-control fieldS" id="editphonenumber"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control h-50" id="inputAddress" name="address"/>
                </div>     
              </div>

              <div className="form-group">
                <div className="form-check ">
                  <input className="form-check-input mt-20 boxC" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label labelC" for="gridCheck">
                    Make it the primary address
                  </label>
                </div>


              </div>
          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-outline-secondary buttonfoot" onClick={handleClose} data-dismiss="modal">Close</button>
            <input type="submit" className="btn btn-danger buttonfoot" value="Save"/>
          </Modal.Footer>
          </form>
        </Modal>
    </Styles>
  );
};

export default ProfileMyOrder;
const Styles = styled.div`
  .mainCard {
    position: absolute;
    margin-top: 50px;
    margin-left: 390px !important;
    width: 60%;
    height: 590px;
    @media screen and (min-width: 600px) {
      margin-left: 180px !important;
    }
    @media screen and (min-width: 786px) {
      margin-left: 250px !important;
    }
    @media screen and (min-width: 992px) {
      margin-left: 350px !important;
    }
    @media screen and (min-width: 1119px) {
      margin-left: 390px !important;
    }
    .headCard {
      background: #ffff !important;
      nav {
        margin: 20px auto 0;
        width: 100%;
        height: 30px;
        font-size: 0;
        .a1 {
          margin-left: 50px;
          @media screen and (min-width: 600px) {
                margin-left: 3px !important;
            }                   
          @media screen and (min-width: 786px) {
            margin-left: 6px !important;
          }
          @media screen and (min-width: 992px) {
            margin-left: 24px !important;
          }
          @media screen and (min-width: 1119px) {
            margin-left: 50px !important;
          }
        }
      }
      nav a {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none !important;
        color: #9b9b9b;
        position: relative;
        z-index: 1;
        text-align: center;
        @media screen and (min-width: 786px) {
          font-size:12px;
        }
        @media screen and (min-width: 992px) {
          font-size: 14px;
        }
        @media screen and (min-width: 1119px) {
          font-size: 16px;
        }
      }
      nav a:hover,
      nav a:active {
        border-bottom: 2px solid #db3022;
        color: #db3022;
      }
      nav a.active {
        border-bottom: 2px solid #db3022;
        color: #db3022;
      }
    }
    table thead tbody{
    width: 100%;
        @media screen and (min-width: 786px) {
          width: 50% !important;
        }
        @media screen and (min-width: 992px) {
          width: 100% !important;
        }
        @media screen and (min-width: 1119px) {
          width: 100% !important;
        }
        /* @media screen and (min-width: 600px) {
            width: 50%;
        }
        @media screen and (min-width: 786px) {
        width: 50%;
        }
        @media screen and (min-width: 992px) {
        width: 100%;
        }
        @media screen and (min-width: 1119px) {
        width: 100%;
        } */

    }    
  }
`;
