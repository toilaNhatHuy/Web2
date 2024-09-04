import './FeaturedProductPage.css'
import Carousel from 'react-bootstrap/Carousel';
import React, { useRef } from 'react'
import {Link} from 'react-router-dom'

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
    <div className="container-ppl">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Sale 30% for T-Shirts</h3>
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
                <img id = "pl-img1" src="https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/1"><button>More Detail</button></Link>
                </div>
                
              </div>
              <div className="pl-2">
                <img id = "pl-img2" src="https://www.aelfriceden.com/cdn/shop/files/ff2e5330fbded4e46a9c51e24fe9d487_0d5bbd92-e32c-4934-bca3-c38fd6344bca.jpg?v=1716550710&width=700" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/2"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/3"><button>More Detail</button></Link>
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
                <img id = "pl-img4" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/4"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/5"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/6"><button>More Detail</button></Link>
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

export default Featured