import React from 'react';
import './style.scss';
import logo from '../asset/RecordStore.png';


function Header() {

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt='vinyl'/>
                </div>
            </div>
        </header>
    );
};

export default Header;

