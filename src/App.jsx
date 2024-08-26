import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
import mongodb from "../src/mongodb.js"
import Home from "./Page/HomePage.jsx";
import "./components/Footer.css";
import Product from './Page/ProductPage.jsx';
import AboutUs from './Page/AboutusPage.jsx';
import Signin from './Page/SigninPage.jsx';
import React from 'react';

function App() {
    useEffect(()=>{
        fetchApi()
    },[])
    const fetchApi = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/product/get-all');
            console.log("res", res);
        } catch (error) {
            if (error.response) {
                // Server đã phản hồi với mã lỗi và dữ liệu lỗi
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
            } else if (error.request) {
                // Yêu cầu đã được gửi nhưng không nhận được phản hồi
                console.error("Error request data:", error.request);
            } else {
                // Một lỗi khác xảy ra
                console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
        }
    };
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