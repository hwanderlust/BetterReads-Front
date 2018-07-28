import React from 'react'
import ActiveMenu from './ActiveMenu'
import InactiveMenu from './InactiveMenu'


const MenuContainer = ({ handleMenu, menuStatus }) => {
    console.log('menu loaded');
    return (
      menuStatus ? <ActiveMenu handleMenu={handleMenu} /> : <InactiveMenu handleMenu={handleMenu}/>
    )
}

export default MenuContainer;
