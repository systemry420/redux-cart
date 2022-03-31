import { CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT, REMOVE } from "./actions";

// function reducer(state = {cart:[]}, action) {
//   if (action.type === TOGGLE_AMOUNT) {
//     const { id, toggleValue } = action.payload;
//     let newCart = [];

//     newCart = state.cart.map((item) => {
//       if (item.id === id) {
//         if (toggleValue === 'inc') {
//             return { ...item, amount: item.amount + 1 };
//         } else {
//             return { ...item, amount: item.amount - 1 };
//         }
//       }
//       return item;
//     });

//     return { ...state, cart: newCart };
//   }

//   if (action.type === CLEAR_CART) {
//     return { ...state, cart: [] };
//   }

//   if (action.type === REMOVE) {
//     const { id } = action.payload;
//     return { ...state, cart: state.cart.filter((i) => i.id !== id) };
//   }

//   if (action.type === GET_TOTALS) {
//     const { total, amount } = state.cart.reduce(
//       (cartTotal, item) => {
//         const { price, amount } = item;
//         cartTotal.amount += amount;
//         cartTotal.total += price * amount;
//         return cartTotal;
//       },
//       {
//         total: 0,
//         amount: 0,
//       }
//     );

//     return { ...state, amount, total };
//   }
//   return state;
// }

// export default reducer;
