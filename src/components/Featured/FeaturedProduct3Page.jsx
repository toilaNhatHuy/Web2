import Carousel from 'react-bootstrap/Carousel';
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
function Featured_Product3() {
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
    <div className="container-ppl">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Sale 20% for Sweater</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          <button id="prev-ft" onClick={handlePrev}>{'<'}</button>
          <button id="next-ft" onClick={handleNext}>{'>'}</button>
        </div>
      </div>

      <div className="container-ppl-2">
        
        <Carousel data-bs-theme="dark" ref={carouselRef}>
          <Carousel.Item>
            <div className="Popular-1">
              <div className="pl-1">
                <img id = "pl-img1" src="https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/13"><button>More Detail</button></Link>
                </div>
                
              </div>
              <div className="pl-2">
                <img id = "pl-img2" src="https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/14"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/15"><button>More Detail</button></Link>
                </div>
              </div>        
            </div>
            <Carousel.Caption>
              {/* <h5>First slide label</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Popular-2">
              <div className="pl-4">
                <img id = "pl-img4" src="https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/16"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/17"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/18"><button>More Detail</button></Link>
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

export default Featured_Product3