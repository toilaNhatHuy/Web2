import FeaturedProduct3 from "../components/Featured/FeaturedProduct3Page"
import Product from "../components/Products/ProductProductPage"
import Navbar from "../components/Navbar/Navbar"
import Attire from "../components/Attire/AttireProductPage"
import Credibility from "../components/Credibidity/Credibility"
import Categories3 from "../components/Categories/CategoiesProductPage-3"
import Footer from "../components/Footer/Footer"
import React from 'react'
function Product3Page(){
    return(
        <>
            <Navbar/>
            <Product/>
            <FeaturedProduct3/>
            <Attire/>
            <Credibility/>
            <Categories3/>
            <Footer/>
        </>
    )
}
export default Product3Page