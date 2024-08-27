import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Product from '../components/Products/ProductProductPage'
import FeaturedProduct2 from '../components/Featured/FeaturedProduct2Page'
import Attire from '../components/Attire/AttireProductPage'
import Categories2 from '../components/Categories/CategoiesProductPage-2'
import { Route } from 'react-router'
function Product2Page() {
  return (
    <Route>
        <Navbar/>
        <Product/>
        <FeaturedProduct2/>
        <Attire/>
        <Categories2/>
    </Route>
  )
}

export default Product2Page