import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'
const Hooks = () => {
  return (
    <>
      <div>Hook implementation</div>
      <nav>
        <ul>
          <li><NavLink to="usestate" className={({isActive})=> isActive ? "active-class": ""}>useState</NavLink></li>
          <li><NavLink to="usereducer" className={({isActive})=> isActive ? "active-class": ""}>useReducer</NavLink></li>
          <li><NavLink to="useeffect" className={({isActive})=> isActive ? "active-class": ""}>useEffect</NavLink></li>
          <li><NavLink to="usecallback" className={({isActive})=> isActive ? "active-class": ""}>useCallback</NavLink></li>
          <li><NavLink to="usecontext" className={({isActive})=> isActive ? "active-class": ""}>useContext</NavLink></li>
          <li><NavLink to="customhook" className={({isActive})=> isActive ? "active-class": ""}>custom hook</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Hooks
