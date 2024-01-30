import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

function Footer () {

    return (
        <div className='Footer'>
                <div className="logo-container">
                    <NavLink 
                    to="/contact" 
                    className="logo-link"
                    >
                    Nous contacter
                    </NavLink>
                </div>
        </div>
    );
};
export default Footer;