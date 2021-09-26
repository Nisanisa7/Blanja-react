import React from 'react'
import { Redirect, Route } from 'react-router'

const CustommerRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
        <Route {...rest} render={(props)=>{
        if(isAuth === 'true' && role === 'custommer'){
            // <Component {...props}/> 
            return  <Component  {...props}/> 
        }
        else if(isAuth === 'true' && role === 'seller'){
            return <Redirect to="/seller/profile_seller"/>
        }
        else{
            return <Redirect to="/login"/>
        }


        }}/>
    ) 
}

export default CustommerRoute
