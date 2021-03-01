//this is header component
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className='text-center main-heading'>National Premier League</h1>
            <h3 className='text-center text-secondary mb-5'>Select player for your team</h3>
        </div>
    );
};

export default Header;