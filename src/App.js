import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from 'redux'
import reducer from "./reducer";
import { Provider } from "react-redux";
import CounterContainer from "./components/CounterContainer";
import countReducer, { countState } from "./countReducer";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const store = createStore(countReducer, countState)

function App() {
  return (
    <Provider store={store}>
      {/* <Navbar /> */}
      {/* <CartContainer /> */}
      <CounterContainer />
    </Provider>
  );
}

export default App;
