import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'


const ProductDetails = (props) => {
    const { id, Name, Price, Image } = props.data;
    const { addToCart, cartItem } = useContext(ShopContext);

    const cartItemAmount = cartItem[id];
    return (
        <div className='col-6 col-md-4 col-lg-3'>
            <div className='row justify-content-center '>
                <div className='Product'>
                    <img src={Image}></img>
                    <br/>
                    <div className="Description">
                        <p>
                            <b>{Name}</b>
                        </p>
                        <p>${Price}</p>
                    </div>
                </div>
                <button className='addToCartBtn' onClick={() => addToCart(id)}>
                    Add To Cart
                    {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                </button>
            </div>
        </div>

    );
}

export default ProductDetails;
