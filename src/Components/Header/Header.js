import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;