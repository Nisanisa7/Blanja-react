import React, { Component } from 'react'
import style from './home.module.css'
import axios from 'axios'
// import Slider from '../../Component/modules/Slider'
import Navbar from '../../Component/modules/navbar'
import TextHead from '../../Component/Base_home/Text_head'
// import Slider_section from '../../Component/modules/Slider_section'
import CardProduct from '../../Component/modules/Card_Products'

import Carousel from '../../Component/Slider_flickity'
import Carousel_Banner from '../../Component/modules/slider_Flickity_banner'
import { connect } from 'react-redux'
import { getProduct } from '../../configs/redux/actions/productsAction'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
export class Home extends Component {

    componentDidMount(){
        
        this.props.fetchData()

    }

    render() {
        console.log(this.props.products);
        return (
            <div>
                <ToastContainer />
                <Navbar products={this.props.products} className={style.navbar}/>
                <div className="container">


                {/* ==== Corousel 1=========================== */}
                <div className={style.head_Corou}>

                {/* <Slider/> */}
                <Carousel_Banner className={style.banner}/>
                </div>
                {/* ========= End of Corousel 1 ======================== */}
                
                <div className={style.texthead}>
                    <TextHead category="Category" text="What are you currently looking for"/>
                </div>
                <div className={style.corousel}>

                {/* <Slider_section/> */}
                <Carousel/>

                </div>

                <div className={style.texthead}>
                    <TextHead category="New" text="You'll never seen it before"/>
                </div>   
                     <CardProduct products={this.props.products} />

            
                <div className={style.texthead}>
                    <TextHead category="Popular" text="Find clothes that are trending recently"/>
                </div>
                <CardProduct products={this.props.products} />

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
 
    return{
        products: state.products.products
    }
    
}
const mapDispatchToProps = dispatch => {
    return {
      fetchData: () =>{
          dispatch(getProduct())
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home)
