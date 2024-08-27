import './Categoies_ProductPage.css'
import {Routes, Route, Link} from 'react-router-dom'
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
                    <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <div className="star-detail">
                        <div className="star">
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                            <span id = "price2">$20.3</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Men's Checkered Long Sleeve Button Shirt </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                                <span id = "price2">$20.3</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Men's Checkered Long Sleeve Button Shirt </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                                <span id = "price2">$20.3</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
        </div>

        <div className="All-Categories-2">
            <div className="Categories-1">
                <div className="img-des">
                    <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| Men's Checkered Long Sleeve Button Shirt </p>
                    <div className="star-detail">
                        <div className="star">
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
                            <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                            <span id = "price2">$20.3</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Men's Checkered Long Sleeve Button Shirt </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                                <span id = "price2">$20.3</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/474x/1f/0d/4f/1f0d4fae8d75a57a3a495ed09c085fef.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Men's Checkered Long Sleeve Button Shirt </p>
                        <div className="star-detail">
                            <div className="star">
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
                                <p id="rate"><i class="fa-solid fa-star"></i></p>
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
                                <span id = "price2">$20.3</span>

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