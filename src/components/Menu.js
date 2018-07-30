import React from 'react'

const Menu = ({ handleMenu }) => {

  const hover = (e) => {
    const hovered = e.target
    const siblings = Array.from(e.target.parentElement.children).filter(x => x.id !== hovered.id)
    siblings.forEach(x => x.style = `transform: scale(0.8, 0.8)`)
    hovered.style = `background-color: white;`
  }

  const stop = (e) => {
    const hovered = e.target
    const siblings = Array.from(e.target.parentElement.children).filter(x => x.id !== hovered.id)
    siblings.forEach(x => x.style = `transform: scale(1, 1)`)
    hovered.style = `background-color: pink;`
  }

  return (
    <ul className="menu">
      <li id='home' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Home</li>
      <li id='shelves' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Shelves</li>
      <li id='signup' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Sign Up</li>
      <li id='login' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log In</li>
      <li id='logout' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log Out</li>
    </ul>
  )
}

export default Menu
