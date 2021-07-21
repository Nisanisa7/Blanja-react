import React from "react";
import style from "./navbar.module.css";
import LogoBag from "../../../asset/image/shopping-bag 1.png";
import LogoText from "../../../asset/image/Blanja.png";
import vector from "../../../asset/image/Vector.png";
import Cart from "../../../asset/image/shopping-cart (2) 1 (1).png";
import Bell from "../../../asset/image/bell (1) 1.png";
import Mail from "../../../asset/image/mail (3) 1.png";
import Profile from "../../../asset/image/Mask Group.png";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom"

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className={`container ${style.wrapperHead}`}>
          <Link to="/home">
          <div className={style.logo}>
            <img src={LogoBag} alt="" />
            <img className={style.img2} src={LogoText} alt="" />
          </div>
          </Link>
          <div className={style.search_bar}>
            <div className={style.box_container}>
              <input
                class={style.search}
                type="text"
                name=""
                placeholder="search"
              />
            </div>
            <div className={style.side_button}>
              <button onClick={handleShow}>
                <img src={vector} alt="" />
              </button>
            </div>
          </div>

          <div className={style.nav}>
            <ul className={style.nav_link}>
              <li>
                <Link to="/my_bag">
                  <img src={Cart} alt="" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={Bell} alt="" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={Mail} alt="" />
                </Link>
              </li>
              <li>
                <Link to="profile.html">
                  <img src={Profile} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>














      {/* ================================== Modal =============================================== */}
      <Modal show={show} fade={false} onHide={handleClose} backdropC="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          <div className={style.colorChoice}>
          <p>Color</p>
                  <input className={`${style.checkmark} ${style.bg_black}`} type="radio" name="radio"/> 
                  <input className={`${style.checkmark} ${style.bg_shiro}`} type="radio" name="radio"/> 
                  <input className={`${style.checkmark} ${style.bg_red}`} type="radio" name="radio"/> 
                  <input className={`${style.checkmark} ${style.bg_khaki}`} type="radio" name="radio"/> 
                  <input className={` ${style.checkmark} ${style.bg_ginger}`} type="radio" name="radio"/>
                  <input type="radio" className={`${style.checkmark} ${style.bg_donker}`} name="radio"/>
          <hr/>
          <p>Sizes</p>
          <div className={style.sizeWrap}>

            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className={`btn ${style.ButtonS} btn-outline-danger`} for="btn-check">
                <input type="checkbox" className="btn-check"   autocomplete="off"/> XS
              </label>
            </div>

            <div className={`btn-group  btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
              <label className={`btn ${style.ButtonS} btn-outline-danger`} for="btn-check">
                <input type="checkbox" className="btn-check"  autocomplete="off"/> S
              </label>
            </div>

            <div className={`btn-group  btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
              <label className={`btn ${style.ButtonS} btn-outline-danger`} for="btn-check">
                <input type="checkbox" className="btn-check"  autocomplete="off"/> M
              </label>
            </div>
            
            <div className={`btn-group  btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
              <label className={`btn ${style.ButtonS} btn-outline-danger`} for="btn-check">
                <input type="checkbox" className="btn-check"  autocomplete="off"/> L
              </label>        
            </div>
            <div className={`btn-group  btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
              <label className={`btn ${style.ButtonS} btn-outline-danger`} for="btn-check">
                <input type="checkbox" className="btn-check"   autocomplete="off"/> XL
              </label>
            </div>
          
          </div>
          <hr/>
          <p>Category</p>
          <div className={style.categoryWrap}>
            <div className="row">
              <div className="col">

                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className={`btn btn-outline-danger ${style.btnCat}`}>
                    <input type="checkbox" className="btn-check" autocomplete="off"/> All
                  </label>
                </div>
                <div className={`btn-group btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
                  <label className={`btn btn-outline-danger ${style.btnCat}`}>
                    <input type="checkbox" className="btn-check" autocomplete="off"/> Women
                  </label>
                </div>
                <div className={`btn-group btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
                  <label className={`btn btn-outline-danger ${style.btnCat}`}>
                    <input type="checkbox" className="btn-check" autocomplete="off"/> Men
                  </label>
                </div>
              </div>
            </div>
            <div className="row">

              <div className={`col ${style.boye_Gal}`}>

                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className={`btn btn-outline-danger ${style.btnCat}`}>
                    <input type="checkbox" className="btn-check" autocomplete="off"/> Boy
                  </label>
                </div>
                <div className={`btn-group btn-group-toggle ${style.sizeBtn}`} data-toggle="buttons">
                  <label className={`btn btn-outline-danger ${style.btnCat}`}>
                    <input type="checkbox" className="btn-check" autocomplete="off"/> Girls
                  </label>
                </div>
                
              </div>

            </div>

          </div>
          <hr/>
          <div className={style.brand}>

          <div className={style.brand}>
            <select class="custom-select" className={style.inpt} name="idCategory" id="inputGroupSelect01">
            {props.products.map((item)=>(
                  <option>{item.brands}</option>
                  ))}
              </select>
            </div>
          </div>
          <hr/>



          </div>
        </Modal.Body>
        
        
        <Modal.Footer className={style.footer}>
          <Button variant="outline-secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="outline-danger">Apply</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
