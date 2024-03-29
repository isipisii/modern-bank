import React from 'react'

const Button = (props) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none ${props.styles} rounded-lg`}>
      Get Started
    </button>
  )
}

export default Button