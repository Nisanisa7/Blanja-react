import axios from 'axios'
import { toastify } from '../../../utils'
import * as string from '../string'

export const getProduct = () => (dispatch)=>{
    dispatch({type: 'REQ_GET_PRODUCT'})
    axios.get(`${process.env.REACT_APP_BACKEND_API}/products`)
    .then((res)=>{

        const result = res.data.item
        dispatch({type: string.GET_PRODUCTS, payload: result})
    })
}

export const getSelectedProduct = (id, data) =>(dispatch) =>{
    axios.get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`)
    .then((res)=>{

        const result = res.data.data[0]
        console.log('action getbyid',result);
        data(result)
        // dispatch({type: string.SELECTED_PRODUCTS, payload: result})
    })
    .catch((err)=>{
        console.log(err);
    })
}
export const updateStock = (data, id) => (dispatch) =>{
    console.log(data, 'result data');
    axios.patch(`${process.env.REACT_APP_BACKEND_API}/products/${id}`, data)
    .then((res)=>{
        const result = res.data.data
        console.log('action update',result);
        dispatch({type: string.UPDATE_STOCK, payload: result})

    })
    .catch((err)=>{
        console.log(err);
    })
}
export const addCart = (data, amount,) => async (dispatch, getState)=>{
    const cartData = {...data, amount:amount}
    console.log(cartData, 'ini datacart');
    // console.log(cartData.idProduct, 'data cart');
    // {cartData.idProduct === cartData.idProduct ? amount:amount+1}
    dispatch({type: string.ADD_TO_CART, payload:cartData});
    if(getState().products.cart === cartData.idProduct){
    
    }
    localStorage.setItem('Cart', JSON.stringify(getState().products.cart))
    toastify(`${data.productName} added to cart`, 'success' )
}
export const deleteItem = (index) => (dispatch,  getState) => {
    console.log(index);
    dispatch({type: string.REMOVE_CART,payload: index})
    localStorage.setItem('cart',  JSON.stringify(getState().products.cart))
 }