import React, { useState } from 'react'
import styles from './input.module.css'

function Input() {
  const [value, setValue] = useState({
    fPlaceholder: 'Search name',
    sPlaceholder: 'Search Categories',
  })
  const handleChange = (e) => {
    setValue({ ...value, fPlaceholder: e.target.value })
  }

  return (
    <section className={styles.container}>
      <div className={styles.input_container}>
        <input
          className={styles.input_group}
          type='text'
          value={value.fPlaceholder}
          placeholder={value}
          onChange={handleChange}
        />
        <svg
          className={styles.svg_icon}
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </div>
      <div className={styles.input_container}>
        <input
          className={styles.input_group}
          type='text'
          value={value.sPlaceholder}
          placeholder={value}
          onChange={handleChange}
        />
        <svg
          className={styles.svg_icon}
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </div>
    </section>
  )
}

export default Input
