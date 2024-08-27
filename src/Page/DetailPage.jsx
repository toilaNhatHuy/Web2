import React from 'react';
import Navbar from '../components/Navbar'
import Detail from '../components/Detail_ProductPage'
import Review from '../components/Review_ProductPage'
import Relevant from '../components/Relevant'
import Footer from '../components/Footer'

function DetailPage() {
  return (
    <>
        <Navbar/>
        <Detail/>
        <Review/>
        <Relevant/>
        <Footer/>
    </>
  )
}

export default DetailPage