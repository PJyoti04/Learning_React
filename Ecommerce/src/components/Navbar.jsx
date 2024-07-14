import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">LOGO</div>
            <div className="menu">
                <Link to="/" className="nav-item home">Home</Link>
                <Link to="/about" className="nav-item about">About</Link>
                <Link to="/add" className="nav-item" id="add">Add Product</Link>
                <Link to="/signup" id="sign">Sign In</Link>
                <Link to="/login" id="log">Log in</Link>
                <Link to="/" id="logout">Log Out</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar