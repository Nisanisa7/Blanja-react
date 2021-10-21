import axios from "axios"
import Swal from "sweetalert2";
import * as string from '../string'

export const loginBuyer = (data, history) => (dispatch)=>{

    axios.post(`${process.env.REACT_APP_BACKEND_API}/user/login_buyer`, data)
    .then((res)=>{
    

        const token = res.data.data.token;
        const idCustommer = res.data.data.idCustommer;
        const name = res.data.data.name;
        const email = res.data.data.email;
        const phone_number = res.data.data.phone_number;
        const gender = res.data.data.gender;
        const address = res.data.data.address;
        const datebirth = res.data.data.datebirth;
        const image = res.data.data.image;
        const role = res.data.data.role;
        // const status = res.data.data.status;
        const isAuth = true;

        // if(status === 'inactive'){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Boo Boo',
        //         text: 'Please activate your account first!',
        //       })
        //       return 
        // }
        const userData = res.data.data
        // console.log(result);
        dispatch({type: 'LOGIN_BUYER', payload: userData})
        localStorage.setItem('token', token);
        localStorage.setItem('idCustommer', idCustommer);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone_number', phone_number);
        localStorage.setItem('gender', gender);
        localStorage.setItem('address', address);
        localStorage.setItem('datebirth', datebirth);
        localStorage.setItem('image', image);
        localStorage.setItem('isAuth', isAuth);
        localStorage.setItem('role', role);
        // localStorage.setItem('status', status);
        Swal.fire(
            'Login Success',
            'Welcome to blanja',
            'success'
          )
        history.push('/home')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'LOGIN_BUYER', payload: error.response.data.error.message })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}

export const RegisterBuyer = (data, history)=>(dispatch)=>{
    axios.post(`${process.env.REACT_APP_BACKEND_API}/user/register_buyer`, data)
    .then((res)=>{
        const result = res.data.data
        console.log(result);
        dispatch({type: 'REGISTER_BUYER', payload: result})
        Swal.fire(
          'Registration success!',
          'Welcome to blanja',
          'success'
        )
        history.push('/login_user')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'REGISTER_BUYER', payload: error.response.data.error.message })
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.error.message,
        })
    })
}

export const updateProfileBuyer = (data, idCustommer, token) => (dispatch) =>{
    const formData = new FormData()
    console.log(data);
    formData.append('name', data.name);
    formData.append('phone_number', data.phone_number);
    formData.append('gender', data.gender);
    formData.append('datebirth', data.datebirth);
    formData.append('image', data.image);
  
    axios.put(`${process.env.REACT_APP_BACKEND_API}/profile/update/${idCustommer}`, formData ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((res)=>{
        const resData = res.data.data
        console.log(resData, 'ini data user');
        localStorage.setItem('image',resData.image)
        localStorage.setItem('name',resData.name)
        dispatch({type: string.UPDATE_BUYER, payload: resData})
        Swal.fire(
            'Update Success',
            'update profile success',
            'success'
          )
    })
    .catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response?.data?.message,
          })
    })

}

export const UpdateAddress = (data, idCustommer, token) => (dispatch) =>{

    axios.put(`${process.env.REACT_APP_BACKEND_API}/profile/address/${idCustommer}`, data ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res)=>{
        console.log(res);
        localStorage.setItem('address', data.address)
        dispatch({type: string.UPDATE_ADDRESS, payload: data})
        Swal.fire(
            'Update Success',
            'update address success',
            'success'
          )
    })
    .catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response?.data?.message,
          })
    })
}