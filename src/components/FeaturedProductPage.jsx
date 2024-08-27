import './FeaturedProductPage.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Featured() {
  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">SALE 30% FOR T-SHIRTS</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          {/* <button id = "prev-ft">{'<'}</button>
          <button id = "next-ft">{'>'}</button> */}
        </div>
      </div>

      <div className="container-2">
        {/* <div className="Attire-1">
          <div className="attire-1">Hoodies</div>
          <div className="attire-1">Tank Tops</div>
          <div className="attire-1">Sweaters</div>        
        </div>

        <div className="Attire-2">
          <div className="attire-2">Jacket</div>
          <div className="attire-2">Blazers</div>
          <div className="attire-2">T-Shirt</div>
        </div> */}
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="Attire-1">
              <div className="attire-1">Product 1</div>
              <div className="attire-2">Product 2</div>
              <div className="attire-3">Product 3</div>        
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-2">
              <div className="attire-4">Product 4</div>
              <div className="attire-5">Product 5</div>
              <div className="attire-6">Product 6</div>
            </div>
            <Carousel.Caption>
              {/* <h5>Second slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


    </div>
  )
}

export default Featured