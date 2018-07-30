import React from 'react'

const Menu = ({ handleMenu }) => {
  return (
    <ul className="menu">
      <li className="menu-item">Home</li>
      <li className="menu-item">Shelves</li>
      <li className="menu-item">Sign Up</li>
      <li className="menu-item">Log In</li>
      <li className="menu-item">Log Out</li>
    </ul>
  )
}

export default Menu
