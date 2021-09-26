import React from 'react'
import { Redirect, Route } from 'react-router'
import { toastify } from '../utils'

const SellerRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
        <Route {...rest} render={(props)=>{
        if(isAuth === 'true' && role === 'seller'){
            // <Component {...props}/> 
            return  <Component  {...props}/> 
        }
        else if(isAuth === 'true' && role === 'custommer'){
            return toastify("You dont have permisson to access this side", 'warning' ), <Redirect to="/home"/>
            
        }
        else{
            return <Redirect to="/login"/>
        }


        }}/>
    ) 
}

export default SellerRoute
