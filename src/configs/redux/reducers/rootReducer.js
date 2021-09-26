import { combineReducers } from "redux";
import buyerReducer from './buyerReducers'
import sellerReducer from "./sellerReducer";
import productReducer from "./productsReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
  buyer : buyerReducer,
  seller : sellerReducer,
  Order : OrderReducer,
  products : productReducer
})

export default rootReducer
