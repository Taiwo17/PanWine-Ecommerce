import { createSlice } from '@reduxjs/toolkit'

//A function that accepts an initial state, an object of reducer functions,
//and a "slice name", and automatically generates action creators and action
//types that correspond to the reducers and state.
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  },
  reducers: {
    addToCarts: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      itemInCart
        ? itemInCart.quantity++
        : state.cart.push({ ...action.payload, quantity: 1 })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeQuantity: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
})

export const cartReducer = cartSlice.reducer
export const {
  addToCarts,
  incrementQuantity,
  decrementQuantity,
  removeQuantity,
} = cartSlice.actions
