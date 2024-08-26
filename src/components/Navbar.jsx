import './Navbar.css';
import React  from 'react';
import {Link} from 'react-router-dom'
function Navbar(){
    return(
            <div className="navbar">
                <ul>
                    <li><img id="logo"></img></li>
                    <li><Link id="home" to="/">HOME</Link></li>
                    <li><Link id = "products" to="/products">PRODUCTS</Link></li>
                    <li><Link id = "about-us" to="/aboutus">ABOUT US</Link></li>
                    <li><Link id = "sign-in" to="/signin">SIGN IN</Link></li>
                    <li><Link id = "sign-up" to="/signup">SIGN UP</Link></li>
                    <div className="search-bar">
                        <li><a href="http://localhost:3000"><input id="search" type="text" placeholder='Search...'/></a></li>
                        <button id = "search-icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <li><Link id="cart" to="#"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>
    )
}
export default Navbar