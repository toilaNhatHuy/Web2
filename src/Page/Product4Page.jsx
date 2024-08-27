import FeaturedProduct4 from "../components/Featured/FeaturedProduct4Page"
import Product from "../components/Products/ProductProductPage"
import Navbar from "../components/Navbar/Navbar"
import Attire from "../components/Attire/AttireProductPage"
import Categories4 from "../components/Categories/CategoiesProductPage-4"
import Footer from "../components/Footer/Footer"
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