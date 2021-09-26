import React, {useState} from 'react'
import style from './button.module.css'

const Button_count = ({minus, counter, plus}) => {
    // const[count, setCount] = useState(1);
    return (
        <div className={style.button_wrapper}>
                 <button onClick={minus} className={style.button_Odd}>-</button>
                 <p className={style.number}>{counter}</p>
                <button onClick={plus} className={style.button_Add}>+</button>
        </div>
    )
}

export default Button_count
