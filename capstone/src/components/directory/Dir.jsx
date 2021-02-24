import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../../asset/logo.png';
import '../directory/dir.scss'
function Dir() {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                className="item" 
                style={{backgroundImage: `url(${logo})`
                }}
                >
                <Link to='/shop'>Shop Here</Link>
                </div>
            </div>
        </div>
    );
};

export default Dir;