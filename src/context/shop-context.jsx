import React, { createContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../products';
import { PRODUCTSW } from '../productsw';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    if (localStorage.getItem("cartItem") == undefined) {
        for (let i = 1; i < PRODUCTS.length + PRODUCTSW.length + 1; i++) {
            cart[i] = 0;
        }
    }
    else {
        for (let i = 1; i < PRODUCTS.length + PRODUCTSW.length + 1; i++) {
            if (JSON.parse(localStorage.getItem("cartItem"))[i] == null) {
                cart[i] = 0;
            }
            else {
                cart[i] = parseInt(JSON.parse(localStorage.getItem('cartItem'))[i]);
            }
        }
    }
    localStorage.setItem("cartItem", JSON.stringify(cart));
    return JSON.parse(localStorage.getItem("cartItem"));
    
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
            if (PRODUCTS.find((product) => product.id === Number(key)) !== undefined) {
                totalPrice += cartItem[key] * (PRODUCTS.find((product) => product.id === Number(key))).Price;
            }
        }
        for (var key in cartItem) {
            if (PRODUCTSW.find((product) => product.id === Number(key)) !== undefined) {
                totalPrice += cartItem[key] * (PRODUCTSW.find((product) => product.id === Number(key))).Price;
            }
        }

        return totalPrice;
    }
    const removeAll = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + PRODUCTSW.length + 1; i++) {
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