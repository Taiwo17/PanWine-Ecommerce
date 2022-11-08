import React from 'react'
import styles from './cartitem.module.css'
import {
  incrementQuantity,
  decrementQuantity,
  removeQuantity,
} from '../redux/cartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function CartItem({ id, img, price, title, quantity }) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const pQty = () => {
    cart.forEach((item) => {
      const { price, quantity } = item
      let conNum = Number(price.replace(/,/g, '')) * quantity
      console.log(conNum)
    })
  }
  pQty()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src={img} alt='' />
          <div>
            <p className={styles.product_title}> {title} </p>
            <p
              className={styles.remove}
              onClick={() => dispatch(removeQuantity(id))}
            >
              Remove
            </p>
          </div>
        </div>
        <div className={styles.price_tag}>
          <p className={styles.product_title}> ${price} </p>
        </div>
        <div className={styles.btn_tag}>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity} </p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <div>
          <p className={styles.product_title}>
            ${Number(price.replace(/,/g, '')) * quantity}
          </p>
        </div>
      </div>
    </>
  )
}

export default CartItem
