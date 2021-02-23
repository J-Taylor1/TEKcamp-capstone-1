import React, {useEffect} from 'react';
import './ProductCart.scss';
import {useStateValue} from './../../components/StateProvider';


function ProductCart({id,artist,title,price,img,genre,qty} ) {

  
    const [{cart},dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="product-cart">
            <img className="product-img" src={img} alt="" />
            <div className="product-info">
                <p className="product-art">{artist}</p>
                <p className="product-album">{title}</p>
                <p className="product-price">${price}</p>
            
                <button onClick={removeItem}>Remove from Cart</button>
            </div>
            {console.log(cart)}
        </div>
        
    )
};

export default ProductCart;