import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingScreen.css"
import DG from '../../assets/Partners/DG.png'
import MontBlanc from '../../assets/Partners/MontBlanc.png'
import Versace from '../../assets/Partners/Versace.png'
import Hugo from '../../assets/Partners/Hugo.png'
import Armani from '../../assets/Partners/Armani.png'
import Givenchy from '../../assets/Partners/Givenchy.png'
import Shop from '../Shop/Shop.jsx'

const LandingScreen = () => {

    return (
        <div className='container-fluid'>
            <div className='landing-main row'>
                <div className='background'></div>
                <div>
                    <br /><br /><br />
                    <h1 className="text-Center">Welcome to Brance</h1>
                    <br />
                    <p className="text-Center text-wrap">Your Gate to the Fragrance World </p>
                    <div className=' d-flex justify-content-center'>
                        <Link to="/shop" state={{ gender: "Men" }}>
                            <button className='shopbtn '>Shop Men's</button>
                        </Link>

                        <Link to="/shop" state={{ gender: "Women" }}>
                            <button className='shopbtn'>Shop Women's</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='rest-landing'>
                <br />
                <h1 className='partners-text'>Our Partners</h1>
                <br />
                <div className='Partners row'>
                    <img src={DG} />
                    <img src={Hugo} />
                    <img src={Versace} />
                    <img src={MontBlanc} />
                    <img src={Armani} />
                    <img src={Givenchy} />
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;
