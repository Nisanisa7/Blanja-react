import React, { Component } from 'react'
import Navbar from '../../Component/modules/navbar'
import style from './mybag.module.css'
import { Link } from 'react-router-dom'
import Button_count from '../../Component/Base/Button_count'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Tuxedo from '../../asset/image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import Jeans from '../../asset/image/kemal-alkan-_BDBEP0ePQc-unsplash 1.png'

export class Bag extends Component {
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
                    <main>
                        <div className={style.texthead2}>
                            <h1 className={style.text_category}>My Bag</h1>
                        </div>

                        <div className="row no-gutters">
                          <div className="col-md-8">

                            <div className={`card shadow ${style.topcard}`}>
                                <div className="card-body">
                                      <div className={style.cardC}>
                                        <div className={style.check1st}>
                                            <input type="checkbox" className={style.checkS} id="" name="" value=""/>
                                        </div>
                                        <div className={style.text1st}>
                                            <p className={style.txt1}>Select all items</p>
                                        </div>
                                        <div className={style.delText}>
                                            <a href=""><p className={style.deleteT}>Delete</p></a>
                                        </div>
                                    </div>
                                 </div>
                             </div>   

                             <div className={`card shadow ${style.topcard}`}>
                                <div className={`card-body ${style.bodyC}`}>

                                    <div className={style.checkbSide}>
                                        <input type="checkbox" className={style.checkS} id="" name="" value=""/>
                                    </div>

                                    <div className={style.imageCard}>
                                        <img className={style.imagejas} src={Tuxedo} alt=""/>
                                    </div>

                                    <div className={style.text}>
                                        <p className={style.txt1}>Men's formal suit - Black</p>
                                        <span className={style.txt2}>Zara Cloth</span>
                                    </div>
                                    <div className={style.buttonAdd}>
                                        <Button_count/>
                                    </div>
                                    <div className={style.text3}>
                                        <span className={style.price}>$20.00</span>
                                    </div>
                                </div>
                             </div>

                             <div className={`card shadow ${style.topcard}`}>
                                <div className={`card-body ${style.bodyC}`}>

                                    <div className={style.checkbSide}>
                                        <input type="checkbox" className={style.checkS} id="" name="" value=""/>
                                    </div>

                                    <div className={style.imageCard}>
                                        <img className={style.imagejas} src={Jeans} alt=""/>
                                    </div>

                                    <div className={style.text}>
                                        <p className={style.txt1}>Men's Jacket Jeans</p>
                                        <span className={style.txt2}>Zara Cloth</span>
                                    </div>
                                    <div className={style.buttonAdd}>
                                        <Button_count/>
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

                            <div className={`col-8 ${style.orderDetail}`}>
                                <p className={style.Cardtext}>Order</p>
                            </div>

                            <div className={`col ${style.orderDetail}`}>
                            <p class={style.priceCard} for="">$ 40.5</p>
                            </div>
                        </div>
                        <Link to="/checkout">
                         <button type="button" className={`btn btn-danger ${style.btncard2}`}>Buy</button>
                        </Link>
                    </div>
                </div>
                </div>
                        </div>
                    </main>

                </div>
            </div>
        )
    }
}

export default Bag
