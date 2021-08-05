
import React, {useState} from 'react'
import style from './sell_product.module.css'
import NavbarSeller from '../../Component/modules/Navbar_seller'
import Sidebar_seller from '../../Component/modules/Sidebar_seller'
import Input_seller from '../../Component/base_profile/Input_profile'
// import { Editor } from "@tinymce/tinymce-react";
import axios from 'axios'
import { useEffect } from 'react'
// import { Button } from 'bootstrap'

const Selling_product = () => {
    const headers = {
        "Content-Type": "form-data"
      };

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/v1/category/")
          .then((res)=>{
            setItems(res.data.data)
          })
          .catch((err)=>{
            console.log(err);
          })
    }, [])
  

    const [form, setForm] = useState({
      
        'productName' : '',
        'description' : '',
        'price' : '',
        'brands':'',
        'idCategory':'',
        'stock': '',
        'image': null,
        'imagePreview':null
        
    })
    const handlerChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })

    }
    const handleInputImage = (e) =>{
        setForm({
            ...form,
            image : e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0])
        })
    }
    // const productList = (props) =>{
    //     return props.history.push('/seller/my_product')
    //  }
    const formData = new FormData();

    formData.append('productName', form.productName);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('brands', form.brands);
    formData.append('idCategory', form.idCategory);
    console.log(form.idCategory);
    formData.append('stock', form.stock);
    formData.append('image', form.image);

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:4000/v1/products', formData)
        .then((res)=>{
            alert('Success');
            // setTimeout(() => productList(), 3000);
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <div>
            <NavbarSeller/>
                <div>
                     <div className="row no-gutters">
                         <div className="col-md-4">
                         <Sidebar_seller/>
                         </div>
                         <div className={`col-md-8 ${style.cardWrapp}`}>
                         <form className={style.form}>        
                         <div class={`card ${style.topCard}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 class={`card-title ${style.mineOrder}`}>Inventory</h4>

                            </div>

                             <div class="card-body">
                                     <Input_seller label="Name of goods"  />
                                     <input type="text" name="productName" className={style.inpt} onChange={handlerChange}/>
                             </div>
                          </div>

                          <div class={`card ${style.detail_card}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 class={`card-title ${style.mineOrder}`}>Item details</h4>

                            </div>

                             <div class="card-body">
                                     <Input_seller label="Unit Price"/>
                                     <input type="text" name="price" className={style.inpt} onChange={handlerChange}/>

                                     <Input_seller label="Stock"  />
                                     <input type="text" name="stock" className={style.inpt} onChange={handlerChange}/>

                                     <Input_seller label="Brands"  />
                                     <input type="text" name="brands" className={style.inpt} onChange={handlerChange}/>

                                     <Input_seller label="Category"  />
                                    
                                    <select class="custom-select" className={style.inpt} name="idCategory" id="inputGroupSelect01" onChange={handlerChange}>
                                        {items.map((item)=>(
                                            <option value={item.idCategory}>{item.categoryName}</option>
                                        ))}
                                        </select>
                             </div>
                            
                          </div>

                          <div class={`card ${style.imageCard}`}>
                                <div className={`card-header ${style.headCard}`}>
                                    <h4 class={`card-title ${style.mineOrder}`}>Photo of goods</h4>

                                </div>

                              <div className={style.wrapper_Card}>     
                                <div class="card-body">
                                    <div class={style.box_Wrapper}>
                                    <div className={style.image_Box}>
                                    <img className={style.images}src={form.imagePreview} alt="" />
                                        
                                    </div>
                                    <div className={style.image_Box2}>
                                        
                                    </div>
                                    <div className={style.image_Box3}>
                                        
                                    </div>
                                    <div className={style.image_Box4}>
                                        
                                        </div>
                                    </div>
                                    <hr className={style.line}/>
                                    
                                    <div className={style.button_Wrap}>
                                        <label className={style.button} for="upload">Upload File</label>
                                        <input id="upload" type="file" name="image" onChange={handleInputImage}/>
                                    </div>

                                    {/* <input type="file" name="image" className={}/> */}
                                    {/* <input type="text" name="image" className={style.inpt} onChange={handlerChange}/> */}
                                </div>
                             </div> 
                          </div>

                          <div class={`card ${style.third_Card}`}>
                             <div className={`card-header ${style.headCard}`}>

                                 <h4 class={`card-title ${style.mineOrder}`}>Description</h4>

                            </div>

                             <div class="card-body">
                                 <input type="text" name="description" className={style.inpt_Address} onChange={handlerChange}/>

                             {/* <Editor
                                 name="description"
                                 value={this.state.content}
                                 init={{
                                 height: 500,
                                 menubar: false
                                 }}
                                 onChange={this.handlerChange}
                                 onEditorChange={this.handleChangeEditor}
                                 />
 */}
                             </div> 
                          </div>
                          <div className={style.btnCenter}>
                          <button onClick={handleSubmit} className="btn btn-danger">Jual</button>
                         </div>

                         </form>

                         </div>
                                <div className={style.aaa}>
                                aaaaa
                                </div>
                     </div>
                </div>
        </div>
    )
}

export default Selling_product
