import Featured from "../components/FeaturedProductPage"
import Navbar from "../components/Navbar"
import Product from "../components/ProductProductPage"
import Attire from "../components/AttireProductPage"
import Categoies from "../components/CategoiesProductPage"
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