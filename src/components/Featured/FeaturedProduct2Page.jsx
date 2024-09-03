
import Carousel from 'react-bootstrap/Carousel';
import React, { useRef } from 'react'
function Featured_Product2() {
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
          <h3 id = "h3-1">SALE 50% FOR HOODIES</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          <button id="prev-ft" onClick={handlePrev}>{'<'}</button>
          <button id="next-ft" onClick={handleNext}>{'>'}</button>
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
        <Carousel data-bs-theme="dark" ref={carouselRef}>
          <Carousel.Item>
            <div className="Attire-ctgr-1">
              <div className="attire-1">Product 1</div>
              <div className="attire-2">Product 2</div>
              <div className="attire-3">Product 3</div>        
            </div>
            <Carousel.Caption>
    
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-ctgr-2">
              <div className="attire-4">Product 4</div>
              <div className="attire-5">Product 5</div>
              <div className="attire-6">Product 6</div>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


    </div>
  )
}

export default Featured_Product2