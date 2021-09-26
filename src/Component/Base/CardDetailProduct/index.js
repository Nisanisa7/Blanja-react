import React from 'react'
import style from './cardstyle.module.css'
import Star from '../../../asset/image/Star.png'
import { Link } from 'react-router-dom'

const CardDetailProduct = ({link, image, productname, price, brands}) => {

  return(
    
    <div>
      <div className="row">
        <div className={`col-xs-6 col-sm-4 ${style.col_md_24}`}>
          <div className={`card card-md-5 ${style.cardS}`}>
          {/* <div className={`card card-md-5 ${style.cardS}`}> */}
             <Link to={link}>
               <img className={`card-img-top ${style.image}`} src={image}
                 alt="Card image cap"/>
             </Link>
             <div className={`card-body ${style.card_Body}`}>
               <h5 className="card-title">{productname}</h5>
               <h5 className={`card-title ${style.pr}`}>Rp.{price}</h5>
               <p className="card-text">{brands}</p>
               <div className={style.starcard}>
                 <img className={style.str_imgC} src={Star} alt=""/>
                 <img className={style.str_imgC} src={Star} alt=""/>
                 <img className={style.str_imgC} src={Star} alt=""/>
                 <img className={style.str_imgC} src={Star} alt=""/>
                 <img className={style.str_imgC} src={Star} alt=""/>
                 <p className={style.ratecard}>(10)</p>
               </div>
             </div>
           </div>
         </div>

 
   

      </div>
      
    </div>

  )

}

export default CardDetailProduct
