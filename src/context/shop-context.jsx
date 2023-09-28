import React, { createContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    console.log(localStorage.getItem("cartItem"));
    if (localStorage.getItem("cartItem") == undefined) {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        localStorage.setItem("cartItem", JSON.stringify(cart));
        return cart;
    }
    else {
        return JSON.parse(localStorage.getItem("cartItem"));
    }
    
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());


    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }, [cartItem])
    

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
    const removeAll = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        localStorage.setItem("cartItem", JSON.stringify(cart));
        setCartItem(cart);
    }


    const contextValue = { cartItem, addToCart, removeFromCart, updateAmount, getTotalPrice, removeAll  };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;