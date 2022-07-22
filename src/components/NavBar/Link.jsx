import React from 'react'
/* ------------------------------- ROUTER-DOM ------------------------------- */
import { NavLink } from 'react-router-dom'

const Link = ({ to, children }) => {
  return (
    <li>
        <NavLink to={to}>{children}</NavLink>
    </li>
  )
}

export default Link