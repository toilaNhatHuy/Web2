import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/ProductProductPage'
import FeaturedProduct2 from '../components/FeaturedProduct2Page'
import Attire from '../components/AttireProductPage'
import Categories2 from '../components/CategoiesProductPage-2'
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