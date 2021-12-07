import React from 'react'
import './CSS/Button.css'

const Button = ({ ...rest }) => {

  const { children, size, color, width, handleClick, disabled } = rest

  return (
          <button
            className={`Button ${size} ${color} ${width}`}
            onClick={handleClick} disabled={disabled}>
              {children}
          </button>
  )
}

export default Button;

Button.defaultProps = {
  size: 'medium',
  color: 'tomato',
  disabled: false
}