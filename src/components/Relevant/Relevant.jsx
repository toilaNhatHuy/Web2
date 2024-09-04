import "./Relevant.css"
import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'

function Relevant() {
  const relevantproducts = [
        { id: 1, name: "Men's Checkered Long Sleeve Button Shirt", price: 27.6, salePrice: 22.8, imageUrl: "https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg" },
        { id: 2, name: "Aelfric Eden Corduroy Plaid Fake Two Jacket", price: 17.2, salePrice: 14.1, imageUrl: "https://i.pinimg.com/736x/33/89/02/338902d7bc2a84778f1faca5ec0aa6ae.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR26Fl_Jqq437W1jVDOXwu6_XU0T2Y5AlxjxrbkVS85yqco449jmYx9RETI_aem_RJwGfmJ3iLWg96E73ve2JA" },
        { id: 3, name: "Minaka Long Sleeve Button Shirt", price: 21.9, salePrice: 18.3, imageUrl: "https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A" },
        { id: 4, name: "White Striped T-shirt", price: 11.3, salePrice: 8.8, imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5" },
        { id: 5, name: "Aqua Checkered Long Sleeve Button Shirt", price: 26.5, salePrice: 21.4, imageUrl: "https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig" },
        { id: 6, name: "Red Striped Shirt", price: 24.6, salePrice: 19.7, imageUrl: "https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw" },
        { id: 7, name: "Hombres Capucha térmica", price: 20.1, salePrice: 16, imageUrl: "https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg" },
        { id: 8, name: "Contrast Color Pullover Hoodie Mens", price: 29.8, salePrice: 23.8, imageUrl: "https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg" },
        { id: 9, name: "Waffle Pattern Hoodie", price: 20, salePrice: 16, imageUrl: "https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg" },
        { id: 10, name: "Men's New York Hoodies", price: 17.6, salePrice: 14, imageUrl: "https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg" },
        { id: 11, name: "Color Block Sleeve Hoodies", price: 24.2, salePrice: 19.3, imageUrl: "https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg" },
        { id: 12, name: "Aonga - Hoodie for Men", price: 20.4, salePrice: 16.32, imageUrl: "https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg" },
        { id: 13, name: "Pull Lapin Motifs Japonais 'Saitama'", price: 17.2, salePrice: 13.8, imageUrl: "https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg" },
        { id: 14, name: "Herren Strickpullover mit Katzenmuster", price: 17.8, salePrice: 14.24, imageUrl: "https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg" },
        { id: 15, name: "Stylish Letter Knitted Sweater", price: 26.9, salePrice: 21.5, imageUrl: "https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg" },
        { id: 16, name: "Oversized Skeleton Knit Sweater", price: 15.7, salePrice: 12.3, imageUrl: "https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg" },
        { id: 17, name: "Special Blue Sweater", price: 17.6, salePrice: 14.8, imageUrl: "https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg" },
        { id: 18, name: "Magnificent colorful sweater", price: 30.6, salePrice: 24.5, imageUrl: "https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg" },
        { id: 19, name: "Men's Kristina Ribbed Brami", price: 11.6, salePrice: 7.8, imageUrl: "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg" },
        { id: 20, name: "Unique Tank Top", price: 14.6, salePrice: 10.1, imageUrl: "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg" },
        { id: 21, name: "Popular Tank Top", price: 9.8, salePrice: 5.9, imageUrl: "https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg" },
        { id: 22, name: "Our Brand New Tank Top", price: 8.7, salePrice: 4.3, imageUrl: "https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg" },
        { id: 23, name: "BASIQUINHAS", price: 9.2, salePrice: 5.1, imageUrl: "https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg" },
        { id: 24, name: "Body Duda", price: 7.4, salePrice: 4.9, imageUrl: "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg" }
  ];

  function getRandomProducts(products, count) {
    let shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  

  const [randomProducts, setRandomProducts] = useState([]);

  const randomizeProducts = () => {
    setRandomProducts(getRandomProducts(relevantproducts, 4));
  }

  useEffect(() => {
    randomizeProducts();
  }, []);



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
              {randomProducts[0] && (
                <div className="rlv1">
                  <img src={randomProducts[0].imageUrl} width={'230px'} alt={randomProducts[0].name} />
                  <div className="rlv-detail">
                      <p>| {randomProducts[0].name} </p>
                      
                      <Link to = {`/detail/${randomProducts[0].id}`} className="animate-button">
                      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                      <span className="text">Details</span>
                      <span className="circle"></span>
                      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
              {randomProducts[1] && (
                <div className="rlv2">
                  <img src={randomProducts[1].imageUrl} width={'230px'} alt={randomProducts[1].name} />
                  <div className="rlv-detail">
                      <p>| {randomProducts[1].name} </p>
                      <Link to = {`/detail/${randomProducts[1].id}`} className="animate-button">
                      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                      <span className="text">Details</span>
                      <span className="circle"></span>
                      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="rlv-products-2">
              {randomProducts[2] && (
                <div className="rlv3">
                  <img src={randomProducts[2].imageUrl} width={'230px'} alt={randomProducts[2].name} />
                  <div className="rlv-detail">
                      <p>| {randomProducts[2].name} </p>
                      <Link to = {`/detail/${randomProducts[2].id}`} className="animate-button">
                      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                      <span className="text">Details</span>
                      <span className="circle"></span>
                      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
              {randomProducts[3] && (
                <div className="rlv4">
                  <img src={randomProducts[3].imageUrl} width={'230px'} alt={randomProducts[3].name} />
                  <div className="rlv-detail">
                      <p>| {randomProducts[3].name} </p>
                      <Link to = {`/detail/${randomProducts[3].id}`} className="animate-button">
                      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                      <span className="text">Details</span>
                      <span className="circle"></span>
                      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
    
  )
}

export default Relevant