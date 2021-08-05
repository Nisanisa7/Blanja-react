import React from 'react'
import style from './email.module.css'
import Success from '../../asset/image/R.png'

function CustommerEmail() {
    return (
        <div className={style.wrapper}>
      <div className={style.inner_Wrap}>

        <div className={style.logo}>
          {/* <Logo_login /> */}
        </div>

        <h1 className={style.h1Title}>Activation Success</h1>

        <div className={style.centerImage}>
          <img src={Success} alt="" />
        </div>

        <p className={style.text}>
        Your account has been successfully activated! now you can login to our website~
        </p>
      </div>

      <footer></footer>
    </div>
    )
}

export default CustommerEmail
