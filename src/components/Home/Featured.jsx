import './Featured.css';
import React , { Component}  from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Featured() {
  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Featured</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          
        </div>
      </div>

      <div className="container-2">
          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="Attire-1">
              <div className="attire-1">Hoodies</div>
              <div className="attire-1">Tank Tops</div>
              <div className="attire-1">Sweaters</div>        
            </div>
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-2">
              <div className="attire-2">Jacket</div>
              <div className="attire-2">Blazers</div>
              <div className="attire-2">T-Shirt</div>
            </div>
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
            </div>
      </div>
    

  )
}

export default Featured