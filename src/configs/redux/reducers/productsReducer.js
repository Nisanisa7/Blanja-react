import * as string from '../string'
const initialState ={
    products :[],
    loading: false,
    cart: [],
    totalPrice: 0,
    delivery: 0,
    quantity: 0
}

const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case string.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case 'REQ_GET_PRODUCT':
            return{
                ...state,
                loading: true
            }
        case string.SELECTED_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        case string.UPDATE_STOCK:
            return{
                ...state,
                products: {
                    data : {
                        ...state.products.data,
                        ...action.payload
                    }
                },
            }
        case string.ADD_TO_CART:
           const item = action.payload
    
               return {
                    ...state,
                    cart: [...state.cart, item],
                    totalPrice: state.totalPrice + action.payload.price * action.payload.amount,
                    quantity: state.quantity + action.payload.amount
               }
        case string.REMOVE_CART:
            return{
                ...state,
                cart: state.cart.filter((cart)=> cart.index !== action.payload)
            }
        case string.EMPTY_CART:
            return{
                cart: [],
                totalPrice: 0,
                delivery: 0,
                quantity: 0
            }   
       
            default:
                return state
    }
}
export default productReducer