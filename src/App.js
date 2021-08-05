import React, { Component } from "react";
import Home from './Pages/Home'
import Home_bf_login from "./Pages/Home_bf_login";
import Product from "./Pages/Detail_product";
import CheckOut from "./Pages/Checkout";


// import About from './pages/About'
// import Detail from './pages/Detail'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reset_password_seller from "./Pages/Reset_pass_seller";
import Confirm_pass_seller from "./Pages/Password_confirm_seller";
import Login_confirmation from "./Pages/Login_confirm_seller";
import Bag from "./Pages/Mybag";


import Login_User from "./Pages/Login_User";
import Register_User from "./Pages/Register_User";
import Request_password from "./Pages/Request_pass_customer";
import Login_confirmation_buyer from "./Pages/Login_confirm_Buyer";
import Confirm_pass_custommer from "./Pages/password_confirm_cust";



//------------------ Profile seller =------------------
import Profile_seller from "./Pages/Profile_seller";
import Selling_product from "./Pages/Seller_Selling_Product";
import Seller_My_Product from "./Pages/Seller_My_Products";
import EditProduct from "./Pages/Edit_produk";
import Myorder_seller from "./Pages/Seller_My_Order";
import CancelOrder_seller from "./Pages/Seller_Order_cancel";

import CustommerEmail from "./Pages/Email_Page";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResetPasswordCust from "./Pages/resetPass_user";


class App extends Component {
  constructor() {
    super();
    console.log("ini method constructor");
    // this.state = {
    //   name : 'nisa',
    //   umur: 17,
    //   password:''
    // }
  }

  compoponentDidMount() {
    console.log("ini method component didmount");
  }
  compoponentdidUpdate() {
    console.log("ini method component didUpdate");
  }
  compoponentWillUnmount() {
    console.log("ini method component WillUnmount");
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home_bf_login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/product/:id" component={Product}/>
          <Route exact path="/checkout" component={CheckOut}/>
          <Route exact path="/my_bag" component={Bag}/>



          {/* <Route path="/about" component={About}/>
          <Route path="/detail" component={Detail}/> */}

          {/* ==================== AUTH ROUTER ======================================= */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset_password" component={Reset_password_seller} />
          <Route path="/Confirmation" component={Confirm_pass_seller} />
          <Route path="/login_Confirmation" component={Login_confirmation} />

          <Route path="/login_user" component={Login_User} />
          <Route path="/register_customer" component={Register_User} />
          <Route path="/reset_password_custommer" component={ResetPasswordCust} />
          <Route path="/login_confirm" component={Login_confirmation_buyer}/>
          <Route path="/passConfirmation_cust" component={Confirm_pass_custommer}   />
          <Route path="/request_password" component={Request_password} />

          
          {/* ========================================================================= */}

          {/* ===================== SELLER ROUTER ======================================= */}
          <Route path="/seller/profile_seller" component={Profile_seller} />
          <Route path="/seller/selling_product" component={Selling_product} />
          <Route path="/seller/my_product" component={Seller_My_Product} />
          <Route path="/seller/edit/:id" component={EditProduct} />
          <Route path="/seller/my_order" component={Myorder_seller} />
          <Route path="/seller/cancel_order" component={CancelOrder_seller} />

          {/* =========================================================================== */}
          <Route path="/activation_custommer" component={CustommerEmail} />

        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
