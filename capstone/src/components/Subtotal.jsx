import React from 'react';
import {useStateValue} from './StateProvider';
import StripeCheckout from 'react-stripe-checkout';

function Subtotal() {


    const [{cart},dispatch] = useStateValue();

    const getCartTotal = (cart) =>
    cart?.reduce((amount,item) => item.price + (item.price * .0625) + amount, 0);

    function handleToken(token, addresses){
        console.log({token, addresses})   
      }

    return(
                
                <div className="subtotal">
                <p>
                    Subtotal({cart.length} items) : $(<strong>{getCartTotal(cart).toFixed(2)}</strong>)
                </p>
                <StripeCheckout
                  stripeKey="pk_test_51INoYqGQuPYA32rKGeUGDqnMAbdZrkWj3pOPsU9pgKLmWTEf7nZMTWWG9j5rNpbg9I2QkrjkxdbITJCAsj9wTE0o00MqzvY74L"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={getCartTotal(cart).toFixed(2) * 100}
                />
                
                
                </div>

            )
}

export default Subtotal;