import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar({title}) {
  return (
    <nav className='navbar'>
        <div className="header">
            <h1>{title}</h1>
        </div>
        <div className="links">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/units" className="link">Units</NavLink>
        </div>
    </nav>
  )
}

export default Navbar