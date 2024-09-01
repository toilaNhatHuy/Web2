import "./CategoiesProductPage-4.css";
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

function Categories4() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    }

  const products = [
    { id: 19, name: "Men's Kristina Ribbed Brami", price: 11.6, salePrice: 7.8, imageUrl: "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg" },
    { id: 20, name: "Unique Tank Top", price: 14.6, salePrice: 10.1, imageUrl: "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg" },
    { id: 21, name: "Popular Tank Top", price: 9.8, salePrice: 5.9, imageUrl: "https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg" },
    { id: 22, name: "Our Brand New Tank Top", price: 8.7, salePrice: 4.3, imageUrl: "https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg" },
    { id: 23, name: "BASIQUINHAS", price: 9.2, salePrice: 5.1, imageUrl: "https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg" },
    { id: 24, name: "Body Duda", price: 7.4, salePrice: 4.9, imageUrl: "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg" },
  ];

  return (
    <div className="Categories">
        <div className="Categoriesd-title">
            <h1 id="ctgr-tt">PRODUCTS</h1>
        </div>
        <div className="Categories-nav">
            <Link to="/products" id="ctgr-nav2">SHIRTS</Link>
            <Link to="/products2" id="ctgr-nav4">HOODIES</Link>
            <Link to="/products3" id="ctgr-nav3">SWEATERS</Link>
            <Link to="/products4" id="ctgr-nav1">TANK TOPS</Link>
        </div>
        <div className="all-product-tag">
            <h1>All Products</h1>
        </div>
        <div className="All-Categories4">
            {products.map((product) => (
                <div key={product.id} className={`Categories-${product.id}`}>
                    <div className="img-des">
                        <img src={product.imageUrl} width={'380px'} height={'480px'} alt={product.name} />
                        <p><Link to = {`/detail/${product.id}`}>| {product.name}</Link></p> 
                        <div className="star-detail">
                            <div className="star">
                                {[...Array(5)].map((_, index) => (
                                    <p key={index} id="rate"><i className="fa-solid fa-star"></i></p>
                                ))}
                            </div>
                            <div className="detail">
                                <p id="description">
                                    {/* <Link id="link" to="/detail">More details</Link> */}
                                </p>
                            </div>
                        </div>
                        <div className="price">
                            <div className="original-price">
                                <span id="price1">${product.price.toFixed(2)}</span>
                                <span id="price2">${product.salePrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>BUY NOW</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Categories4;