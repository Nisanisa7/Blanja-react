import axios from "axios"
import Swal from "sweetalert2"
import { string } from "yup";

export const loginSeller = (data, history)=>(dispatch)=>{
    axios.post(`${process.env.REACT_APP_BACKEND_API}/user/login_seller`, data)
    .then((res)=>{

        const token = res.data.data.token;
        const idSeller = res.data.data.idSeller;
        const store_name = res.data.data.store_name;
        const name = res.data.data.name;
        const email = res.data.data.email;
        const phone_number = res.data.data.phone_number;
        const store_description = res.data.data.store_description;
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
        const adminData = res.data.data
        dispatch({type: 'LOGIN_SELLER', payload: adminData})
        
        localStorage.setItem('token', token);
        localStorage.setItem('idSeller', idSeller);
        localStorage.setItem('store_name', store_name);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone_number', phone_number);
        localStorage.setItem('store_description', store_description);
        localStorage.setItem('image', image);
        localStorage.setItem('role', role);
        // localStorage.setItem('status', status);
        localStorage.setItem('isAuth', isAuth);

        Swal.fire(
            'Login Success',
            'Welcome to blanja',
            'success'
          )
        history.push('/seller/profile_seller')
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'LOGIN_SELLER', payload: error.response.data.error.message })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}
export const registerSeller = (data)=>(dispatch)=>{
    axios.post(`${process.env.REACT_APP_BACKEND_API}/user/register_seller`, data)
    .then((res)=>{
        const result = res.data.data
        console.log(result);
        dispatch({type: 'REGISTER_SELLER', payload: result})
        Swal.fire(
            'Registration success!',
            'Welcome to blanja',
            'success'
        )
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'REGISTER_SELLER', payload: error.response.data.error.message })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}

export const updateSeller = (data, token, idSeller) => (dispatch) =>{
    const formData = new FormData()
    formData.append('store_name', data.store_name);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);
    formData.append('store_description', data.store_description);
    formData.append('image', data.image);
    axios.patch(`${process.env.REACT_APP_BACKEND_API}/profile/${idSeller}`, formData ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res)=>{
          const result = res.data.data
          const dataUser = {
            data: res.data.data,
            error: res.data.error,
            message: res.data.message,
            status: res.data.status,
        }
          localStorage.setItem('image', result.image)
          
            dispatch({type: string.UPDATE_SELLER, payload: dataUser})
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