import React, { useContext, useState, useReducer, useEffect } from 'react'
import Data from './Data'
import Reducer from './Reducer';

const AppContext = React.createContext()

const initialState = {
  cart: Data,
  qty: 0,
  total: 0
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(()=>{
    dispatch({type:'GET_TOTALS'})
  },[state.cart])

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
