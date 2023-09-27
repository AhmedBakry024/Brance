import React from 'react';
import { PRODUCTS } from '../../products';
import ProductDetails from './ProductDetails'
import './shop.css'

const Main = () => {
    return (
        <div className='Shop container-fluid'>
            <br/>
            <div className='ShopTitle row text-center'>
                <h1>Men's Fragrances</h1><br />
            </div>
            <br/><br/>
            <div className='products row d-flex'>
                {PRODUCTS.map((product) => <ProductDetails data={product} />)}
            </div>
        </div>
    );
}

export default Main;
