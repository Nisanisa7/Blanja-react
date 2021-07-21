import React from "react";
import style from './buttonSwitch.module.css'

function Button_switch() {
  return (
    <div>
      <div className={style.buttonGroup}>
        <button className={style.cus} type="button">
          Customer
        </button>
        <button className={style.seller} type="button">
          Seller
        </button>
      </div>
    </div>
  );
}

export default Button_switch;
