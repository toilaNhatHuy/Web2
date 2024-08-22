import Featured from "../components/Featured_ProductPage"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product_ProductPage"
import React from 'react';

function ProductPage(){
    return(
        <>
        <Navbar/>
        <Product/>
        <Featured/>
        <Footer/>
        </>
    )
}
export default ProductPage