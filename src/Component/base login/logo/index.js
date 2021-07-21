import React from 'react'
import logo1 from '../../../asset/image/shopping-bag 1.png'
import logo2 from '../../../asset/image/Blanja.png'
import style from './logo.module.css'

const Logo_login = () => {
    return (
        <div className={style.logo}>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
        </div>
    )
}

export default Logo_login
