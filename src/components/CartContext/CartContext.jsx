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

    const decreaseQuantity = (id, selectedSize) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.selectedSize === selectedSize && item.quamtity > 1
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) } 
                    : item
            )
        );
    };
    
    const increaseQuantity = (id, selectedSize) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.selectedSize === selectedSize && item.quantity
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