import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')
    const role = localStorage.getItem('role')
    return (
       <Route
       {...rest} render={(props)=>{
        if (!isAuth) {
            return <Component {...props}/>
        }
        else if (isAuth === 'true' && role === 'custommer'){
            return <Redirect to={'/home'}/>
        }
        else if (isAuth === 'true' && role ==='seller'){
            return <Redirect to={'/seller/profile_seller'}/>
        }
       }}
    
       
       
       />
    )
}

export default PublicRoute
