import React from 'react';
import './style.scss';
import logo from '../asset/RecordStore.png';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/"><img src={logo} alt='vinyl'/></Link>
                </div>

                <div className="callToActions">
                <ul>
                    <li>
                        <Link to ="/cart">Checkout</Link>
                    </li>
                </ul>
            </div>
            </div>

            

        </header>
    );
};

export default Header;

