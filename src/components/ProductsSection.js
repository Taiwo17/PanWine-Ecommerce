import React from 'react'
import { Link } from 'react-router-dom'
import { products } from './data'
import styles from './productssection.module.css'
import { useDispatch } from 'react-redux'
import { addToCarts } from '../redux/cartSlice'

function ProductsSection() {
  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.product_name}>Product</h3>
        <div className={styles.product_section}>
          {products.map((product) => {
            const { id, title, price, img, addToCart } = product
            return (
              <div key={id}>
                <div>
                  <img className={styles.product_img} src={img} alt='' />
                </div>
                <div>
                  <p className={styles.title}>{title} </p>
                  <p className={styles.price}> #{price}</p>
                  <button
                    onClick={() => {
                      console.log(
                        dispatch(addToCarts({ id, img, price, title }))
                      )
                    }}
                    className={styles.btn}
                  >
                    {addToCart}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.view_more}>
        <Link className={styles.view}>
          View More
          <svg
            width='10'
            height='18'
            viewBox='0 0 10 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 17L9 9L1 0.999998' fill='#411530' fillOpacity='0.6' />
            <path
              d='M1 17L9 9L1 0.999998'
              stroke='#4169E1'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
    </>
  )
}

export default ProductsSection
