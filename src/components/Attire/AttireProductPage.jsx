import './AttireProductPage.css'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import React from 'react'

function Attire() {
  return (
    <div className="container">
      {/* <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">SALE 30% FOR T-SHIRTS</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          <button id = "prev-ft">{'<'}</button>
          <button id = "next-ft">{'>'}</button>
        </div>
      </div> */}

      <div className="container-at-2">
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
            <div className="Attire-at-1">
              <div className="attire-category1">
                <div className="attire-category1-in">
                    <div className="attire-category1-in-in">
                        <h1>HOODIES</h1>
                        <Link to = '/products2'>
                          <button >SEE MORE</button>
                        </Link>
                    </div>
                </div>
                
              </div>
              <div className="attire-category2">
              <div className="attire-category1-in">
                    <div className="attire-category1-in-in">
                        <h1>TANK TOPS</h1>
                        <Link to = '/products4'>
                          <button >SEE MORE</button>
                        </Link>
                    </div>
                </div>
                </div>    
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-at-2">
              <div className="attire-category3">
                <div className="attire-category1-in">
                        <div className="attire-category1-in-in">
                            <h1>T-SHIRTS</h1>
                            <Link to = '/products'>
                              <button >SEE MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
              <div className="attire-category4">
                <div className="attire-category1-in">
                        <div className="attire-category1-in-in">
                            <h1>SWEATERS</h1>
                            <Link to = '/products3'>
                              <button >SEE MORE</button>
                            </Link>
                        </div>
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

export default Attire