import './PopularHomePage.css'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Popular() {
  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Popular right now</h3>
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
              <div className="pl-1">
                <img id = "pl-img1" src="https://cdn.shopify.com/s/files/1/0300/1493/1082/files/men-s-long-sleeve-checkered-button-shirt-anotherchill-1_400x.png?v=1694763099" width={'310px'} height={'400px'} alt="" />
                <div className="pl-imgbf"></div>
              </div>
              <div className="pl-2">
                <img id = "pl-img2" src="https://cdn.shopify.com/s/files/1/0300/1493/1082/files/men-s-checkered-print-button-down-shirt-anotherchill-1-32061016441066_400x.png?v=1694761230" width={'310px'}  alt="" />
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://cdn.shopify.com/s/files/1/0300/1493/1082/files/men-s-long-sleeve-checkered-shirt-anotherchill-1-32060968468714_400x.jpg?v=1721978939" width={'310px'}  alt="" />
                </div>        
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Attire-2">
              <div className="pl-4">
                <img id = "pl-img4" src="https://i.pinimg.com/736x/31/4b/d1/314bd17996b0a27188f3a71b80b09050.jpg" width={'310px'} height={'400px'} alt="" />
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/d1/69/05/d169059a83222c1677da806fdc307cd9.jpg" width={'310px'} height={'400px'} alt="" />
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/85/bc/3e/85bc3e5fbd17d040a172102736fa4c4e.jpg" width={'310px'} height={'400px'} alt="" />
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

export default Popular