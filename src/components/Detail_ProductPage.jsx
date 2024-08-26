import "./Detail_ProductPage.css"
import {Routes, Route, Link} from 'react-router-dom'
import React, { useState } from 'react';

function Detail() {
    const [des1, setDes1] = useState();

    const updateDes1 = () => {
        setDes1("hello1")
    }

    const [des2, setDes2] = useState();

    const updateDes2 = () => {
        setDes1("hello2")
    }

    const [des3, setDes3] = useState();

    const updateDes3 = () => {
        setDes1("hello3")
    }

    const [des4, setDes4] = useState();

    const updateDes4 = () => {
        setDes1("hello4")
    }



  return (
    <div className="Detail">
        <div className="Back">
            <Link id = "back" to = "/products">{'<'} PRODUCTS</Link>
        </div>
        <div className="Clothes-Description">
            <div className="Clothes">
                <div className="left-side">
                    <div onClick={updateDes1} className="side1">

                    </div>
                    <div onClick={updateDes2} className="side2">

                    </div>
                    <div onClick={updateDes3} className="side3">

                    </div>
                    <div onClick={updateDes4} className="side4">

                    </div>
                </div>
                
                <div className="right-side">
                    <div className="des1">
                        <div id="des1">{des1}</div>
                    </div>
                    <div className="des2">
                        {des2}
                    </div>
                    <div className="des3">
                        {des3}
                    </div>
                    <div className="des4">
                        {des4}
                    </div>
                </div>
                

            </div>

            <div className="Description">
                <h1>Men's Checkered Long<br/> Sleeve Button Shirt</h1>
                <span id = "ds-price">$27,6</span>
                <span id = "ds2-price">$20,3</span>
                <div className="Select">
                    <div className="size-title">
                        <h2>Select size</h2>
                    </div>

                    <div className="size">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>

                    <div className="amount">
                        <button>-</button>
                        <div className="amout-product">
                            <label>1</label>
                        </div>
                        <button>+</button>
                    </div>

                    <div className="add-to-cart">
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="More-Detail">
            <div className="m-detail-title">
                <h1>Details</h1>
            </div>
            <div className="paragraph-detail">
                <p>
                    It is a long established fact that a reader will be distracted by<br/>
                    the readable content of a page when looking at its layout. The<br/>
                    point of using Lorem Ipsum is that it has a more-or-less<br/>
                    normal distribution of letters, as opposed to using 'Content<br/> here, content here
                </p>
                
            </div>
            <div className="ul-detail">
                <ul>
                    <li>Form: modern</li>
                    <li>Material: 100% Cotton</li>
                    <li>Color: White</li>
                </ul>
            </div>
            <div className="hr">
                
            </div>
            
        </div>
    </div>
  )
}

export default Detail