import "./CategoiesProductPage-2.css";
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

function Categories2() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    }

  const products = [
    { id: 7, name: "Hombres Capucha térmica", price: 20.1, salePrice: 16, imageUrl: "https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg" },
    { id: 8, name: "Contrast Color Pullover Hoodie Mens", price: 29.8, salePrice: 23.8, imageUrl: "https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg" },
    { id: 9, name: "Waffle Pattern Hoodie", price: 20, salePrice: 16, imageUrl: "https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg" },
    { id: 10, name: "Men's New York Hoodies", price: 17.6, salePrice: 14, imageUrl: "https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg" },
    { id: 11, name: "Color Block Sleeve Hoodies", price: 24.2, salePrice: 19.3, imageUrl: "https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg" },
    { id: 12, name: "Aonga - Hoodie for Men", price: 20.4, salePrice: 16.32, imageUrl: "https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg" },
  ];

  return (
    <div className="Categories">
        <div className="Categoriesd-title">
            <h1 id="ctgr-tt">PRODUCTS</h1>
        </div>
        <div className="Categories-nav">
            <Link to="/products" id="ctgr-nav2">SHIRTS</Link>
            <Link to="/products2" id="ctgr-nav1">HOODIES</Link>
            <Link to="/products3" id="ctgr-nav3">SWEATERS</Link>
            <Link to="/products4" id="ctgr-nav4">TANK TOPS</Link>
        </div>
        <div className="all-product-tag">
            <h1>All Products</h1>
        </div>
        <div className="All-Categories2">
        {products.map((product) => (
                    <div key={product.id} className={`Categories-${product.id}`}>
                        <div className="img-des">
                            <Link to={`/detail/${product.id}`}>
                                <img src={product.imageUrl} width={'380px'} height={'480px'} alt={product.name} />
                            </Link>
                            <p>| <Link to={`/detail/${product.id}`}>{product.name}</Link></p>
                            <div className="star-detail">
                                <div className="star">
                                    {[...Array(5)].map((_, index) => (
                                        <p key={index} id="rate"><i className="fa-solid fa-star"></i></p>
                                    ))}
                                </div>
                                <div className="detail">
                                    <p id="description">

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

export default Categories2;