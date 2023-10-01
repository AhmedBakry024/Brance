import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/shop-context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'
import Modal from 'react-modal';


const ProductDetails = (props) => {
    const { id, Name, Brand, Price, Image, Description, Year } = props.data;
    const { addToCart, cartItem, removeFromCart } = useContext(ShopContext);
    const [modal, setModal] = useState(false);

    const cartItemAmount = cartItem[id];

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
            if (window.innerWidth > 425 && (navigator.userAgent.includes("Windows") || navigator.userAgent.includes("Mac OS X"))) {
                document.body.style.paddingRight = '15px';
            }

        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [modal]);

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
        <div className='col-6 col-md-4 col-lg-3 px-0 mb-4 d-flex justify-content-center' >
            <div className=' myCard pt-4 '>
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
                            <br />
                            <button onClick={() => removeFromCart(id)} className='plus-minus minus align-self-center'></button>
                            <input className='productAmount' value={cartItem[id]} onChange={(e) => updateAmount(id, Number(e.target.value))} disabled />
                            <button onClick={() => { addToCart(id); notify() }} className='plus-minus plus align-self-center'></button>
                            <br /><br />
                        </div>
                        :
                        <>
                            <button className='addToCartBtn' onClick={() => { addToCart(id); notify() }}>
                                Add To Cart
                            </button><br /><br />
                        </>
                    }

                </div>
            </div>
            <div className='modal-div'>
                <Modal isOpen={modal} onRequestClose={() => setModal(false)} className="Modal" overlayClassName="Overlay">
                    <div className='row m-1 justify-content-end'>
                        <button onClick={() => setModal(false)} className='btn btn-close me-2  '></button>
                    </div>
                    <div className='row m-1 d-flex justify-content-center justify-content-lg-start text-center'>
                        <div className=' col-md-4'>
                            <div className='d-none d-md-block'>
                                <br /><br /><br /><br /><br />
                            </div>
                            <img src={Image} className=' img-fluid'></img>
                        </div>
                        <div className="Description col-md-7">
                            <br />
                            <div className=' d-none d-lg-block'>
                                <br /><br /><br /><br />
                            </div>
                            <p>
                                <span className=' fs-2 fw-bold'>{Name}</span><br />
                                <span className=' fs-6 fw-bold'>{Brand}</span>
                            </p>
                            <p >{Description}</p>
                            <p className=' fw-semibold'>Release year: {Year}</p>

                            <br className='d-none d-lg-block' />

                            <b className=' fs-5'> Price: ${Price}</b><br />
                            {cartItemAmount > 0 ?
                                <>
                                    <br />
                                    <button onClick={() => removeFromCart(id)} className='plus-minus minus'></button>
                                    <input className='productAmount' value={cartItem[id]} onChange={(e) => updateAmount(id, Number(e.target.value))} disabled />
                                    <button onClick={() => { addToCart(id); notify() }} className='plus-minus plus'></button>
                                    <br />

                                    <br className=' d-lg-none' />
                                </>
                                :
                                <>
                                    <button className='addToCartBtn' onClick={() => { addToCart(id); notify() }}>
                                        Add To Cart
                                    </button>
                                </>
                            }

                        </div>
                        <br />
                        
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
