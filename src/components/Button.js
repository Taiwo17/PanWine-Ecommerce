import React from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'
function Button({ name, url }) {
  return (
    <div className={styles.btn_class}>
      <button className={styles.btn}>
        <Link to={url} className={styles.link}>
          {name}
        </Link>
      </button>
    </div>
  )
}

export default Button
