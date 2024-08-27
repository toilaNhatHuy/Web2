import FeaturedProduct3 from "../components/FeaturedProduct3Page"
import Product from "../components/ProductProductPage"
import Navbar from "../components/Navbar"
import Attire from "../components/AttireProductPage"
import Categories3 from "../components/CategoiesProductPage-3"
import Footer from "../components/Footer"
import React from 'react'
function Product3Page(){
    return(
        <>
            <Navbar/>
            <Product/>
            <FeaturedProduct3/>
            <Attire/>
            <Categories3/>
            <Footer/>
        </>
    )
}
export default Product3Page