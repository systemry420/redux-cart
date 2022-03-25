import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

function reducer(state, action) {
  if (action.type === INCREASE) {
    const { id } = action.payload;
    const newCart = state.cart.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount + 1;
        return { ...item, amount: newAmount };
      }
      return item;
    });

    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const { id, amount } = action.payload;
    let newCart = [];
    if (amount <= 1) {
        newCart = state.cart.filter(i => i.id !== id)
    } else {
      newCart = state.cart.map(item => {
        if (item.id === id) {
          const newAmount = item.amount - 1;
          return { ...item, amount: newAmount };
        }
        return item;
      });
    }

    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    console.log(action.payload);
    const { id } = action.payload;
    return { ...state, cart: state.cart.filter((i) => i.id !== id) };
  }
  return state;
}

export default reducer;
