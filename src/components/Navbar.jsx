
// import './node_modules/font-awesome/css/font-awesome.min.css'; 

import './Navbar.css';
// import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a id="logo" href="#">SHOPPING WEB <i className="fa-solid fa-bolt-lightning"></i></a></li>
        <li><a id="home" href="signup&signin.html">HOME</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="Aboutus.html">ABOUT US</a></li>
        <li><a href="signup&signin.html">SIGN IN</a></li>
        <li><a href="#">SIGN UP</a></li>
        <li><a href="#"><input id="search" type="text" placeholder='Value'/></a></li>
        <li><a id="cart" href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </div>
  )
  
}

export default Navbar
