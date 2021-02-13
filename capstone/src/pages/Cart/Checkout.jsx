import React from 'react';
import './Checkout.scss';
import Subtotal from './../../components/Subtotal';

function Checkout() {
    return(
        <div className="checkout">
            <div className="checkout-left">
                <div>
                    <h2 className="checkout-title">Your cart is empty</h2>
                    <p>You have no items in your basket</p>
                </div>
            </div>
            <div className='checkout-right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;