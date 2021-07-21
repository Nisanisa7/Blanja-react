import React from 'react'
import style from './input.module.css'

const Input_seller = (props) => {
    return (
        <div>
            <label>{props.label}</label><br/>
            {/* <input className={style.inpt}
            type={props.type}
            text={props.text}
            name={props.name}
            id={props.id}
            value={props.id}
         /> */}
        </div>
    )
}

export default Input_seller
