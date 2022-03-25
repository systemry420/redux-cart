import { DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
  if (action.type === INCREASE) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREASE) {
    return { count: state.count - 1 };
  }
  return state;
}

export default reducer
