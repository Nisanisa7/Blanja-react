import * as string from '../string'
const initialState ={
    products :[],
    loading: false,
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
            default:
                return state
    }
}
export default productReducer