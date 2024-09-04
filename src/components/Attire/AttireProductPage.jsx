import './AttireProductPage.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

function Attire() {
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
      <div className="container-at-2">
        <button id="prev-ft" onClick={handlePrev}>{'<'}</button>
        <Carousel data-bs-theme="dark" ref={carouselRef}>
          <Carousel.Item>
            <div className="Attire-at-1">
              <div className="attire-category1">
                <div className="attire-category1-in">
                    <div className="attire-category1-in-in">
                        <h1>HOODIES</h1>
                        <Link to = '/products2'className='SM'>
                              SEE MORE
                        </Link>
                    </div>
                </div>
              </div>

              <div className="attire-category2">
              <div className="attire-category1-in">
                    <div className="attire-category1-in-in">
                        <h1>TANK TOPS</h1>
                        <Link to = '/products4'className='SM'>
                              SEE MORE
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="Attire-at-2">
              <div className="attire-category3">
                <div className="attire-category1-in">
                        <div className="attire-category1-in-in">
                            <h1>T-SHIRTS</h1>
                            <Link to = '/products'className='SM'>
                              SEE MORE
                            </Link>
                        </div>
                    </div>
                </div>
              <div className="attire-category4">
                <div className="attire-category1-in">
                        <div className="attire-category1-in-in">
                            <h1>SWEATERS</h1>
                            <Link to = '/products3'className='SM'>
                              SEE MORE
                            </Link>
                        </div>
                    </div>
              </div>
            </div>

            
          </Carousel.Item>
        </Carousel>
        <button id="next-ft" onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
}

export default Attire;