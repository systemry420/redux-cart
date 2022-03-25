import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

function reducer(state, action) {
  if (action.type === INCREASE) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREASE) {
    return { count: state.count - 1 };
  }

  if (action.type === CLEAR_CART) {
      return { ...state, cart: []}
  }

  if (action.type === REMOVE) {
      console.log(action.payload);
    const { id } = action.payload
    return { ...state, cart: state.cart.filter(i => i.id !== id)}
  }
  return state;
}

export default reducer
