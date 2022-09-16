import React from 'react'
import './button.css'
function Button({onClick}) {
  return (
    <div>
        <button className='buton' onClick={onClick}> Log in</button>
    </div>
  )
}

export default Button