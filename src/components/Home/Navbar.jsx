
// import './node_modules/font-awesome/css/font-awesome.min.css'; 

import './Navbar.css';
import React , { Component}  from 'react';
// import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a id="logo" href="#"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454887513_342717868807516_7391926271869795433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TZNlTc0-W_cQ7kNvgF9PD6H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QELerRZdVY7VDedTVuIDAHwf4wsubalnGxuqULJnf3ucA&oe=66EA9DA2" width={'150px'} height={'40px'} alt="" /></a></li>
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
