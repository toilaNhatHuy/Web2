
// import './node_modules/font-awesome/css/font-awesome.min.css'; 

import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a id="logo" href="#">ShoppingWeb <i className="fa-solid fa-bolt-lightning"></i></a></li>
        <li><a id="home" href="signup&signin.html">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="Aboutus.html">About us</a></li>
        <li><a href="signup&signin.html">Login</a></li>
        <li><a href="#"><input id="search" type="text" /></a></li>
        <li><a id="cart" href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </div>
  )
  
}

export default Navbar
