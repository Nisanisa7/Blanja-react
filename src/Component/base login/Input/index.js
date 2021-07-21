import React from 'react'
import style from './field.module.css'

function input_Login(props) {
    return (
        <div>
            <input type={props.type} name={props.name}
            placeholder={props.placeholder} value={props.value}
            className={style["form-control"]}/>
        </div>
    )
}

export default input_Login
