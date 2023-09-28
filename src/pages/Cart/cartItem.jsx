import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'



const CartItem = (props) => {
    const { id, Name, Price, Image } = props.data;
    const { addToCart, cartItem, removeFromCart, updateAmount  } = useContext(ShopContext);


    return (
        <div className='container-fluid d-flex  justify-content-center'>
            <div className='cartItem p-2 justify-content-center row col-12 col-lg-8'>
                <img src={Image} className=' img-fluid'></img>
                <div className='Description'>
                    <p>
                        <b>{Name}</b>
                    </p>
                    <p>${Price}</p>
                    <div className='countHandler'>
                        <button onClick={() => removeFromCart(id)} className=''><strong>-</strong></button>
                        <input value={cartItem[id]} onChange={(e) => updateAmount(id, Number(e.target.value))} disabled />
                        <button onClick={() => addToCart(id)}><strong>+</strong></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
