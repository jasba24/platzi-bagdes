import React from 'react'
import { Link } from 'react-router-dom'

import './styles/NavBar.css'
import logo from '../images/logo.svg'

function NavBar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link to="/" className="Navbar__brand">
          <img src={logo} alt="Logo" className="Navbar__brand-logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
