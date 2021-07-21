import React from 'react'
import style from './card.module.css'
// import Image from '../../../asset/image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import Star from '../../../asset/image/Star.png'
import { Link } from 'react-router-dom'

const CardProduct = (props) => {


  console.log(props.products);
  return(
    
    <div>
      <div className="row">
      {props.products.map((item)=>(
        <div className={`col-xs-6 col-sm-4 ${style.col_md_24}`}>
          <div className={`card card-md-5 ${style.cardS}`}>
             <Link to={"/product/"+item.idProduct}>
               <img className={`card-img-top ${style.image}`} src={item.image}
                 alt="Card image cap"/>
             </Link>
             <div className={`card-body ${style.card_Body}`}>
               <h5 className="card-title">{item.productName}</h5>
               {/* <h5 className="card-title">Black & White</h5> */}
               <h5 className={`card-title ${style.pr}`}>Rp.{item.price}</h5>
               <p className="card-text">{item.brands}</p>
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
      ))}
 
   

      </div>
      
    </div>

  )
  
  // return products.map((item)=>{ 
  //   console.log(item);
  // })
        // <div>
        // <div className="row row-cols-2">
        //   <div className={`col-xs-6 col-sm-4 ${style.col_md_24}`}>
        //     <div className={`card card-md-5 ${style.cardS}`}>
        //       <a href="product.html">
        //         <img className="card-img-top" src={Image}
        //           alt="Card image cap"/>
        //       </a>
        //       <div className={`card-body`}>
        //         <h5 className="card-title">{props.productname}</h5>
        //         {/* <h5 className="card-title">Black & White</h5> */}
        //         <h5 className={`card-title ${style.pr}`}>{props.price}</h5>
        //         {/* <p className="card-text">Zalora Cloth</p> */}
        //         <div className="starcard">
        //           <img className="str-imgC" src={Star} alt=""/>
        //           <img className="str-imgC" src={Star} alt=""/>
        //           <img className="str-imgC" src={Star} alt=""/>
        //           <img className="str-imgC" src={Star} alt=""/>
        //           <img className="str-imgC" src={Star} alt=""/>
        //           <p className={style.ratecard}>(10)</p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>

  
        // </div>
        // </div>
    
    // )
}

export default CardProduct
