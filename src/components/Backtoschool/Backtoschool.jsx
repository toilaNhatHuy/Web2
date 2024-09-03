import './Backtoschool.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Backtoschool() {
    const products = [
        {
            id: 25,
            name: "Fleece-Lined Teddy",
            price: 20.0,
            salePrice: 11.5,
            imageUrl: "https://i.pinimg.com/736x/12/45/be/1245be5bfedfdcd526407464687739ef.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR2uYos_TorihA9rdl74MsNstnX2aGmXTcKAvIw3hrJKim83C9FqH073o8g_aem_5nqGG_jwx3AiksNbJl4k2g",
        
        },
        {
            id: 26,
            name: "Unisex Windbreaker Jacket",
            price: 25.0,
            salePrice: 20.0,
            imageUrl: "https://i.pinimg.com/564x/90/a0/68/90a0680234773627bde728fe3c269852.jpg",
            
        },
        {
            id: 27,
            name: "Long-Sleeve Striped Shirt",
            price: 15.0,
            salePrice: 12.0,
            imageUrl: "https://i.pinimg.com/564x/be/31/b4/be31b4eeaf0aa9a55c8e96d9f0cf1f6d.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3UacouJrnXTgqR_pMYP3A4fb_WrHdXLeQwJRsKdZSpY3sxSOOeojcBv3Y_aem_-WGdSNpSmvgRghR6xkSJYQ",
        },
        {
            id: 28,
            name: "Charmkpr Men Tops 2023",
            price: 30.0,
            salePrice: 25.0,
            imageUrl: "https://i.pinimg.com/564x/54/84/64/54846432b91b0814bd1720f1088d162c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3gPHad05w9ntwuY1THNrNRSiLA61sHvLQIBXJCBOOdDsVH6MkQRdMZ-XU_aem_dwXXze-IobDYkFsVDbrvag",
            
        },
        {
            id: 29,
            name: "Jacket Cool",
            price: 40.0,
            salePrice: 35.0,
            imageUrl: "https://i.pinimg.com/564x/eb/b5/4e/ebb54e6fbc2ff1012e022ddbb0c30d29.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR34NLDyyh58_yA6LfY6bTW07twt65opbQnFERm76JFQXNRzwZ7owW1KvCE_aem_Mu7sQ3WTue94HZY5uAvDXg",
            
        },
        {
            id: 30,
            name: "Shorts Summer",
            price: 18.0,
            salePrice: 15.0,
            imageUrl: "https://i.pinimg.com/564x/6e/87/b3/6e87b3498074e90123c35f5ed744e55b.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3nOERhF_BUm9JhBmUNixSfXGd3X1sQ1JBTPCmEHX_4P8Ht0tMWCbCVf9Q_aem_0H0zQC0uczW8tuwOHNKI7A",
            
        }
    ];


    const [timeLeft, setTimeLeft] = useState(10); 
    const [saleStarted, setSaleStarted] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            setSaleStarted(true);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

  return (
    <div>
            {!saleStarted ? (
                <div className="countdown-all">
                    <div className='countdown'>
                        <h2>Sale starts in: {formatTime(timeLeft)}</h2>
                    </div>
                </div>
                
            ) : (
                <div className="Categories5">
                    <div className="Categories-title">
                        <h1 id="ctgr-tt">BACK TO SCHOOL</h1>
                    </div>
                    
                    <div className="all-product-tag">
                        <h1>All Products</h1>
                    </div>
                    <div className="All-Categories5">
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
                    )}
        </div>
  )
}

export default Backtoschool