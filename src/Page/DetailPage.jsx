import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Detail from '../components/Detail/DetailProductPage'
import Review from '../components/Review/ReviewProductPage'
import Relevant from '../components/Relevant/Relevant'
import Footer from '../components/Footer/Footer'

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