import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h2 className={styles.panwines}>PanWines</h2>
        <p className={styles.content}>
          Get the Tastefulness & Elegance of a Best Wine
        </p>
      </div>
      <div className={styles.footer_section}>
        <div className={styles.home_section}>
          <div>
            <p>HomePage</p>
            <p>Home</p>
            <p>Authentication</p>
            <p>Product</p>
            <p>Shopping</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Panwine@gmail.com</p>
            <p>www.Panwine.com</p>
            <p>+2347069261648</p>
          </div>
        </div>
        <button>Explore Products</button>
      </div>
    </div>
  )
}

export default Footer
