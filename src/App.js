import React, { Component } from "react";
import Home from './Pages/Home'
import Home_bf_login from "./Pages/Home_bf_login";
import Product from "./Pages/Detail_product";
import CheckOut from "./Pages/Checkout";


// import About from './pages/About'
// import Detail from './pages/Detail'
import Login from "./Pages/auth-seller/Login";
import Register from "./Pages/auth-seller/Register";
import Reset_password_seller from "./Pages/auth-seller/Reset_pass_seller";
import Confirm_pass_seller from "./Pages/auth-seller/Password_confirm_seller";
import Login_confirmation from "./Pages/auth-seller/Login_confirm_seller";
import Bag from "./Pages/Mybag";

// --auth custommer
import Login_User from "./Pages/auth-custommer/Login_User";
import Register_User from "./Pages/auth-custommer/Register_User";
import Request_password from "./Pages/auth-custommer/Request_pass_customer";
import Login_confirmation_buyer from "./Pages/auth-custommer/Login_confirm_Buyer";
import Confirm_pass_custommer from "./Pages/auth-custommer/password_confirm_cust";



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
import PrivateRoute from "./configs/module/PrivateRoute";
import ProfileCustommer from "./Pages/profile_Custommer";
import Resultpage from "./Pages/ResultPage";
import PublicRoute from "./Route/PublicRoute";
import CustommerRoute from "./Route/CustommerRoute";
import SellerRoute from "./Route/SellerRoute";
import ProfileAddress from "./Pages/ProfileAddress";
import ProfileMyOrder from "./Pages/ProfileMyOrder";



class App extends Component {
  constructor() {
    super();
    console.log("ini method constructor");
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
          <PublicRoute exact path="/" component={Home_bf_login}/>
          <PrivateRoute exact path="/home" component={Home}/>
          <CustommerRoute exact path="/product/:id" component={Product}/>
          <CustommerRoute exact path="/checkout" component={CheckOut}/>
          <CustommerRoute exact path="/my_bag" component={Bag}/>



          {/* <Route path="/about" component={About}/>
          <Route path="/detail" component={Detail}/> */}

          {/* ==================== AUTH ROUTER ======================================= */}
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/reset_password" component={Reset_password_seller} />
          <PublicRoute path="/Confirmation" component={Confirm_pass_seller} />
          <PublicRoute path="/login_Confirmation" component={Login_confirmation} />

          <PublicRoute path="/login_user" component={Login_User} />
          <PublicRoute path="/register_customer" component={Register_User} />
          <PublicRoute path="/reset_password_custommer" component={ResetPasswordCust} />
          <PublicRoute path="/login_confirm" component={Login_confirmation_buyer}/>
          <PublicRoute path="/passConfirmation_cust" component={Confirm_pass_custommer}   />
          <PublicRoute path="/request_password" component={Request_password} />

          <Route path={`/search`} component={Resultpage}/>
          
          {/* ========================================================================= */}

          {/* ===================== SELLER ROUTER ======================================= */}
          <SellerRoute path="/seller/profile_seller" component={Profile_seller} />
          <SellerRoute path="/seller/selling_product" component={Selling_product} />
          <SellerRoute path="/seller/my_product" component={Seller_My_Product} />
          <SellerRoute path="/seller/edit/:id" component={EditProduct} />
          <SellerRoute path="/seller/my_order" component={Myorder_seller} />
          <SellerRoute path="/seller/cancel_order" component={CancelOrder_seller} />

          {/* =========================================================================== */}
          <Route path="/activation_custommer" component={CustommerEmail} />
          <CustommerRoute path="/profile" component={ProfileCustommer}/>
          <CustommerRoute path="/profile-address" component={ProfileAddress}/>
          <CustommerRoute path="/profile-myorder" component={ProfileMyOrder}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
