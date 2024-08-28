import './FeaturedHomePage.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Route, Routes, Link} from 'react-router-dom'
function Featured() {


  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Featured</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          {/* <button id = "prev-ft">{'<'}</button>
          <button id = "next-ft">{'>'}</button> */}
        </div>
      </div>

      <div className="container-ep-2">
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
            <div className="Attire-ep-1">
              <Link id = "attire-1" to = "/products2">
                Hoodie
              </Link>
              <Link id = "attire-2" to = "/products4">
                Tank Tops
              </Link>
              <Link id = "attire-3" to = "/products3">
                Sweater
              </Link>       
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-ep-2">
              <Link id = "attire-4" to = "/products">
                Shirts
              </Link>
              <div className="attire-5-k"></div>
              <div className="attire-6-k"></div>
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