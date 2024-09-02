import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id && item.selectedSize === product.selectedSize);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedSize === product.selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id, size) => {
        setCart(prevCart => prevCart.filter(product => !(product.id === id && product.size === size)));
    };

    const decreaseQuantity = (id, size) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.size === size
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Đảm bảo số lượng không nhỏ hơn 1
                    : item
            )
        );
    };
    
    const increaseQuantity = (id, size) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity  }}>
            {children}
        </CartContext.Provider>
    );
};