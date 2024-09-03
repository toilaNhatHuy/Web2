import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Page/HomePage.jsx';
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';
import Signup from './components/Signup/SignupSignupPage.jsx';
import ProductPage from './Page/ProductPage.jsx';
import Product2Page from './Page/Product2Page.jsx';
import Product3Page from './Page/Product3Page.jsx';
import Product4Page from './Page/Product4Page.jsx';
import DetailPage from './Page/DetailPage.jsx';
import DashboardPage from './Page/DashboardPage.jsx';
import CartPage from './Page/CartPage.jsx';
import { CartProvider } from './components/CartContext/CartContext.jsx'; 
import BacktoschoolPage from './Page/BacktoschoolPage.jsx';


function App() {
    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/product/get-all');
            console.log("res", res);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <CartProvider>
            <div className="Main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products1" element={<ProductPage />} />
                    <Route path="/products2" element={<Product2Page />} />
                    <Route path="/products3" element={<Product3Page />} />
                    <Route path="/products4" element={<Product4Page />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/backtoschool" element={<BacktoschoolPage />} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;