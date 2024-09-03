
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SlideShowHomePage.css'

function SlideShow() {
  return (
    <div className="Container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="slide1">
          <img src="https://i.pinimg.com/736x/8d/1c/ae/8d1caed031bc76ff27404ac3f2d3773f.jpg" width={'400px'} id = "img1" alt="a" />
          <img src="https://i.pinimg.com/736x/41/79/44/4179448649ffa4c7dbc4fb128d02c190.jpg" width={'400px'} id = "img2" alt="a" />
          <img src="https://i.pinimg.com/736x/59/82/89/5982893cdd0fd5f91300248166c5e552.jpg" width={'400px'} id = "img3" alt="a" />
        </div>
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide2">
            <img src="https://i.pinimg.com/736x/1f/0d/d6/1f0dd6a2272557e56b3f1a7b91550244.jpg" width={'400px'} id = "img1" alt="a" />
            <img src="https://i.pinimg.com/736x/fa/f6/5a/faf65a1991e913693dc74fd51a47ddcd.jpg" width={'400px'} id = "img2" alt="a" />
            <img src="https://i.pinimg.com/736x/95/ad/b9/95adb94559db5d7e09c2aa7bf21c9534.jpg" width={'400px'} id = "img3" alt="a" />
        </div>
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide3">
            <img src="https://i.pinimg.com/736x/e1/d2/d7/e1d2d7f106436498d5e2c2a9e0bbf550.jpg" width={'400px'} id = "img1" alt="a" />
            <img src="https://i.pinimg.com/736x/e6/66/ac/e666ac6f4922e88d5f78225d25e99581.jpg" width={'400px'} id = "img2" alt="a" />
            <img src="https://i.pinimg.com/736x/36/56/b3/3656b3c266a9a43e9301c12ee8f13aa4.jpg" width={'400px'} id = "img3" alt="a" />
        </div>
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default SlideShow


