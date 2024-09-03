import './FeaturedHomePage.css'
import React, { useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

function Featured() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id="h3-1">Featured</h3>
        </div>

        <div className="left-ft">
          <h3 id="h3-2">Shop</h3>
          <button id="prev-ft" onClick={handlePrev}>{'<'}</button>
          <button id="next-ft" onClick={handleNext}>{'>'}</button>
        </div>
      </div>

      <div className="container-ep-2">
        <Carousel data-bs-theme="dark" ref={carouselRef}>
          <Carousel.Item>
            <div className="Attire-ep-1">
              <Link id="attire-1" to="/products2">
                Hoodie
              </Link>
              <Link id="attire-2" to="/products4">
                Tank Tops
              </Link>
              <Link id="attire-3" to="/products3">
                Sweater
              </Link>
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-ep-2">
              <Link id="attire-4" to="/products">
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

export default Featured;