import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src="images/brand_logo.png" alt="logo" />
      </div>
      <div className="links">
        <a href="/">Menu</a>
        <a href="/location">Location</a>
        <a href="/services">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="btn">

        <button>Login</button>

      </div>

      
    </nav>
  )
}

export default Navbar