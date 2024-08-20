import './Nameproduct_HomePage.css'
import React , { Component}  from 'react';

function Nameproduct() {
  return (
    <div className="Nameproduct">
        <div className="np-title">
            <h1>NAME PRODUCT</h1>
        </div>

        <div className="np-paragraph">
            <p>Introducing our new local brand collection: chic, high-quality shirts crafted for comfort and style.</p>
        </div>

        <div className="np-button">
            <button id ="np-btn">Shop</button>
        </div>
    </div>
  )
}

export default Nameproduct