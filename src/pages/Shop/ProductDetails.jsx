import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'
import Modal from 'react-modal';


const ProductDetails = (props) => {
    const { id, Name, Brand, Price, Image, Description } = props.data;
    const { addToCart, cartItem, removeFromCart } = useContext(ShopContext);
    const [modal, setModal] = useState(false);

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
        <div className='col-6 col-md-4 col-lg-3' >
            <div className='row justify-content-center'>
                <div className='Product' onClick={() => setModal(true)} >
                    <img src={Image} className=' img-fluid'></img>
                    <br />
                    <div className="Description">
                        <p>
                            <b>{Name}</b><br />
                            {Brand}
                        </p>
                        <p>${Price}</p>

                    </div>
                </div>
                
                {cartItemAmount > 0 ?
                                <div className=' d-flex justify-content-center mt-3'>
                                    <br/>
                                    <button onClick={() => removeFromCart(id)} className='plus-minus align-self-center'><strong>-</strong></button>
                                    <input className='productAmount' value={cartItem[id]} onChange={(e) => updateAmount(id, Number(e.target.value))} disabled />
                                    <button onClick={() => { addToCart(id); notify() }} className='plus-minus align-self-center'><strong>+</strong></button>
                                    <br/><br/>
                                </div>
                                :
                                <>
                                <button className='addToCartBtn' onClick={() => { addToCart(id); notify() }}>
                                    Add To Cart
                                </button><br/><br/>
                                </>
                            }

            </div>
            <div className='modal-div'>
                <Modal isOpen={modal} onRequestClose={() => setModal(false)} className="Modal" overlayClassName="Overlay">
                    <div className='row m-1 justify-content-end'>
                        <button onClick={() => setModal(false)} className='btn btn-close me-2  '></button>
                    </div>
                    <div className='row m-1 d-flex align-items-center justify-content-center text-center'>
                        <img src={Image} className=' img-fluid'></img>
                        <br />
                        <div className="Description">
                            <p>
                                <b className=' fs-2'>{Name}</b><br />
                                <b className=' fs-6'>{Brand}</b>
                            </p>
                            <p>{Description}</p><br/>
                            <b className=' fs-5'> Price: ${Price}</b><br/>

                            {cartItemAmount > 0 ?
                                <>
                                    <br/>
                                    <button onClick={() => removeFromCart(id)} className='plus-minus'><strong>-</strong></button>
                                    <input value={cartItem[id]} onChange={(e) => updateAmount(id, Number(e.target.value))} disabled />
                                    <button onClick={() => { addToCart(id); notify() }} className='plus-minus'><strong>+</strong></button>
                                    <br/><br/>
                                </>
                                :
                                <>
                                <button className='addToCartBtn' onClick={() => { addToCart(id); notify() }}>
                                    Add To Cart
                                </button><br/><br/>
                                </>
                            }
                        </div>
                    </div>

                </Modal>
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
