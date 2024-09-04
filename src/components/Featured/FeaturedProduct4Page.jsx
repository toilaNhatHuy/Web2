import Carousel from 'react-bootstrap/Carousel';
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
function Featured_Product4() {
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
          <h3 id = "h3-1">Sale 10% for Tank Tops</h3>
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
                <img id = "pl-img1" src="https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/19"><button>More Detail</button></Link>
                </div>
                
              </div>
              <div className="pl-2">
                <img id = "pl-img2" src="https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/20"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/21"><button>More Detail</button></Link>
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
                <img id = "pl-img4" src="https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/22"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/23"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/24"><button>More Detail</button></Link>
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

export default Featured_Product4