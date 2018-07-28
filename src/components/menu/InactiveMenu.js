import React from 'react'

const InactiveMenu = ({ handleMenu }) => {
  return (
    <div className='inactive-menu' onMouseEnter={handleMenu}>
      InactiveMenu
    </div>
  )
}

export default InactiveMenu
