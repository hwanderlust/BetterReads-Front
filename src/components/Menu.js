import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {

  render() {
    const {
      handleMenu, currentUser, logout, currentComponent
    } = this.props

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
      hovered.style = `background-color: rgba(171, 155, 182, 1); color: black;`
      activeComponentStyle()
    }

    const activeComponentStyle = () => {
      switch(currentComponent) {
        case '/home':
          document.getElementById('home').style = `background-color: rgba(135, 75, 175, 1); color: rgba(250, 250, 250, 1);`
          break
        case '/shelves':
          document.getElementById('shelves').style = `background-color: rgba(135, 75, 175, 1); color: rgba(250, 250, 250, 1);`
          break
        case '/signup':
          document.getElementById('signup').style = `background-color: rgba(135, 75, 175, 1); color: rgba(250, 250, 250, 1);`
          break
        case '/login':
          document.getElementById('login').style = `background-color: rgba(135, 75, 175, 1); color: rgba(250, 250, 250, 1);`
          break
      }
    }

    return (
      <ul className="menu">
        { activeComponentStyle() }
        <Link to='/home' id='home' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)}>Home</Link>
        {currentUser ?
          <Fragment>
            <Link to='/logout' id='logout' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log Out</Link>
            <Link to='/shelves' id='shelves' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Shelves</Link>
          </Fragment>
        : (
          <Fragment>
            <Link to='/signup' id='signup' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Sign Up</Link>
            <Link to='/login' id='login' className="menu-item" onMouseEnter={(e) => hover(e)} onMouseLeave={e => stop(e)} >Log In</Link>
          </Fragment>
        )}
      </ul>
    )
  }
}
export default Menu
