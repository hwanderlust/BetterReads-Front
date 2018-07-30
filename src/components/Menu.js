import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to='/home' id='home' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)}>Home</Link>
      <Link to='/shelves' id='shelves' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Shelves</Link>
      <Link to='/signup' id='signup' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Sign Up</Link>
      <Link to='/login' id='login' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log In</Link>
      <Link to='/logout' id='logout' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log Out</Link>
    </ul>
  )
}

export default Menu