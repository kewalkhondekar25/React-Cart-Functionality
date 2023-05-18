import React from 'react'

const Reducer = (state, action) => {
  //clearing cart
  if (action.type === 'CLEAR_CART') {
    return ({ ...state, cart: [] })
  }
  //removing specific item
  if (action.type === 'REMOVE') {
    return ({ ...state, cart: state.cart.filter((cartItems) => cartItems.id !== action.payload) })
  }
  //increasing count
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload) {
        return ({ ...cartItems, qty: cartItems.qty + 1 })
      }
      return (cartItems)
    });
    return ({ ...state, cart: tempCart })
  }
  //decreasing count
  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload) {
        return ({ ...cartItems, qty: cartItems.qty - 1 })
      }
      return (cartItems)
    }).filter((cartItems) => cartItems.qty !== 0)
    return ({ ...state, cart: tempCart })
  }
  //get total; here, kewal = returing || kewal2 = representing elm, we're iterating 
  if (action.type === 'GET_TOTALS') {
    const { total, qty } = state.cart.reduce((kewal, kewal2) => {
      const { price, qty } = kewal2
      const itemTotal = price * qty

      kewal.qty += qty
      kewal.total += itemTotal
      return kewal
    },
      { total: 0, qty: 0 })
    return ({ ...state, total, qty })
  }
  return (state)
}

export default Reducer;
