import { combineReducers } from "redux";
import buyerReducer from './buyerReducers'
import cartReducer from "./cartReducer";
import sellerReducer from "./sellerReducer";
// import productReducer from "./productsReducer";

const rootReducer = combineReducers({
  buyer : buyerReducer,
  seller : sellerReducer,
  cart : cartReducer
  // product : productReducer
})

export default rootReducer
