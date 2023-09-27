import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem({ ...cartItem, [itemId]: cartItem[itemId] + 1 });
    }
    const removeFromCart = (itemId) => {
        setCartItem({ ...cartItem, [itemId]: cartItem[itemId] - 1 });
    }
    const updateAmount = (itemId, newAmount) => {
        setCartItem({ ...cartItem, [itemId]: newAmount });
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        for (var key in cartItem) {
            totalPrice += cartItem[key] * (PRODUCTS.find((product) => product.id === Number(key))).Price;
        }
        return totalPrice;
    }


    const contextValue = { cartItem, addToCart, removeFromCart, updateAmount, getTotalPrice };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;