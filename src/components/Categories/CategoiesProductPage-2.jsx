import "./CategoiesProductPage-2.css"
import {Link} from 'react-router-dom'
import React from 'react'

function Categories2() {
  return (
    <div className="Categories">
        <div className="Categoriesd-title">
            <h1 id="ctgr-tt">PRODUCTS</h1>
        </div>
        <div className="Categories-nav">
            <Link to = "/products" id = "ctgr-nav2">SHIRTS</Link>
            <Link to = "/products2" id = "ctgr-nav1">HOODIES</Link>
            <Link to = "/products3" id = "ctgr-nav3">SWEATERS</Link>
            <Link to = "/products4" id = "ctgr-nav4">TANK TOPS</Link>
        </div>
        <div className="all-product-tag">
            <h1>All Products</h1>
        </div>
        <div id = "All-Categories2" className="All-Categories2">
            <div className="Categories-1">
                <div className="img-des">
                    <img src="https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| Hombres Capucha térmica </p>
                    <div className="star-detail">
                        <div className="star">
                            <p id="rate"><i className="fa-solid fa-star"></i></p>
                            <p id="rate"><i className="fa-solid fa-star"></i></p>
                            <p id="rate"><i className="fa-solid fa-star"></i></p>
                            <p id="rate"><i className="fa-solid fa-star"></i></p>
                            <p id="rate"><i className="fa-solid fa-star"></i></p>
                        </div>
                        <div className="detail">
                            <p id="description">
                                <Link id = "link" to = "/detail">More details</Link>
                            </p>
                        </div>
                        
                    </div>
                    <div className="price">
                        <div className="original-price">
                            <span id = "price1">$20.1</span>
                            <span id = "price2">$16</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Contrast Color Pullover Hoodie Mens </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                            </div>
                            <div className="detail">
                                <p id="description">
                                    <Link id = "link" to = "/detail">More details</Link>
                                </p>
                            </div>
                            
                        </div>
                        <div className="price">
                            <div className="original-price">
                                <span id = "price1">$29.8</span>
                                <span id = "price2">$23.8</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Waffle Pattern Hoodie </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                                <p id="rate"><i className="fa-solid fa-star"></i></p>
                            </div>
                            <div className="detail">
                                <p id="description">
                                    <Link id = "link" to = "/detail">More details</Link>    
                                </p>
                            </div>
                            
                        </div>
                        <div className="price">
                            <div className="original-price">
                                <span id = "price1">$20</span>
                                <span id = "price2">$16</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
        </div>

        <div className="All-Categories-2">
            <div className="All-Categories2">
                    <div className="Categories-1">
                        <div className="img-des">
                            <img src="https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg" width={'380px'} height={'480px'} alt="" />
                            <p>| Men's New York Hoodies </p>
                            <div className="star-detail">
                                <div className="star">
                                    <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    <p id="rate"><i className="fa-solid fa-star"></i></p>
                                </div>
                                <div className="detail">
                                    <p id="description">
                                        <Link id = "link" to = "/detail">More details</Link>
                                    </p>
                                </div>
                                
                            </div>
                            <div className="price">
                                <div className="original-price">
                                    <span id = "price1">$17.6</span>
                                    <span id = "price2">$14</span>

                                </div>
                            </div>
                            <button>BUY NOW</button>
                        </div>
                        
                    </div>
                    <div className="Categories-2">
                        <div className="img-des">
                                <img src="https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg" width={'380px'} height={'480px'} alt="" />
                                <p>| Color Block Sleeve Hoodies </p>
                                <div className="star-detail">
                                    <div className="star">
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    </div>
                                    <div className="detail">
                                        <p id="description">
                                            <Link id = "link" to = "/detail">More details</Link>
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="price">
                                    <div className="original-price">
                                        <span id = "price1">$24.2</span>
                                        <span id = "price2">$19.3</span>

                                    </div>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    <div className="Categories-3">
                        <div className="img-des">
                                <img src="https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg" width={'380px'} height={'480px'} alt="" />
                                <p>| Aonga - Hoodie for Men </p>
                                <div className="star-detail">
                                    <div className="star">
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                        <p id="rate"><i className="fa-solid fa-star"></i></p>
                                    </div>
                                    <div className="detail">
                                        <p id="description">
                                            <Link id = "link" to = "/detail">More details</Link>
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="price">
                                    <div className="original-price">
                                        <span id = "price1">$20.4</span>
                                        <span id = "price2">$16.32</span>

                                    </div>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                </div>
            </div>
            
        




    </div>
  )
}

export default Categories2