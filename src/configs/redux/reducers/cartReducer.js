import * as string from "../string";
const initialState = {
  cart: [],
  totalPrice: 0,
  delivery: 0,
  quantity: 0,
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.ADD_TO_CART:
      const item = action.payload;
      return {
        ...state,
        cart: [...state.cart, item],
        totalPrice: state.totalPrice + action.payload.price * action.payload.amount,
        quantity: state.quantity + action.payload.amount,
      };
    case string.EMPTY_CART:
      return {
        cart: [],
        totalPrice: 0,
        delivery: 0,
        quantity: 0,
      };
    default:
      return state;
  }
};

export default CartReducer;
