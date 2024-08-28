import "./CategoiesProductPage-3.css"
import React from 'react'
import {Link} from 'react-router-dom'
function Categoies3() {
  return (
    <div className="Categories">
        <div className="Categoriesd-title">
            <h1 id="ctgr-tt">PRODUCTS</h1>
        </div>
        <div className="Categories-nav">
            <Link to = "/products" id = "ctgr-nav2">SHIRTS</Link>
            <Link to = "/products2" id = "ctgr-nav3">HOODIES</Link>
            <Link to = "/products3" id = "ctgr-nav1">SWEATERS</Link>
            <Link to = "/products4" id = "ctgr-nav4">TANK TOPS</Link>
        </div>
        <div className="all-product-tag">
            <h1>All Products</h1>
        </div>
        <div className="All-Categories3">
            <div className="Categories-1">
                <div className="img-des">
                    <img src="https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg" width={'380px'} height={'480px'} alt="" />
                    <p>| Pull Lapin Motifs Japonais 'Saitama' </p>
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
                            <span id = "price2">$13.8</span>

                        </div>
                    </div>
                    <button>BUY NOW</button>
                </div>
                
            </div>
            <div className="Categories-2">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Herren Strickpullover mit Katzenmuster</p>
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
                                <span id = "price1">$17.8</span>
                                <span id = "price2">$14.24</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
            <div className="Categories-3">
                <div className="img-des">
                        <img src="https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg" width={'380px'} height={'480px'} alt="" />
                        <p>| Stylish Letter Knitted Sweater</p>
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
                                <span id = "price1">$26.9</span>
                                <span id = "price2">$21.5</span>

                            </div>
                        </div>
                        <button>BUY NOW</button>
                    </div>
                </div>
        </div>

        <div className="All-Categories-2">
            <div className="All-Categories3">
                    <div className="Categories-1">
                        <div className="img-des">
                            <img src="https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg" width={'380px'} height={'480px'} alt="" />
                            <p>| Oversized Skeleton Knit Sweater </p>
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
                                    <span id = "price1">$15.7</span>
                                    <span id = "price2">$12.3</span>

                                </div>
                            </div>
                            <button>BUY NOW</button>
                        </div>
                        
                    </div>
                    <div className="Categories-2">
                        <div className="img-des">
                                <img src="https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg" width={'380px'} height={'480px'} alt="" />
                                <p>| Special Blue Sweater </p>
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
                                        <span id = "price2">$14.8</span>

                                    </div>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    <div className="Categories-3">
                        <div className="img-des">
                                <img src="https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg" width={'380px'} height={'480px'} alt="" />
                                <p>| Magnificent colorful sweater </p>
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
                                        <span id = "price1">$30.6</span>
                                        <span id = "price2">$24.5</span>

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

export default Categoies3