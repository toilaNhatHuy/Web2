import './CategoiesProductPage.css';
import { Link } from 'react-router-dom';


function Categories() {


    const products = [
        { id: 1, name: "Men's Checkered Long Sleeve Button Shirt", price: 27.6, salePrice: 22.8, imageUrl: "https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg" },
        { id: 2, name: "Aelfric Eden Corduroy Plaid Fake Two Jacket", price: 17.2, salePrice: 14.1, imageUrl: "https://i.pinimg.com/736x/33/89/02/338902d7bc2a84778f1faca5ec0aa6ae.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR26Fl_Jqq437W1jVDOXwu6_XU0T2Y5AlxjxrbkVS85yqco449jmYx9RETI_aem_RJwGfmJ3iLWg96E73ve2JA" },
        { id: 3, name: "Minaka Long Sleeve Button Shirt", price: 21.9, salePrice: 18.3, imageUrl: "https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A" },
        { id: 4, name: "White Striped T-shirt", price: 11.3, salePrice: 8.8, imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5" },
        { id: 5, name: "Aqua Checkered Long Sleeve Button Shirt", price: 26.5, salePrice: 21.4, imageUrl: "https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig" },
        { id: 6, name: "Red Striped Shirt", price: 24.6, salePrice: 19.7, imageUrl: "https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw" },
    ];

    return (
        <div className="Categories">
            <div className="Categories-title">
                <h1 id="ctgr-tt">PRODUCTS</h1>
            </div>
            <div className="Categories-nav">
                <Link to="/products" id="ctgr-nav1">SHIRTS</Link>
                <Link to="/products2" id="ctgr-nav2">HOODIES</Link>
                <Link to="/products3" id="ctgr-nav3">SWEATERS</Link>
                <Link to="/products4" id="ctgr-nav4">TANK TOPS</Link>
            </div>
            <div className="all-product-tag">
                <h1>All Products</h1>
            </div>
            <div className="All-Categories">
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
                                        {/* <Link id="link" to={`/detail/${product.id}`}>More details</Link> */}
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
                            <button><Link id = "hellobaby" to = {`/detail/${product.id}`}> BUY NOW </Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;