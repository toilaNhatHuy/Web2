import FeaturedProduct4 from "../components/FeaturedProduct4Page"
import Product from "../components/ProductProductPage"
import Navbar from "../components/Navbar"
import Attire from "../components/AttireProductPage"
import Categories4 from "../components/CategoiesProductPage-4"
import Footer from "../components/Footer"
import React from 'react'
function Product4Page(){
    return(
        <>
            <Navbar/>
            <Product/>
            <FeaturedProduct4/>
            <Attire/>
            <Categories4/>
            <Footer/>
        </>
    )
}
export default Product4Page