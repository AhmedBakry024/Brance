import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { PRODUCTSW } from '../../productsw';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cartItem';
import { Link, useNavigate } from 'react-router-dom'
import './cart.css'


const Cart = () => {
    const { cartItem, getTotalPrice, removeAll } = useContext(ShopContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className="container">
            <div className='cart row text-center p-5'>
                <div>
                    <h1>Cart</h1><br />
                </div>
                <div className='cartItems'>
                    {PRODUCTS.map((product) => {
                        if (cartItem[product.id] > 0) {
                            return <CartItem data={product} />
                        }
                    })}
                    {PRODUCTSW.map((product) => {
                        if (cartItem[product.id] > 0) {
                            return <CartItem data={product} />
                        }
                    })}
                </div>
                {getTotalPrice() > 0 ?
                    <div className='checkout'>
                        <p>Subtotal: ${getTotalPrice()}</p>
                            <button onClick={() => goBack()}>Continue Shopping</button>
                        <button> Checkout </button>
                        <button onClick={()=> removeAll() }>Remove All Products</button>
                    </div>

                    :
                    <div className="emptyCart">
                        <br/><br/><br/>
                        <h1>Your cart is empty</h1>
                        <br/><br/><br/>
                            <button onClick={()=> goBack()}>Continue Shopping</button>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;
