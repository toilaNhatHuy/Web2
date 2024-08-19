import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function SlideShow() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/b5/1c/64/b51c64f53f8aa88c6d14dda0f43ccd7f.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/b5/1c/64/b51c64f53f8aa88c6d14dda0f43ccd7f.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/b5/1c/64/b51c64f53f8aa88c6d14dda0f43ccd7f.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default SlideShow



// import 'react-slideshow-image/dist/styles.css'
// import React from 'react';
// import './style.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';


// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '700px'
// }

// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//   },
  
// ];

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Carousel>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//               </div>
//             </div>
//           ))} 
//         </Carousel>
//       </div>
//     )
// }

// export default Slideshow
