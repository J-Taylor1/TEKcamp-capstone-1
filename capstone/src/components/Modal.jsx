import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';


export default function({ img, open, children, onClose, artist,title,genre,label,country,year, track}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className="OVERLAY_STYLES"></div>
        <div className="MODAL_STYLES">
            <div className="Modal-info">            
            <strong>{artist}</strong>
            <p>{title}</p>
            <p><small>{genre}</small></p>
            <p><small>{label}</small></p>
            <p><small>{`Released In: ${country},${year}`}</small></p>
            <p><small></small></p>
            <img src={img} alt="test"/>
            <p><strong>{track}</strong></p>
            <button onClick={onClose}>Close</button>
            {children}
            </div>
            
        </div>
        
        </>,
        document.getElementById('portal')
    )
};