import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBarLink = ({ click, to, children }) => {
  return (
    <NavLink onClick={click} to={to}>{children}</NavLink>
  )
}

export default NavBarLink