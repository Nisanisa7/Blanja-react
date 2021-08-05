import axios from "axios"
import { toast } from 'react-toastify';

export const loginBuyer = (data, history) => (dispatch)=>{

    axios.post('http://localhost:4000/v1/user/login_buyer', data)
    .then((res)=>{
        const result = res.data.data
        localStorage.setItem('token', result.token)
        // const token = localStorage.getItem("token") cara manggil token
        console.log(result);
        dispatch({type: 'LOGIN_BUYER', payload: result})
        alert('Welcome to blanja')
        history.push('/home')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'LOGIN_BUYER', payload: error.response.data.error.message })
        alert(error.response.data.error.message)
    })
    // .catch(error)=>{
    // alert('passw')
    // console.log(error.response);
    // dispatch({type: 'LOGIN_BUYER', payload: error.response.data.error.message })
    // alert(error.response.data.error.message)
    // }
}

export const RegisterBuyer = (data, history)=>(dispatch)=>{
    axios.post('http://localhost:4000/v1/user/register_buyer', data)
    .then((res)=>{
        const result = res.data.data
        console.log(result);
        dispatch({type: 'REGISTER_BUYER', payload: result})
        alert('Registration success! check your email for activation')
        history.push('/login_user')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'REGISTER_BUYER', payload: error.response.data.error.message })
        alert(error.response.data.error.message)
    })
}