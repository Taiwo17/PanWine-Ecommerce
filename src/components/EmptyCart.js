import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import styles from './emptycart.module.css'
function EmptyCart() {
  return (
    <>
      <Navbar user={'/user_login.svg'} />
      <div className={styles.empty_cart}>
        <h2>Your Shopping Cart is Empty</h2>
        <p>Explore our product page to add item(s) to your cart</p>
      </div>
      <Button name={'Explore Product'} url={'/'} />
    </>
  )
}

export default EmptyCart
