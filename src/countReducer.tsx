export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const RESET = 'RESET'

export const countState = {
    count: 0
  }

// action creators
export function increase() {
  return {
    type: INCREASE
  };
}

export function decrease() {
  return {
    type: DECREASE
  };
}

export function reset(value: any) {
    console.log(value);
    return {
        type: RESET,
        payload: value
    }
}

const countReducer = (state = countState, action: { type: any; payload: string | number; }) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: +state.count + 1 };

    case DECREASE:
      return { ...state, count: +state.count - 1 };

    case RESET:
        console.log(action);
        return {...state, count: +action.payload}

    default:
      return state
  }
};

export default countReducer;
