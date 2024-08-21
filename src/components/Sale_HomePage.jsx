import'./Sale_HomePage.css';
import React , { Component}  from 'react';
function Sale() {
  return (
    
      <div className="Sale-All">
        <div className="right-sl">
          <h3 id = "h3-1">Sale</h3>
        </div>
        <div className="Sale">
          <div className="sale-1">
            <label id = "bts" htmlFor="shop-btn">Back To School</label>
            <button id = "shop-btn">Shop</button>
          </div>
          <div className="sale-2-3-4">
            <div className="sale-2">
              <label id = "shirts" htmlFor="shopbtn">Sale 30% for shirts</label>
              <button id = "shop-btn">Shop</button>
            </div>
            <div className="sale-3-4">
            <div className="sale-3">
              <p id = "hoodies" htmlFor="shopbtn">Sale 50% for hoodies</p>
              <button id = "shop-btn">Shop</button>
            </div>
            <div className="sale-4">
              <p id = "sweaters" htmlFor="shopbtn">Sale 20% for sweaters</p>
              <button id = "shop-btn">Shop</button>
            </div> 
            </div>
            
        </div>
      </div>
        


      </div>
      


  )
}

export default Sale