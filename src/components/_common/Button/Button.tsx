/* eslint-disable object-shorthand */
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = (props: Props) => {
  const { children, className } = props
  return (
    <button type='button' {...props} className={`${styles.button} ${className && className}`}>
      {children}
    </button>
  )
}

export default Button
