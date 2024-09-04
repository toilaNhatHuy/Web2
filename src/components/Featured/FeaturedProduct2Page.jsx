import Carousel from 'react-bootstrap/Carousel';
import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
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
    <div className="container-ppl">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Sale 50% for Hoodies</h3>
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
                <img id = "pl-img1" src="https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/7"><button>More Detail</button></Link>
                </div>
                
              </div>
              <div className="pl-2">
                <img id = "pl-img2" src="https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/8"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/9"><button>More Detail</button></Link>
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
                <img id = "pl-img4" src="https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/10"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/11"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/12"><button>More Detail</button></Link>
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

export default Featured_Product2