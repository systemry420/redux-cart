import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from 'redux'
// import reducer from "./reducer";
import { Provider } from "react-redux";
import CounterContainer from "./components/counter/CounterContainer";
import countReducer, { countState } from "./countReducer";
import { catsReducer, initState } from './typescript/reducer'

import CatsHome from "./typescript/CatsHome";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const store = createStore(catsReducer, initState)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CatsHome />
      {/* <CartContainer /> */}
      {/* <CounterContainer /> */}
    </Provider>
  );
}

export default App;
