import './CategoiesProductPage.css'
import {Link} from 'react-router-dom'
import React from 'react'

function Categoies() {
  return (
    <div className="Categories">
        <div className="Categoriesd-title">
            <h1 id="ctgr-tt">PRODUCTS</h1>
        </div>
        <div className="Categories-nav">
            <Link to = "/products" id = "ctgr-nav1">SHIRTS</Link>
            <Link to = "/products2" id = "ctgr-nav2">HOODIES</Link>
            <Link to = "/products3" id = "ctgr-nav3">SWEATERS</Link>
            <Link to = "/products4" id = "ctgr-nav4">TANK TOPS</Link>
        </div>
        <div className="all-product-tag">
            <h1>All Products</h1>
        </div>
        <div className="All-Categories">
            <div className="Categories-1">
                <div className="img-des">
                    <img src="https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| Men's Checkered Long Sleeve Button Shirt</p>
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
                            <span id = "price1">$27.6</span>
                            <span id = "price2">$22</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/33/89/02/338902d7bc2a84778f1faca5ec0aa6ae.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Aelfric Eden Corduroy Plaid Fake Two Jacket </p>
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
                                <span id = "price1">$17.2</span>
                                <span id = "price2">$13.7</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Minaka Long Sleeve Button Shirt </p>
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
                                <span id = "price1">$21.9</span>
                                <span id = "price2">$17.5</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
        </div>

        <div className="All-Categories-2">
            <div className="Categories-1">
                <div className="img-des">
                    <img src="https://i.pinimg.com/736x/c9/74/a4/c974a41ec07bac6017c5937be097be4d.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| White Striped T-shirt </p>
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
                            <span id = "price1">$11.3</span>
                            <span id = "price2">$9</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Aqua Checkered Long Sleeve Button Shirt </p>
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
                                <span id = "price1">$26.5</span>
                                <span id = "price2">$21.2</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Red Striped Shirt </p>
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
                                <span id = "price1">$24.6</span>
                                <span id = "price2">$19.6</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
        </div>
        




    </div>
  )
}

export default Categoies