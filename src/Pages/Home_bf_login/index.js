import React, { Component } from "react";
import style from './home_bf.module.css'
import axios from 'axios'
// import Slider from '../../Component/modules/Slider'
import Navbar_bf from "../../Component/modules/navbar_bf_login";
import TextHead from '../../Component/Base_home/Text_head'
// import Slider_section from '../../Component/modules/Slider_section'
import CardProduct from '../../Component/modules/Card_Products'
import Carousel from '../../Component/Slider_flickity'
import Carousel_Banner from '../../Component/modules/slider_Flickity_banner'

export class Home_bf_login extends Component {
  
  state={
    products:[],
    isLoading: true,
}
async getProduct() {
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
componentDidMount(){

    this.getProduct()
}
  render(){
  return (
    <div>
      <div className="container">
        <Navbar_bf  products={this.state.products} />
        {/* <Navbar_bf  products={this.state.products} /> */}

        {/* ==== Corousel 1=========================== */}
        <div className={style.head_Corou}>
          {/* <Slider/> */}
          <Carousel_Banner />
        </div>
        {/* ========= End of Corousel 1 ======================== */}
        <div className={style.texthead}>
          <TextHead
            category="Category"
            text="What are you currently looking for"
          />
        </div>
        <div className={style.corousel}>
          {/* <Slider_section/> */}
          <Carousel products={this.state.products}/>
        </div>

        <div className={style.texthead}>
          <TextHead category="New" text="You'll never seen it before" />
        </div>
        <CardProduct products={this.state.products} />
        
      <div className={style.texthead}>
          <TextHead category="Popular" text="Find clothes that are trending recently" />
        </div>
        <CardProduct products={this.state.products} />
      </div>

    </div>
  );
}
}

export default Home_bf_login
