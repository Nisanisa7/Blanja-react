import React from 'react'
import style from './wrap.module.css'

function wrapContent({textTitle}) {
    return (
        <div>
        <p className={style.texttitle}>{textTitle}</p>

        </div>
    )
}

export default wrapContent
