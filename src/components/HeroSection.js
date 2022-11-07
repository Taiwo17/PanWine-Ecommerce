import React from 'react'
import styles from './herosection.module.css'
import Input from './Input'

function HeroSection() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Tastefulness & Elegance of a Best Wine</h2>
          <p>Browse our collection to find that delectable taste you desire</p>
          <button>Explore Products</button>
        </div>
      </div>
      <Input />
    </>
  )
}

export default HeroSection
