import React from 'react'
import { Link } from 'react-router-dom'
import styles from './signup.module.css'

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src='/images/login.png' alt='' />
        <p className={styles.pan_text}>PanWines</p>
      </div>
      <div className={styles.text_container}>
        <h2 className={styles.panwine_text}>Create an Account</h2>
        <div className={styles.input_group}>
          <div className={styles.input_container_one}>
            <input
              className={styles.input_link}
              type='text'
              name=''
              id=''
              placeholder='Full Name'
            />
          </div>
          <div className={styles.input_container_one}>
            <input
              className={styles.input_link}
              type='number'
              name=''
              id=''
              placeholder='Phone Number'
            />
          </div>
          <div className={styles.input_container_one}>
            <input
              className={styles.input_link}
              type='Email'
              name=''
              id=''
              placeholder='Email Address'
            />
          </div>
          <div className={styles.input_container}>
            <input
              className={styles.input_link}
              type='password'
              name=''
              id=''
              placeholder='Password'
            />
            <svg
              className={styles.visibility}
              width='20'
              height='16'
              viewBox='0 0 20 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.8675 7.5903C19.0612 6.053 18.1017 4.79925 16.9889 3.82905L15.8219 4.88519C16.7735 5.70822 17.6025 6.78491 18.3193 8.12584C16.4109 11.7003 13.702 13.3982 9.99999 13.3982C8.88876 13.3982 7.86523 13.2434 6.9294 12.9337L5.66488 14.078C6.96465 14.6212 8.40968 14.8928 9.99999 14.8928C14.4085 14.8928 17.6977 12.8149 19.8675 8.65931C19.9548 8.49218 20 8.30964 20 8.1248C20 7.93997 19.9548 7.75743 19.8675 7.5903ZM18.4094 0.934631L17.4316 0.048703C17.4146 0.0332634 17.3943 0.0210151 17.372 0.0126583C17.3498 0.00430142 17.3259 0 17.3018 0C17.2777 0 17.2538 0.00430142 17.2315 0.0126583C17.2092 0.0210151 17.189 0.0332634 17.172 0.048703L14.6633 2.31791C13.2802 1.67858 11.7258 1.35891 9.99999 1.35891C5.59148 1.35891 2.3023 3.43673 0.132451 7.59238C0.0452334 7.75951 0 7.94205 0 8.12688C0 8.31171 0.0452334 8.49425 0.132451 8.66138C0.99932 10.3137 2.04296 11.6381 3.26336 12.6346L0.836161 14.8305C0.801775 14.8616 0.782458 14.9039 0.782458 14.9479C0.782458 14.9919 0.801775 15.0341 0.836161 15.0653L1.81535 15.9514C1.84975 15.9825 1.89641 16 1.94505 16C1.9937 16 2.04035 15.9825 2.07476 15.9514L18.4094 1.16961C18.4265 1.15418 18.44 1.13587 18.4492 1.11571C18.4585 1.09555 18.4632 1.07394 18.4632 1.05212C18.4632 1.0303 18.4585 1.00869 18.4492 0.988527C18.44 0.968368 18.4265 0.950053 18.4094 0.934631ZM1.6807 8.12584C3.59136 4.55141 6.30023 2.85345 9.99999 2.85345C11.251 2.85345 12.3884 3.04774 13.4204 3.44275L11.8079 4.902C11.0442 4.53327 10.1699 4.39643 9.31372 4.51165C8.45759 4.62687 7.66505 4.98806 7.05301 5.54194C6.44098 6.09581 6.04186 6.81304 5.91454 7.58782C5.78722 8.3626 5.93843 9.15389 6.34588 9.84497L4.43247 11.5766C3.37346 10.7307 2.46057 9.58468 1.6807 8.12584ZM7.33928 8.12584C7.33969 7.75981 7.43549 7.39903 7.61891 7.07281C7.80234 6.74658 8.0682 6.46412 8.39492 6.24835C8.72164 6.03258 9.09999 5.8896 9.49924 5.83103C9.89849 5.77245 10.3074 5.79993 10.6927 5.91123L7.46108 8.83575C7.38008 8.60625 7.33899 8.36676 7.33928 8.12584Z'
                fill='#411530'
              />
            </svg>
          </div>
        </div>
        <div className={styles.forget}>
          <p className={styles.forget_text}>
            <Link className={styles.reset} to='/reset'>
              Forgot Password
            </Link>
          </p>
        </div>
        <div className={styles.btn_group}>
          <button>
            <Link className={styles.link}> Create Account</Link>
          </button>
        </div>

        <div className={styles.create_account}>
          <p>OR</p>
          <button>
            <img src='/images/google_icon.png' alt='' />
            <Link className={styles.link_create}> Sign up with Google</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
