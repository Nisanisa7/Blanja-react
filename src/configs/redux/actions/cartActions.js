import axios from 'axios'
import { toastify } from '../../../utils'
import productReducer from '../reducers/productsReducer'
import * as string from '../string'

export const addCart = (data, amount,) => async (dispatch, getState)=>{
    const cartData = {...data, amount:amount}
    dispatch({type: string.ADD_TO_CART, payload:cartData});
    localStorage.setItem('Cart', getState().cartItem.cart)
    toastify(`${data.productName} added to cart`, 'success' )
}