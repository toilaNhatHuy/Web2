
// import './node_modules/font-awesome/css/font-awesome.min.css'; 

import './Navbar.css';
import React , { Component}  from 'react';
// import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a id="logo" href="#">STREET BRAND</a></li>
        <li><a id="home" href="/home">HOME</a></li>
        <li><a id = "products" href="/products">PRODUCTS</a></li>
        <li><a id = "about-us" href="/aboutus">ABOUT US</a></li>
        <li><a id = "sign-in" href="/signin">SIGN IN</a></li>
        <li><a id = "sign-up" href="/signup">SIGN UP</a></li>
        <div className="search-bar">
          <li><a href="#"><input id="search" type="text" placeholder='Search...'/></a></li>
          <button id = "search-icon"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <li><a id="cart" href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </div>
  )
  
}

export default Navbar
