import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//css link
import '../components/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <header >
            <div className="container ">
                <div className="logo_brand">
                    <NavLink to='/' >  iT  <span>World </span> </NavLink>
                </div>
                <nav >
                    <ul>
                        <li> <NavLink to='/' > Home </NavLink> </li>
                        <li> <NavLink to='/about' > About </NavLink> </li>
                        <li> <NavLink to='/service' > Service </NavLink> </li>
                        <li> <NavLink to='/contact' > Contact </NavLink> </li>
                        <li> <NavLink to='/login' > Login </NavLink> </li>
                        <li> <NavLink to='/register' > Singup </NavLink> </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar