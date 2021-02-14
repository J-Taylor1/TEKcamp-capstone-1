import React from 'react';
import Product from './../../components/Product';
import './main.scss';
import Vinyl from './../../asset/vinyl.json';


function Main() {

    const myData = Vinyl;
    console.log(myData);
    return (
        <div className='home'>
            <form className="search">
                <input type="text"></input><input type="submit"></input> 
            </form>
            <div className="home-row">
            {myData.slice(0, 3).map((product, i) => (
                <Product
                  key={i}
                  id={product.id}
                  artist={product.artist}
                  title={product.title}
                  price={product.price}
                  genre={product.genre}
                  img={product.img}
                  year={product.release_year}
                  label={product.label}
                  country={product.country}
                  qty={product.qty}
                  track={product.tracklist}
                />
            ))}
               
            </div>
            <div className="home-row">
            {myData.slice(3, 5).map((product, i) => (
                <Product
                  key={i}
                  artist={product.artist}
                  title={product.title}
                  price={product.price}
                  genre={product.genre}
                  img={product.img}
                  year={product.release_year}
                  label={product.label}
                  country={product.country}
                  qty={product.qty}
                  track={product.tracklist}
                />
            ))}
            </div>
            <div className="home-row">
            {myData.slice(5, 8).map((product, i) => (
                <Product
                  key={i}
                  artist={product.artist}
                  title={product.title}
                  price={product.price}
                  genre={product.genre}
                  img={product.img}
                  year={product.release_year}
                  label={product.label}
                  country={product.country}
                  qty={product.qty}
                  track={product.tracklist}
                />
            ))}
            </div>
            <div className="home-row">
            {myData.slice(8, 10).map((product, i) => (
                <Product
                  key={i}
                  artist={product.artist}
                  title={product.title}
                  price={product.price}
                  genre={product.genre}
                  img={product.img}
                  year={product.release_year}
                  label={product.label}
                  country={product.country}
                  qty={product.qty}
                  track={product.tracklist}
                />
            ))}
               
            </div>
      </div>
    )

}

export default Main;