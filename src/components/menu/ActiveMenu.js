import React from 'react'

const ActiveMenu = ({ handleMenu }) => {
  return (
    <ul className="active-menu" onMouseLeave={handleMenu}>
      <li className="menu-item">Home</li>
      <li className="menu-item">Shelves</li>
      <li className="menu-item">Sign Up</li>
      <li className="menu-item">Log In</li>
      <li className="menu-item">Log Out</li>
    </ul>
  )
}

export default ActiveMenu
