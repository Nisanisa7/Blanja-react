import React, {useState} from 'react'
import style from './button.module.css'

const Button_count = () => {
    const[count, setCount] = useState(0);
    return (
        <div className={style.button_wrapper}>
                 <button onClick={()=>setCount(count-1)} className={style.button_Odd}>-</button>
                 <p className={style.number}>{count}</p>
                <button onClick={()=>setCount(count+1)} className={style.button_Add}>+</button>
        </div>
    )
}

export default Button_count
