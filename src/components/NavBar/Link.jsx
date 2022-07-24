import React from 'react'
/* ------------------------------- ROUTER-DOM ------------------------------- */
import { NavLink } from 'react-router-dom'

const Link = ({ to, func, children }) => {
  return (
    <li>
        <NavLink onClick={func} to={to}>{children}</NavLink>
    </li>
  )
}

export default Link