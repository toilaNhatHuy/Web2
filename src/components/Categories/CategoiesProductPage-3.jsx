import "./CategoiesProductPage-3.css";
import { Link } from 'react-router-dom';



function Categories3() {
    

    const products = [
        { id: 13, name: "Pull Lapin Motifs Japonais 'Saitama'", price: 17.2, salePrice: 13.8, imageUrl: "https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg" },
        { id: 14, name: "Herren Strickpullover mit Katzenmuster", price: 17.8, salePrice: 14.24, imageUrl: "https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg" },
        { id: 15, name: "Stylish Letter Knitted Sweater", price: 26.9, salePrice: 21.5, imageUrl: "https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg" },
        { id: 16, name: "Oversized Skeleton Knit Sweater", price: 15.7, salePrice: 12.3, imageUrl: "https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg" },
        { id: 17, name: "Special Blue Sweater", price: 17.6, salePrice: 14.8, imageUrl: "https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg" },
        { id: 18, name: "Magnificent colorful sweater", price: 30.6, salePrice: 24.5, imageUrl: "https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg" },
    ];

    return (
        <div className="Categories">
            <div className="Categoriesd-title">
                <h1 id="ctgr-tt">SWEATERS</h1>
            </div>
            <div className="Categories-nav">
                <Link to="/products" id="ctgr-nav2">SHIRTS</Link>
                <Link to="/products2" id="ctgr-nav3">HOODIES</Link>
                <Link to="/products3" id="ctgr-nav1">SWEATERS</Link>
                <Link to="/products4" id="ctgr-nav4">TANK TOPS</Link>
            </div>
            <div className="all-product-tag">
                <h1>All Products</h1>
            </div>
            <div className="All-Categories3">
                {products.map((product) => (
                    <div key={product.id} className={`Categories-${product.id}`}>
                        <div className="img-des">
                            <img src={product.imageUrl} width={'380px'} height={'480px'} alt={product.name} />
                            <Link id="p" to = {`/detail/${product.id}`}> | {product.name}</Link>
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
                            {/* <button onClick={() => handleAddToCart(product)}>BUY NOW</button> */}
                           <Link id = "BN" to = {`/detail/${product.id}`}> BUY NOW </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories3;