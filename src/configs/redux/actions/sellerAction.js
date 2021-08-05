import axios from "axios"

export const loginSeller = (data, history)=>(dispatch)=>{
    axios.post('http://localhost:4000/v1/user/login_seller', data)
    .then((res)=>{
        const result = res.data.data
        localStorage.setItem('token', result.token)
        // const token = localStorage.getItem("token") cara manggil token
        console.log(result);
        dispatch({type: 'LOGIN_SELLER', payload: result})
        alert('Welcome to blanja')
        history.push('/seller/profile_seller')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'LOGIN_SELLER', payload: error.response.data.error.message })
        alert(error.response.data.error.message)
    })
}
export const registerSeller = (data)=>(dispatch)=>{
    axios.post('http://localhost:4000/v1/user/register_seller', data)
    .then((res)=>{
        const result = res.data.data
        console.log(result);
        dispatch({type: 'REGISTER_SELLER', payload: result})
        alert('Registration success! check your email for activation')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'REGISTER_SELLER', payload: error.response.data.error.message })
        alert(error.response.data.error.message)
    })
}