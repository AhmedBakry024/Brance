import React from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand bg-black'>
            <div className=" container-fluid">
                <div className='navbar-brand Logo'>
                    <Link to="/" >
                        <img src={logo} className=' w-75' />
                    </Link>
                </div>
                <div className="links me-3 fs-5">
                    <Link to='/cart' className='mt-1 mt-md-0'> Cart</Link>
                    <Link to='/cart' > <ShoppingCart className='icon fs-2' /></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
