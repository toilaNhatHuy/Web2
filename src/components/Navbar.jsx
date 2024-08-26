<<<<<<< HEAD
import './Navbar.css';
import React , { Component}  from 'react';
import {Routes, Route, Link} from 'react-router-dom'
function Navbar(){
    return(
            <div className="navbar">
=======
import './Navbar.css'
import {Routes, Route, Link} from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
>>>>>>> refs/remotes/origin/FE_home
                <ul>
                    <li><img id="logo"></img></li>
                    <li><Link id="home" to="/">HOME</Link></li>
                    <li><Link id = "products" to="/products">PRODUCTS</Link></li>
                    <li><Link id = "about-us" to="/aboutus">ABOUT US</Link></li>
                    <li><Link id = "sign-in" to="/signin">SIGN IN</Link></li>
                    <li><Link id = "sign-up" to="/signup">SIGN UP</Link></li>
                    <div className="search-bar">
                        <li><a href="#"><input id="search" type="text" placeholder='Search...'/></a></li>
                        <button id = "search-icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <li><Link id="cart" to="#"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>
<<<<<<< HEAD
    )
}
=======


  )
}

>>>>>>> refs/remotes/origin/FE_home
export default Navbar