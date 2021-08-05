import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './product.module.css'
import Navbar from '../../Component/modules/navbar'
import Star from '../../asset/image/Star.png'

import Coksu from '../../asset/image/orang/coksu.png'
import Orange from '../../asset/image/orang/oren (1).png'
import Ash_Blue from '../../asset/image/orang/biru kelabu.png'
import Donker from '../../asset/image/orang/dongker.png'
import White from '../../asset/image/orang/putih.png'
// import Line from '../../asset/image/Line 48.png'

import Button_count from '../../Component/Base/Button_count';
import CardProduct from '../../Component/modules/Card_Products';

//HALPOOOO
export class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            isLoading: true,
            productName : '',
            description : '',
            price : '',
            brands :'',
            idCategory :'',
            stock : '',
            image : ''
        }
    }
    async getAllProduct() {
        const response = await axios.get('http://localhost:4000/v1/products');
        try {
          this.setState({
            products: response.data.item,
            isLoading: false,
          });
        } catch (error) {
          this.setState({ error, isLoading: false });
        }
      }
    
    handleCart = () =>{
        
    }
    getProductById = ()=>{
        // const productId = +this.props.match.params.id
        axios.get(`http://localhost:4000/v1/products/${this.props.match.params.id}`)
        .then((res)=>{
            const data = res.data.data[0]
            console.log(data);
            this.setState({
                productName : data.productName,
                description : data.description,
                price : data.price,
                brands : data.brands,
                idCategory : data.idCategory,
                stock : data.stock,
                image : data.image,
            })
        })

    }
    componentDidMount(){
        this.getProductById()
        this.getAllProduct()
    }
    render() {
        return (
            <div>
            {/* <p>{JSON.stringify(this.getProductById)}</p> */}
                <Navbar products={this.state.products}/>

                {/* ------------------------------------------------------------------ */}
                <div className="container">
                 <nav aria-label={`breadcrumb ${style.breadCrumb}`}>
                 {/* <nav style="--bs{`breadcrumb ${style.breadCrumb-`}divider: '>';" aria-label={`breadcrumb ${style.breadCrumb"`}> */}
                        <ol className={`breadcrumb ${style.breadCrumb}`}>
                        <li className={`breadcrumb-item`}><Link to="/home">Home</Link></li>
                        <li className={`breadcrumb-item`} aria-current="page">Category</li>
                        <li className={`breadcrumb-item active`} aria-current="page">{this.state.idCategory}</li>
                        </ol>
                  </nav>

                {/* <!-- ---------------------------------------------------------- --> */}

                <div className={style.wrapper}>

                    <div className={style.wrapper_Image}>
                        <div className={style.main_Image}>
                             <img className={style.main_img} src={this.state.image} alt=""/>
                        </div>
                        <div className={style.small_Image}>
                            <img class={style.image_Section} src={Orange} alt=""/>
                            <img class={style.image_Section} src={Donker} alt=""/>
                            <img class={style.image_Section} src={Ash_Blue} alt=""/>
                            <img class={style.image_Section} src={White} alt=""/>
                            <img class={style.image_Section} src={Coksu} alt=""/>
                        </div>
                    </div>

                    <div className={style.wrapper_Content}>

                            <h1 className={style.headline}>{this.state.productName}</h1>
                            <h4 className={style.brand_Name}>{this.state.brands}</h4>

                            <div className={style.star}>
                                <img className={style.star_image} src={Star} alt=""/>
                                <img className={style.star_image} src={Star} alt=""/>
                                <img className={style.star_image} src={Star} alt=""/>
                                <img className={style.star_image} src={Star} alt=""/>
                                <img className={style.star_image} src={Star} alt=""/>
                                <p class={style.rate}>(10)</p>
                            </div>
                            <p className={style.text_Price}>Price</p>
                            <p className={style.price}>{this.state.price}</p>

                            <p className={style.text_Color}></p>
                            <input className={`${style.checkmark} ${style.bg_black}`} type="radio" name="radio"/> 
                            <input className={`${style.checkmark} ${style.bg_red}`} type="radio" name="radio"/> 
                            <input className={`${style.checkmark} ${style.bg_blue}`} type="radio" name="radio"/> 
                            <input className={`${style.checkmark} ${style.bg_green}`} type="radio" name="radio"/> 

                            <div className={style.text_Wrap}>
                                <p className={style.text_size}>Size</p>
                                <p className={style.text_total}>Jumlah</p>
                            </div>
                            <div className={style.button_wrapper}>

                                <div className={style.button_left}>
                                    <Button_count/>
                                </div>
                                <div className={style.button_rigth}>
                                    <Button_count/>
                                </div>

                            </div>
                            <div className={style.button_content}>
                            <button type="button" className={`btn btn-outline-dark ${style.chat}`}>Chat</button>
                            <button type="button" onClick={this.handleCart} className={`btn btn-outline-dark ${style.addbag}`}>Add bag</button>
                            <Link to="/checkout"><button type="button" className={`btn btn-danger ${style.buynow}`}>Buy Now</button></Link>
                            </div>
                    </div>

                </div>
                {/* ----------------------------------------------------------------------------------------------------------------- */}

                    <article>
                        <div className={style.wrap_article}>

                            <h1 className={style.info_text}>Informasi Produk</h1>
                            <h3 className={style.condition}>Condition</h3>
                            <h4 className={style.status_Condition}>New</h4>

                        <section>
                            <h1 className={style.desc}>Description</h1>
                            <p className={style.placeholder_desc}>
                             {this.state.description}
                            </p>
                        </section>
                        </div>
                       {/* ----------------------------------------------------------------------------------------------------------------------  */}
                   
                        <h3 className={style.review}>Product Review</h3>

                        <div className={style.review_wrap}>

                            <div className={style.star_Rate}>

                                    <div class={style.Rate}>
                                        <p class={style.ratenum}>5.0</p>
                                        <p class={style.num}>/10</p>
                                    </div>
                                    <div className={style.bottomstar}>
                                        <img className={style.star_image} src={Star} alt=""/>
                                        <img className={style.star_image} src={Star} alt=""/>
                                        <img className={style.star_image} src={Star} alt=""/>
                                        <img className={style.star_image} src={Star} alt=""/>
                                        <img className={style.star_image} src={Star} alt=""/>
                                    </div>
                            </div>
                            <div className={style.statistic}>
                                <div className={style.star_review}>
                                        <img className="starrate" src={Star} alt=""/>
                                        <span>5</span>
                                        <progress id="file" value="100" max="100"> 32% </progress>
                                        <span>4</span>
                                </div>
                                <div className={style.star_review}>
                                        <img className="starrate" src={Star} alt=""/>
                                        <span>4</span>
                                        <progress id="file" value="60" max="100"> 32% </progress>
                                        <span>1</span>
                                </div>
                                <div className={style.star_review}>
                                        <img className="starrate" src={Star} alt=""/>
                                        <span>3</span>
                                        <progress id="file" value="0" max="100"> 32% </progress>
                                        <span>0</span>
                                </div>
                                <div className={style.star_review}>
                                        <img className="starrate" src={Star} alt=""/>
                                        <span>2</span>
                                        <progress id="file" value="0" max="100"> 32% </progress>
                                        <span>0</span>
                                </div>
                                <div className={style.star_review}>
                                        <img className="starrate" src={Star} alt=""/>
                                        <span>1</span>
                                        <progress id="file" value="0" max="100"> 32% </progress>
                                        <span>0</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* ======================================================================== */}
                    <hr/>
                        <div class={style.texthead2}>
                            <h1 class={style.text_category}>Popular</h1>
                            <p class={style.text_smol}>find clothes that are trending rencently</p>
                        </div>

                    {/* ======================================================================== */}
                    <CardProduct products={this.state.products}/>
                    
                </div>
            </div>
        )
    }
}

export default Product
