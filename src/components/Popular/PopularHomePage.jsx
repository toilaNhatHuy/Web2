import './PopularHomePage.css'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {Link} from 'react-router-dom'

function Popular() {
  return (
    <div className="container-ppl">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Popular right now</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
        </div>
      </div>

      <div className="container-ppl-2">
        
        <Carousel data-bs-theme="dark">
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
                <img id = "pl-img2" src="https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/5"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-3">
                <img id = "pl-img3" src="https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg" width={'310px'}  alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/7"><button>More Detail</button></Link>
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
                <img id = "pl-img4" src="https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/12"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-5">
                <img id = "pl-img5" src="https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/15"><button>More Detail</button></Link>
                </div>
              </div>
              <div className="pl-6">
                <img id = "pl-img6" src="https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg" width={'310px'} height={'400px'} alt="" />
                <div className="content-haha">
                  <div className="second-bg"></div>
                  <Link to = "/detail/3"><button>More Detail</button></Link>
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

export default Popular