import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <h1>Vinyl Record's</h1>
            <p>Browse our selction of vintage Vinyl record's</p>
            <ul>
                <Link to="/main" className="navb">Records</Link>
                <Link to="/checkout" className="navb">Checkout</Link>
            </ul>
        </nav>
    )
}

export default NavBar;