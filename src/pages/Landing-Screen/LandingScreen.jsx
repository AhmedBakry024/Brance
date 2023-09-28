import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingScreen.css"
import DG from '../../assets/Partners/DG.png'
import MontBlanc from '../../assets/Partners/MontBlanc.png'
import Versace from '../../assets/Partners/Versace.png'
import Hugo from '../../assets/Partners/Hugo.png'
import Armani from '../../assets/Partners/Armani.png'
import Givenchy from '../../assets/Partners/Givenchy.png'

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
                    <Link to="/shop">
                        <button className='shopbtn start-50 translate-middle'>Shop</button>
                    </Link>
                </div>
                
            </div>
            <br/>
            <h1 className='partners-text'>Our Partners</h1>
            <br/>
            <div className='Partners row'>
                <img src={DG}/>
                <img src={Hugo}/>
                <img src={Versace}/>
                <img src={MontBlanc}/>
                <img src={Armani}/>
                <img src={Givenchy}/>
            </div>
        </div>
    );
}

export default LandingScreen;
