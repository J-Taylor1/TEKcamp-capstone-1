import React from 'react';
import './style.scss';
import logo from '../asset/RecordStore.png';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Header() {

    const [{cart},dispatch] = useStateValue();

    console.log("my basket ", cart)

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/"><img src={logo} alt='vinyl'/></Link>
                </div>

                <div className="callToActions">
                <ul>
                    <li>
                        <Link to ="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to ="/cart">Checkout {" "}<span className="cart" style={cart.length == 0 ? {color:'black'} : {color:"red"}}>{cart?.length}</span></Link>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    );
};

export default Header;

