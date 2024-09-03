import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../CartContext/CartContext';

function Cart() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    
    

    const handleIncrease = (id, size) => {
        increaseQuantity(id, size);
    };

    const handleDecrease = (id, size) => {
        decreaseQuantity(id, size);
    };

    const handleDelete = (id, size) => {
        removeFromCart(id, size);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.salePrice * product.quantity, 0);
    };

    return (
        <div className="Cart">
            <div className="cart1">
                {cart.map(product => (
                    <div key={`${product.id}-${product.selectedSize}`} className="cart1-item">
                        <div className="add-to-cart-img">
                            <img src={product.mainImg} alt={product.name} />
                        </div>
                        <div className="add-to-cart-inf">
                            <h2>{product.name} </h2>
                            <p id="price">${product.salePrice.toFixed(2)}</p>
                            <p><b>SIZE</b> | {product.selectedSize}</p>
                            <div className="amount-2">
                                <button 
                                    onClick={() => handleDecrease(product.id, product.size)} 
                                    disabled={product.quantity <= 1}
                                >
                                    -
                                </button>
                                <div className="amount-product">
                                    <label>{product.quantity}</label>
                                </div>
                                <button onClick={() => handleIncrease(product.id, product.size)}>+</button>
                            </div>
                        </div>
                        <div className="delete-button">
                            <button onClick={() => handleDelete(product.id, product.size)}>
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="Order-summary">
                <div className="order">
                    <div className="odsm-title">
                        <h2>Order Summary</h2>
                    </div>
                    <div className="order-item-all">
                        <div className="order-item">
                            <div className="left-right-items">
                                <div className="left-item">
                                    {cart.map(product => (
                                        <p key={`${product.id}-${product.selectedSizesize}`}>{product.name} ({product.selectedSize})</p>
                                    ))}
                                </div>
                                <div className="right-item">
                                    {cart.map(product => (
                                        <p key={`${product.id}-${product.size}`}>${(product.salePrice * product.quantity).toFixed(2)}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="total-price">
                            <h2>- Total: <span>${calculateTotalPrice().toFixed(2)}</span></h2>
                        </div>
                        <div className="button-buy">
                        
                            <button class="boton-elegante">ADD TO CART</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;