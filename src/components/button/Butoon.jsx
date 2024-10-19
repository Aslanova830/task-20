import React from 'react'
import './button.style.css'


const Butoon = ({
  children,onClick,className
}) => {
  return (
   <button onClick={onClick} className={`btn ${className}`}>
    (children)
   </button>
  )
}

export default Butoon
