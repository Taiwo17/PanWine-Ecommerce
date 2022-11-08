import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import styles from './cart.module.css'
import CartItem from '../../components/CartItem'
import Button from '../../components/Button'

function Cart() {
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  const grandTotal = () => {
    let totalPrice = 0
    let totalQuantity = 0
    cart.forEach((item) => {
      totalPrice += Number(item.price.replace(/,/g, '')) * item.quantity
      totalQuantity += item.quantity
    })
    return { totalPrice, totalQuantity }
  }
  return (
    <>
      <Navbar user={'/user_login.svg'} />
      <div className={styles.container}>
        <div className={styles.content_container}>
          <h2 className={styles.cart_title}>Your Cart</h2>
          <span className={styles.span_container}>
            <span>
              <svg
                width='28'
                height='24'
                viewBox='0 0 28 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M26.8951 17.0145H8.30855L9.24178 15.2027L24.7477 15.1759C25.2721 15.1759 25.7215 14.8189 25.8152 14.325L27.9625 2.86798C28.0187 2.5675 27.9345 2.25809 27.7285 2.02306C27.6266 1.90739 27.4997 1.81421 27.3563 1.74999C27.2129 1.68578 27.0566 1.65206 26.8982 1.65117L7.17244 1.58869L7.0039 0.833023C6.89778 0.35106 6.44209 0 5.92398 0H1.10177C0.809564 0 0.529324 0.110646 0.322702 0.307598C0.116079 0.504549 0 0.771673 0 1.0502C0 1.32874 0.116079 1.59586 0.322702 1.79281C0.529324 1.98976 0.809564 2.10041 1.10177 2.10041H5.03132L5.76792 5.43845L7.58132 13.8074L5.24668 17.4399C5.12544 17.5959 5.05242 17.7811 5.03587 17.9746C5.01932 18.1681 5.05991 18.3621 5.15305 18.5348C5.34032 18.8888 5.71798 19.1119 6.13622 19.1119H8.09631C7.67844 19.641 7.45274 20.2854 7.45335 20.9476C7.45335 22.6315 8.88909 24 10.6557 24C12.4222 24 13.858 22.6315 13.858 20.9476C13.858 20.2841 13.627 19.6385 13.215 19.1119H18.2432C17.8254 19.641 17.5997 20.2854 17.6003 20.9476C17.6003 22.6315 19.036 24 20.8026 24C22.5692 24 24.0049 22.6315 24.0049 20.9476C24.0049 20.2841 23.7739 19.6385 23.3619 19.1119H26.8982C27.5037 19.1119 28 18.6419 28 18.0617C27.9982 17.7835 27.881 17.5172 27.674 17.321C27.467 17.1248 27.187 17.0147 26.8951 17.0145ZM7.63126 3.65935L25.6029 3.71588L23.8426 13.1112L9.72556 13.135L7.63126 3.65935ZM10.6557 21.8877C10.1126 21.8877 9.66938 21.4652 9.66938 20.9476C9.66938 20.4299 10.1126 20.0074 10.6557 20.0074C11.1988 20.0074 11.642 20.4299 11.642 20.9476C11.642 21.1969 11.538 21.436 11.3531 21.6123C11.1681 21.7886 10.9172 21.8877 10.6557 21.8877ZM20.8026 21.8877C20.2595 21.8877 19.8163 21.4652 19.8163 20.9476C19.8163 20.4299 20.2595 20.0074 20.8026 20.0074C21.3457 20.0074 21.7889 20.4299 21.7889 20.9476C21.7889 21.1969 21.685 21.436 21.5 21.6123C21.315 21.7886 21.0642 21.8877 20.8026 21.8877Z'
                  fill='#411530'
                />
              </svg>
            </span>
            <span>{getTotalQuantity() === 0 ? null : getTotalQuantity()}</span>
          </span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.product_container}>
        <div className={styles.product_categories}>
          <div>
            <p className={styles.product_list}>Product</p>
          </div>
          <div className={styles.categories}>
            <p className={styles.product_list}>Price</p>
          </div>
          <div className={styles.categories}>
            <p className={styles.product_list}>Quantity</p>
          </div>
          <div>
            <p className={styles.product_list}>Total</p>
          </div>
        </div>
      </div>
      <hr className={styles.hr_one} />
      {cart?.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            quantity={item.quantity}
          />
        )
      })}
      <div className={styles.grand_total}>
        <div>
          <p className={styles.delivery}>Delivery</p>
          <p className={styles.list}>${200}</p>
        </div>
        <div>
          <p className={styles.delivery}>Grand Total</p>
          <p className={styles.list}>${grandTotal().totalPrice}</p>
        </div>
      </div>
      <Button name={'Submit Order'} url={'/'} />
    </>
  )
}

export default Cart
