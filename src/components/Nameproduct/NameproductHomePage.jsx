import './NameproductHomePage.css'
import React from 'react';
import {Link} from 'react-router-dom'
function Nameproduct() {
  return (
    <div className="Nameproduct">
        <div className="np-title">
            <h1>NAME PRODUCT</h1>
        </div>

        <div className="np-paragraph">
            <p>Introducing our new local brand collection: chic, high-quality shirts crafted for comfort and style.</p>
        </div>

        <Link to = "/products" className="np-button">
            <button id ="np-btn">Shop</button>
        </Link>
    </div>
  )
}

export default Nameproduct