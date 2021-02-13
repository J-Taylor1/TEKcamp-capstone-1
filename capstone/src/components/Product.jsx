import React, {useState} from 'react';
import './Product.scss';
import Modal from './../components/Modal';
import Vinyl from './../../src/asset/vinyl.json';



function Product({id, track ,genre,img,price,artist,title,year,label,country,qty}){
    const myData = Vinyl;
    console.log(myData);
    // const vinyl = Vinyl.find(item => item.id == props.match.params.id)    

    const[isOpen,setIsOpen] = useState(false)
    return(
        <div className="product">
            <div className="product-info">
                <strong>{artist}</strong>
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-genre">
                    <small>{genre}</small>
                </div>
            </div>
            <img src={img} alt="test"  onClick={() => setIsOpen(true)}/>
            <button>Add to Cart</button>

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