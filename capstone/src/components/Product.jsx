import React, {useState} from 'react';
import './Product.scss';
import Modal from './../components/Modal';
import Vinyl from './../../src/asset/vinyl.json';
import {useStateValue} from './StateProvider';



function Product({id, track ,genre,img,price,artist,title,year,label,country,qty}){
    const myData = Vinyl;
    console.log(myData);
    // const vinyl = Vinyl.find(item => item.id == props.match.params.id)  
const [{cart}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            artist: artist,
            title: title,
            genre: genre,
            price: price,
            img: img
        }
        })
    }
    const[isOpen,setIsOpen] = useState(false)
    return(
        <div className="product">
            <div className="product-info">
                <small>Artist: </small><strong>{artist}</strong>
                <p><small>Album: </small>{title}</p>
                <p className="product-price">
                    <small>Cost: $</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-genre">
                    <small>Genre: {genre}</small>
                    <p><small>Amt: {qty}</small></p>
                </div>
            </div>
            <img src={img} alt="test"  onClick={() => setIsOpen(true)}/>
            <button onClick={addToBasket}>Add to Cart</button>


             {/* Modal feautures */}
             <Modal 
                open={isOpen} onClose={() => setIsOpen(false)}
                  artist={artist}
                  title={title}
                  price={price}
                  genre={genre}
                  img={img}
                  year={year}
                  label={label}
                  country={country}
                  qty={qty}
                  track={track}
                />
                
                
               
             
        </div>
        
);
}

export default Product;