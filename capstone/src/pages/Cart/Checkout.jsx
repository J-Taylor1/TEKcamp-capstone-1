import React from 'react';
import './Checkout.scss';
import Subtotal from './../../components/Subtotal';
import {useStateValue} from './../../components/StateProvider';
import ProductCart from './ProductCart';

function Checkout() {

    const[{cart}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout-left">

            {
                cart.length === 0 ? (
                <div>
                    <h2 className="checkout-title">Your cart is empty</h2>
                    <p>You have no items in your basket</p>
                </div>) : (
                    <div>
                        <h2 className="cart-items">Items in Cart</h2>
                        {
                            cart.map(product => (
                                <ProductCart
                                    id={product.id}
                                    artist={product.artist}
                                    title={product.title}
                                    genre={product.genre}
                                    img={product.img}
                                    price={product.price}
                                    count={product.count}
                                />
                            ))
                        }
                    </div>
                )
            }

            
                
            </div>
            {
                cart.length > 0 && (
                    <div className='checkout-right'>
                        <Subtotal/>
                    </div>
                )
            }
            
        </div>
    )
}

export default Checkout;