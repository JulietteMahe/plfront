import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import home from '../../assets/logos/menu.png';
import search from '../../assets/logos/search.png';
import login from '../../assets/logos/login.png';

function Navbar () {


    return (
        <div className='Navbar'>
            <div className='left-container'>
                <div className="logo-container">
                    <NavLink 
                    to='/' className="logo-link"
                    ><img className='nav-logo' src={home} alt="logo" />
                    </NavLink>
                    <NavLink 
                    to="/search" 
                    className="logo-link"
                    >
                    <img className='nav-logo' src={search} alt="search" />
                    </NavLink>
                    <NavLink to="/login" className="logo-link"
                    >
                    <img className='nav-logo' src={login} alt="login" />
                    </NavLink>
                </div>
            </div>

        </div>
    );
};
export default Navbar;