import "./Relevant.css"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Relevant() {
  return (
    <div className="Relevant">
        <div className="rlv-title">
            <h1>YOU MIGHT ALSO LIKE</h1>
            <div className="line"></div>
        </div>
        <div className="relevant-products">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="rlv-products-1">
              <div className="rlv1">
                <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'230px'} alt="" />
                <div className="rlv-detail">
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <button>MORE DETAIL</button>
                </div>
                
              </div>
              <div className="rlv2">
                <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'230px'} alt="" />
                <div className="rlv-detail">
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <button>MORE DETAIL</button>
                </div>
              </div>
                
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="rlv-products-2">
              <div className="rlv3">
                <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'230px'} alt="" />
                <div className="rlv-detail">
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <button>MORE DETAIL</button>
                </div>
              </div>
              <div className="rlv4">
                <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'230px'} alt="" />
                <div className="rlv-detail">
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <button>MORE DETAIL</button>
                </div>
              </div>
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

export default Relevant