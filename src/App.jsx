import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Page/HomePage.jsx";
import "./components/Footer.css"
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';

function App() {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
        </div>
    )
}

export default App