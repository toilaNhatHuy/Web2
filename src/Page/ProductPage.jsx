import Featured from "../components/Featured/FeaturedProductPage"
import Navbar from "../components/Navbar/Navbar"
import Product from "../components/Products/ProductProductPage"
import Credibility from "../components/Credibidity/Credibility.jsx"
import Attire from "../components/Attire/AttireProductPage"
import Categoies from "../components/Categories/CategoiesProductPage"
import Footer from "../components/Footer/Footer"
import React from 'react'
function ProductPage(){
    return(
        <>
            <Navbar/>
            <Product/>
            <Featured/>
            <Attire/>
            <Credibility/>
            <Categoies/>
            <Footer/>
        </>
    )
}
export default ProductPage