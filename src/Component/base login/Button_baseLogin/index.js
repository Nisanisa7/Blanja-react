import React from 'react'
import style from './button.module.css'

const Button_baseLogin = (props) => {
    return (
        <div>
            <button className={style.btnLogin} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Button_baseLogin
