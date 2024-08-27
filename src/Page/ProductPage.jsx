import Featured from "../components/Featured_ProductPage"
import Navbar from "../components/Navbar"
import Product from "../components/Product_ProductPage"
import Attire from "../components/Attire_ProductPage"
import Categoies from "../components/Categoies_ProductPage"
import Footer from "../components/Footer"
import React from 'react'
function ProductPage(){
    return(
        <>
            <Navbar/>
            <Product/>
            <Featured/>
            <Attire/>
            <Categoies/>
            <Footer/>
        </>
    )
}
export default ProductPage