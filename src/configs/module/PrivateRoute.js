import React from 'react'
import { Route, Redirect } from 'react-router'
import Navbar from '../../Component/modules/navbar'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    return (
        <Route {...rest} render={(props)=>{
            return(
                isAuth ?
                (
                <>
                {/* <Navbar/> */}
                <Component {...props}/> 
                </>
                ): <Redirect to="/login" />
                )
            
        }}/>
    )
}

export default PrivateRoute
