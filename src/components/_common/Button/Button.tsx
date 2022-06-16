/* eslint-disable object-shorthand */
import { cx } from 'styles'
import styles from './Button.module.scss'

interface IButtonProp {
  id: string
  text: string
  onClick: () => void
  color?: string
  bgColor?: string
  absolute?: boolean
  top?: string
  left?: string
  right?: string
  bottom?: string
}

const Button = ({ id, text, onClick, color, bgColor, absolute, top, left, right, bottom }: IButtonProp) => {
  return (
    <button
      type='button'
      onClick={onClick}
      id={id}
      className={cx(styles.button)}
      style={{
        backgroundColor: bgColor,
        color: color,
        position: absolute ? 'absolute' : 'static',
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
    >
      {text}
    </button>
  )
}

export default Button
