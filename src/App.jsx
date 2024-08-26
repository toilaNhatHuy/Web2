import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Page/HomePage.jsx";
import "./components/Navbar.css";
import "./components/Footer.css"
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';

function App() {
    return (
        <div className="Main">
            <div className="navbar">
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
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
            <div className="Footer">
                <div className="nav-footer">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </div>
                <div className="footer-info">
                    <div className="footer-slogan">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454887513_342717868807516_7391926271869795433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TZNlTc0-W_cQ7kNvgGno8Jr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGbzXtD35PV_RgcX4cf5Lm8CHUO4CSKkWF-eaDti3HiEA&oe=66EBB6E2" id='streetbrand-footer' width={'250px'} height={'65px'} alt="" />
                        <h1 id = "myh1">THE<br/> “EARTH”<br/> WITHOUT<br/> “ART” IS<br/> JUST “EH”</h1>
                    </div>

                    <div className="footer-payments">
                        <img src="http://pluspng.com/img-png/payment-method-png-payment-gateways-600.png" width={'400px'} height={'380px'} alt="" />
                    </div>

                    <div className="contact-us">
                        <div className="ctu-1">
                            <h2 id ="myh2">FOLLOW AND<br/> CONTACT US</h2>
                        </div>
                        <div className="ctu-icon">
                            <i id = 'contact-icon' class="fa-brands fa-facebook"></i>
                            <i id = 'contact-icon' class="fa-brands fa-instagram"></i>
                            <i id = 'contact-icon' class="fa-brands fa-telegram"></i>
                            <i id = 'contact-icon' class="fa-brands fa-facebook-messenger"></i>
                        </div>
                        <div className="ctu-clothes">
                            <div className="row-1">
                                <p>Shirts</p>
                                <p>Hoodies</p>
                                <p>Jackets</p>
                                <p>Sweaters</p>
                
                            </div>
                            <div className="row-2">
                                <p>Shorts</p>
                                <p>Jeans</p>
                                <p>Pants</p>
                                <p>Cargos</p>
                            </div>
              
                        </div>
                    </div>
                </div>
      
            </div>
        </div>
    )
}

export default App