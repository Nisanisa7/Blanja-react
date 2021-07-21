import React, { Component } from 'react'
import Navbar from '../../Component/modules/navbar'
import style from './checkout.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Tuxedo from '../../asset/image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'



export class CheckOut extends Component {
    state={
        products:[],
        isLoading: true,
    }
    async getAllProduct() {
        const response = await axios.get('http://localhost:4000/products');
        try {
          this.setState({
            products: response.data.data,
            isLoading: false,
          });
        } catch (error) {
          this.setState({ error, isLoading: false });
        }
      }
    componentDidMount(){

        this.getAllProduct()
    }
    render() {
        return (
            <div>
                <Navbar products={this.state.products}/>
                <div className="container">
                    <div className={style.texthead2}>
                    <h1 className={style.text_category}>Checkout</h1>
                    <p className={style.text_smol}>Shipping Address</p>
                    </div>
                

                <div className="row no-gutters">
                    <div className="col-md-8">
                     <div className={`card shadow ${style.topcard}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${style.tittle1}`}>Andreas Jane</h5>
                            <p className={`card-text ${style.tittle2}`}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas,
                            Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                            <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#address">Choose
                            another address</button>
                        </div>
                    </div>   

                    <div className={`card shadow ${style.topcard}`}>
                        <div className={`card-body ${style.bodyC}`}>
                        <img className={style.imagejas} src={Tuxedo} alt=""/>
                            <div className={style.text}>
                                <p className={style.txt1}>Men's formal suit - Black</p>
                                <span className={style.txt2}>Zara Cloth</span>
                            </div>
                            <div className={style.text3}>
                                <span className={style.price}>$20.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={`card shadow ${style.topcard}`}>
                        <div className={`card-body ${style.bodyC}`}>
                        <img className={style.imagejas} src={Tuxedo} alt=""/>
                            <div className={style.text}>
                                <p className={style.txt1}>Men's formal suit - Black</p>
                                <span className={style.txt2}>Zara Cloth</span>
                            </div>
                            <div className={style.text3}>
                                <span className={style.price}>$20.00</span>
                            </div>
                        </div>
                    </div>     
                </div>

                <div className="col-md-4">
                    <div className={`card shadow ${style.sec_card}`}>
                        <div className="card-body">
                        <h5 className={`card-title ${style.shoppingsum}`}>Shopping summary</h5>
                        <div className="row">

                            <div className={`col ${style.orderDetail}`}>
                                <p className={style.Cardtext}>Order</p>
                                <p className={style.Cardtext}>Delivery</p>
                            </div>

                            <div className={`col ${style.orderDetail}`}>
                            <p class={style.priceCard} for="">$ 40.5</p>
                            <p class={style.priceCard} for="">$ 5.5</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className={`col ${style.orderDetail2}`}>
                                <p className={style.shoppingsum2}>Shopping summary</p>
                            </div>
                            <div className={`col ${style.orderDetail2}`}>
                                <p className={style.priceCard2} for="">$ 45.5</p>
                            </div>
                        </div>
                    <button type="button" className={`btn btn-danger ${style.btncard2}`} data-toggle="modal" data-target="#exampleModal">Select
                payment</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            {/* ---------------- Modal payment ------------------------------- */}
        
        </div>
        )
    }
}

export default CheckOut
