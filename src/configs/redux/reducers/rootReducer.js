import { combineReducers } from "redux";
import buyerReducer from './buyerReducers'
import sellerReducer from "./sellerReducer";
import productReducer from "./productsReducer";
import OrderReducer from "./OrderReducer";
import CartReducer from './cartReducer'

export function CLEARSTORE(){
  return {
      type:"CLEARSTORE"
  };
}
const rootReducer = combineReducers({

  buyer : buyerReducer,
  seller : sellerReducer,
  Order : OrderReducer,
  products : productReducer,
  cartItem : CartReducer, 
})

export default rootReducer
