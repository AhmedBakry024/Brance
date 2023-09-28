import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'


const ProductDetails = (props) => {
    const { id, Name, Brand, Price, Image } = props.data;
    const { addToCart, cartItem } = useContext(ShopContext);

    const cartItemAmount = cartItem[id];

    const notify = () => {
        toast.info('Item successfully added to cart', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div className='col-6 col-md-4 col-lg-3'>
            <div className='row justify-content-center'>
                <div className='Product'>
                    <img src={Image} className=' img-fluid'></img>
                    <br />
                    <div className="Description">
                        <p>
                            <b>{Name}</b><br/>
                            {Brand}
                        </p>
                        <p>${Price}</p>
                    </div>
                </div>
                <button className='addToCartBtn' onClick={() => { addToCart(id); notify() }}>
                    Add To Cart
                    {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                </button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </div>

    );
}

export default ProductDetails;
