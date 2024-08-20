import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Page/HomePage.jsx";
import "./components/Navbar.css";
import ProductPage from './Page/ProductPage.jsx';

function App() {
    return (
        <div className="Main">
            <div className="navbar">
                <ul>
                    <li><Link id="logo" to="#">STREET BRAND</Link></li>
                    <li><Link id="home" to="/home">HOME</Link></li>
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
                <Route path="/home" element={<Home/>}/>
                <Route path="/product" element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

export default App