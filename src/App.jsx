import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
import mongodb from "../src/mongodb.js"
import Home from "./Page/HomePage.jsx";
import "./components/Footer.css";
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';
import Signup from './components/Signup/SignupSignupPage.jsx';
import ProductPage from './Page/ProductPage.jsx';
import Product2Page from './Page/Product2Page.jsx';
import Product3Page from './Page/Product3Page.jsx';
import Product4Page from './Page/Product4Page.jsx';
import DetailPage from './Page/DetailPage.jsx';
import React from 'react';

function App() {
    useEffect(()=>{
        fetchApi()
    },[])
    const fetchApi = async () => {
        const res = await axios.get(`http://localhost:3001/api/product/get-all`)
        console.log("res",res)
    }
    return (
        <div className="Main">
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/sign-in" element={<Signin/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/products2" element={<Product2Page/>}/>
                <Route path="/products3" element={<Product3Page/>}/>
                <Route path="/products4" element={<Product4Page/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
            </Routes>
        </div>
    )
}

export default App