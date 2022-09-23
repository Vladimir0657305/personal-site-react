import React from 'react';
import './Navbar.css';
import Toogle from '../Toogle/Toogle';


const Navbar = () => {
    return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Volodymyr</div>
            <Toogle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Expiriens</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>
                    Contact
                </button>
        </div>
    </div>
  )
}

export default Navbar