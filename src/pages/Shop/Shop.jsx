import React, { useState } from 'react';
import { PRODUCTS, getProducts } from '../../products';
import ProductDetails from './ProductDetails'
import './shop.css'

const Shop = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const pageProducts = getProducts(page, limit);
    const nextPage = () => {
        if (page * limit < PRODUCTS.length) {
            setPage((prev) => prev + 1);
            window.scrollTo(0, 0);
        }
    }
    const prevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className='Shop container-fluid'>
            <br/>
            <div className='ShopTitle row text-center'>
                <h1>Men's Fragrances</h1><br />
            </div>
            <br/><br/>
            <div className='products row d-flex'>
                {pageProducts.map((products) => <ProductDetails data={products}/>)}
                {/* {PRODUCTS.map((product) => <ProductDetails data={product} />)} */}
            </div>
            <div className=' text-center'>
                <p className='fs-5 pagesWord'>Pages</p>
            </div>
            <div className='paging'>
                {page > 1 ?
                    <button onClick={() => prevPage()}>Prev</button>
                    
                    :
                    <button className='dimmed'>Prev</button>
                }
                <input value={page} disabled></input>
                {page * limit < PRODUCTS.length ? 
                <button onClick={() => nextPage()}>Next</button>
                    :
                    <button className='dimmed'>Next</button>
                } 
            </div>
        </div>
    );
}

export default Shop;
