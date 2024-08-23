import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Page/HomePage.jsx";
import "./components/Footer.css"
import "./components/Navbar.css"
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';
import Signup from './components/Signup_SignupPage.jsx';

function App() {
    return (
        <div className="Main">
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </div>
    )
}

export default App