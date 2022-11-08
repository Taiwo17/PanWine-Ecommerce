import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../../components/EmptyCart'
import Cart from './Cart'

function CartDisplay() {
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  return <>{getTotalQuantity() === 0 ? <EmptyCart /> : <Cart />}</>
}

export default CartDisplay
