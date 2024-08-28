import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Product from '../components/Products/ProductProductPage'
import FeaturedProduct2 from '../components/Featured/FeaturedProduct2Page'
import Attire from '../components/Attire/AttireProductPage'
import Categories2 from '../components/Categories/CategoiesProductPage-2'
import Footer from '../components/Footer/Footer'
function Product2Page() {
  return (
    <>
        <Navbar/>
        <Product/>
        <FeaturedProduct2/>
        <Attire/>
        <Categories2/>
        <Footer/>
    </>
  )
}

export default Product2Page