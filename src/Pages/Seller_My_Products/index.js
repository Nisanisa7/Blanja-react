import React, { Component } from 'react'
import style from './seller_myPro.module.css'
import Sidebar_seller from '../../Component/modules/Sidebar_seller'
import NavbarSeller from '../../Component/modules/Navbar_seller'
import axios from 'axios'

import {Link} from "react-router-dom"
import { forEach } from 'async'

export class Seller_My_Product extends Component {
  
    state ={
        products : [],
        currentPage: 1,
        productsPerPage: 5,
        isLoading:true,
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
    
      changePage = (e) =>{
        this.setState({
            [e.target.name] : parseInt(e.target.value)
        })
      }
      firstPage = () =>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: 1
            })
        }
      }
      prevPage = () =>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }  
    }
      nextPage = () =>{
        if(this.state.currentPage < Math.ceil(this.state.products.length / this.state.productsPerPage)){
            this.setState({
                currentPage: this.state.currentPage + 1 
            })
        }
      }
      lastPage = () =>{
        if(this.state.currentPage < Math.ceil(this.state.products.length / this.state.productsPerPage)){
            this.setState({
                currentPage: Math.ceil(this.state.products.length / this.state.productsPerPage)
            })
        }
    }

    sortByPriceAsc = () =>{
        let sortedProduct;
        sortedProduct = this.state.products.sort((a,b)=>{
            return parseInt(a.price) - (b.price)
        })
        this.setState({
            products:sortedProduct
        })
    }
    sortByPriceDesc = () =>{
        let sortedProduct;
        sortedProduct = this.state.products.sort((a,b)=>{
            return parseInt(b.price) - (a.price)
        })
        this.setState({
            products:sortedProduct
        })
    }
    productList= () =>{
       return this.props.history.push('/seller/my_product')
    }
    searchCange = event => {
        this.setState({search: event.target.value})
    }
    deleteProduct = (idProduct) =>{
        axios.delete("http://localhost:4000/products/"+idProduct)
          .then(response => {
              if(response.data != null){
                  alert("product deleted successfully");
                  setTimeout(() => this.productList(), 3000);
              }
          });
    };
  
    render(){
        const {products, currentPage, productsPerPage} = this.state;
        const lastIndex = currentPage * productsPerPage;
        const firstIndex = lastIndex - productsPerPage;
        const currentProducts = products.slice(firstIndex, lastIndex);
        const totalpage = products.length/productsPerPage;
    return (
        
        <div>
            <NavbarSeller />
            <Sidebar_seller />
            <div className="container">

                <div className={`card ${style.mainCard}`}>
                    <div className="head-card">
                    <h4 className={style.mineOrder}>My Product</h4>
                    </div>
                    <div className="body-card">
                    <div className={style.nav}>          
                    <ul className="nav nav-tabs">

                        <li className="nav-item">
                            <a href="#items" className="nav-link active" data-toggle="tab">All Items</a>
                        </li>
                        <li className="nav-item">
                            <a href="#soldout" className="nav-link" data-toggle="tab">Sold Out</a>
                        </li>
                        <li className="nav-item">
                            <a href="#archiv" className="nav-link" data-toggle="tab">Archived</a>
                        </li>
                    </ul>

                    <div className="tab-content">  
                    <div role="tabpanel" className="tab-pane active" id="items">  
                        <div className={`table-responsive ${style.responsive}`}>
                        <div className={`table-wrapper ${style.wrapper}`}>
                            <div className={`table-title ${style.tab_title}`}>
                                <div className="row">
                                        <div className={style.search_box}>
                                            <i className={`material-icons ${style.icon}`}>&#xE8B6;</i>
                                            <input type="text" className="form-control" value={this.search} onChange={this.searchCange}placeholder="Search&hellip;"/>
                                        </div>
                                </div> 
                            </div>
                            <table className={`table table-striped table-hover table-bordered ${style.table_hover}  ${style.table_strip}`}>
                                <thead  className={style.item_head}>
                                    <tr>
                                        
                                        <th>Product Name</th>
                                        <th>Price
                                            <button className={style.btn_sort} onClick={this.sortByPriceDesc}>
                                            <i className="fa fa-angle-up"></i>
                                            </button>
                                            <button className={style.btn_sort} onClick={this.sortByPriceAsc}>
                                            <i className="fa fa-angle-down"></i>
                                            </button>
                                        </th>
                                        <th>Stock</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {currentProducts
                                .filter((item=> item.productName.includes(this.state.search)))
                                .map((item)=>( 
                                    <tr>
                                        <td>{item.productName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td>
                                            <Link to={"/seller/edit/"+item.idProduct}>
                                            <button type="button" className="btn btn-outline-success">Edit</button>
                                            </Link>
                                            <button onClick={this.deleteProduct.bind(this, item.idProduct)}type="button" className={`btn btn-outline-danger ${style.delete}`}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                )}
                                    <tr/>
                                    
                                </tbody>
                            </table>
                            <div className={`clearfix ${style.page_wrap}`}>

                                <div className={style.hint_text}>Showing <b>{currentPage}</b> out of <b>{totalpage}</b> entries</div>
                                <ul className={`pagination ${style.Pagination}`}>

                                <button type="button" className="page-item" disabled={currentPage === 1 ? true : false} onClick={this.firstPage}>
                                    <i class="fa fa-angle-double-left"></i></button>

                                <button type="button" className="page-item" disabled={currentPage === 1 ? true : false} onClick={this.prevPage}>
                                    <i class="fa fa-angle-left"></i></button>

                                <input type="text" name="currentPage" className={style.inputText}  value={currentPage} onChange={this.changePage}/>

                                <button type="button" className="page-item" disabled={currentPage === totalpage ? true : false} onClick={this.nextPage}>
                                     <i class="fa fa-angle-right"></i></button>

                                <button type="button" className="page-item " disabled={currentPage === totalpage ? true : false} onClick={this.lastPage}>
                                    <i class="fa fa-angle-double-right"></i></button>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                        <div role="tabpanel" className="tab-pane" id="soldout"> Sold Out</div>
                        <div role="tabpanel" className="tab-pane" id="archiv"> Arcive</div>
                        </div>
                    </div>
                        
                    </div>
                    </div>
                </div>
            </div>
    )
}
}

export default Seller_My_Product


{/* <button className="page-item" ><a href="#" className="page-link">1</a></button> */}
                                    {/* <button className="page-item"><a href="#" className="page-link">2</a></button> */}
                                    {/* <button className="page-item"><a href="#" className="page-link">3</a></button> */}
                                    {/* <button className="page-item"><a href="#" className="page-link">4</a></button> */}
                                    {/* <button className="page-item"><a href="#" className="page-link">5</a></button> */}

    {/* <div role="tabpanel" className={`tab-pane active ${style.table}`} id="items"> 
                        <div className={style.searchbar}>
                            <input type="search" name="" id="" placeholder="Search"/>
                         </div> */}
                         {/* <DatatablePage products={this.state.products}/> */}
                        {/* <table className={`table ${style.tableItem}`}>
                            <thead>
                                <tr>
                                  
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.products.map((item)=>(  
                                <tr>                                    
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                  <tr>
                                        <td>
                                            <Link to={"/seller/edit/"+item.idProduct}>
                                            <button type="button" className="btn btn-outline-primary">Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={this.deleteProduct.bind(this, item.idProduct)}type="button" className="btn btn-outline-danger">Delete</button>
                                        </td>

                                 </tr>
                                </tr>
                                ))}
                            </tbody>
                            </table> */}
                        {/* </div> */}