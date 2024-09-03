import'./SaleHomePage.css';
import React  from 'react';
import {Link} from 'react-router-dom'
function Sale() {
  return (
    
      <div className="Sale-All">
        <div className="right-sl">
          <h3 id = "h3-1">Sale</h3>
        </div>
        <div className="Sale">
          <Link className="sale-1" to = "/backtoschool">
            <label id = "bts" htmlFor="shop-btn">Back To School</label>
            <button id = "shop-btn">Shop</button>
          </Link>
          <div className="sale-2-3-4">
            <Link className="sale-2" to = "/products">
                
                  <label id = "shirts" htmlFor="shopbtn">Sale 30% for shirts</label>
                  <button id = "shop-btn">Shop</button>
                

            </Link>
            <div className="sale-3-4">
              <Link className="sale-3" to = "/products2">
                <p id = "hoodies" htmlFor="shopbtn">Sale 50% for hoodies</p>
                <button id = "shop-btn">Shop</button>
              </Link>
              <Link className="sale-4" to = "/products3">
                <p id = "sweaters" htmlFor="shopbtn">Sale 20% for sweaters</p>
                <button id = "shop-btn">Shop</button>
              </Link> 
            </div>
            
        </div>
      </div>
        


      </div>
      


  )
}

export default Sale