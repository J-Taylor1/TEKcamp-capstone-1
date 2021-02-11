import React from 'react';
import logo from './../../asset/logo.png';
import '../directory/dir.scss'
function Dir() {
    return (
        <div className="directory">
        <div className="wrap">
            <div
            className="item" 
            style={{backgroundImage: `url(${logo})`
            }}>
                
            </div>
            <a>Shop Here</a>
        </div>
        </div>
    );
};

export default Dir;