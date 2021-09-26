// import React, { Component } from "react";
// import style from "./Edit.module.css";
// import NavbarSeller from "../../Component/modules/Navbar_seller";
// import Sidebar_seller from "../../Component/modules/Sidebar_seller";
// import Input_seller from "../../Component/base_profile/Input_profile";
// // import { Editor } from "@tinymce/tinymce-react";
// import axios from "axios";

import React, {useEffect, useState} from 'react'
import axios from 'axios';
import style from "./Edit.module.css";
import NavbarSeller from "../../Component/modules/Navbar_seller";
import Sidebar_seller from "../../Component/modules/Sidebar_seller";
import Input_seller from "../../Component/base_profile/Input_profile";


const Editproduct = (props) => {
  const[product, setProduct] = useState({
      productName : '',
      description : '',
      price : '',
      brands :'',
      idCategory :'',
      stock : '',
      image : ''
  })// product = default , setState = untuk mengubah datanya
  useEffect(() => {
    axios.get(`http://localhost:4000/v1/products/${props.match.params.id}`)
    .then((res)=>{
      // setItems(res.data.data)
      const data = res.data.data[0]
      setProduct({
        productName : data.productName,
        description : data.description,
        price : data.price,
        brands : data.brands,
        idCategory : data.idCategory,
        stock : data.stock,
        image : data.image,
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

const handleChange= (e) =>{
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    }) 
}
const handleUpdate = (e) =>{
  e.preventDefault()
  axios.put(`http://localhost:4000/v1/products/${props.match.params.id}`, product)
  .then((res)=>{
    const data = res.data.data
    setProduct({
        productName : data.productName,
        description : data.description,
        price : data.price,
        brands : data.brands,
        idCategory : data.idCategory,
        stock : data.stock,
        image : data.image,
    })
    alert('data has successfully updated!!')
})
.catch((err)=>{
    alert(err);
})
}
  return (
    
    <div>
      {/* <p>{JSON.stringify(product)}</p> */}
                         <NavbarSeller/>
      <div className="row no-gutters">
                         <div className="col-md-4">
                         <Sidebar_seller/>
                         </div>
                         <div className={`col-md-8 ${style.cardWrapp}`}>
                         <form className={style.form}>        
                         <div className={`card ${style.topCard}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 className={`card-title ${style.mineOrder}`}>Inventory</h4>

                            </div>

                             <div className="card-body">
                                     <Input_seller label="Name of goods"  />
                                     <input type="text" name="productName" value={product.productName} onChange={(e)=>handleChange(e)} className={style.inpt}/>
                             </div>
                          </div>

                          <div className={`card ${style.detail_card}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 className={`card-title ${style.mineOrder}`}>Item details</h4>

                            </div>

                             <div className="card-body">
                                     <Input_seller label="Unit Price"/>
                                     <input type="text" name="price" value={product.price} onChange={(e)=>handleChange(e)} className={style.inpt}/>

                                     <Input_seller label="Stock"  />
                                     <input type="text" name="stock" value={product.stock} onChange={(e)=>handleChange(e)} className={style.inpt}/>

                                     <Input_seller label="Brands"  />
                                     <input type="text" name="brands" value={product.brands} onChange={(e)=>handleChange(e)} className={style.inpt}/>

                                     <Input_seller label="Category"  />
                                     <input type="text" name="category" value={product.idCategory} onChange={(e)=>handleChange(e)} className={style.inpt}/>
                                    {/* <select class="custom-select" className={style.inpt} name="idCategory" id="inputGroupSelect01">
                                        {items.map((item)=>(
                                            <option value={item.idCategory}>{item.categoryName}</option>
                                        ))}
                                        </select> */}
                             </div>
                            
                          </div>

                          <div className={`card ${style.imageCard}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 className={`card-title ${style.mineOrder}`}>Photo of goods</h4>

                            </div>

                             <div className="card-body">
                                 <input type="text" name="image" value={product.image} onChange={(e)=>handleChange(e)} className={style.inpt}/>
                             </div>
                          </div>

                          <div className={`card ${style.third_Card}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 className={`card-title ${style.mineOrder}`}>Description</h4>

                            </div>

                             <div className="card-body">
                                 <input type="text" name="description" value={product.description} onChange={(e)=>handleChange(e)} className={style.inpt_Address}/>
                             </div> 
                          </div>
                          <div className={style.btnCenter}>
                          <button onClick={handleUpdate} className="btn btn-success">Update</button>
                         </div>

                         </form>

                         </div>
                                <div className={style.aaa}>
                                aaaaa
                                </div>
                     </div>
                </div>
    
  )
}

export default Editproduct
