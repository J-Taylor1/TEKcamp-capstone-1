import React from 'react';
import Product from './../../components/Product';
import './main.scss';
import Vinyl from './../../asset/vinyl.json';


function Main() {

    console.log(Vinyl);
    return (
      <div className='home'>
            {/* <form className="search">
                <input type="text"></input><input type="submit"></input> 
            </form> */}
            <div className="home-row">
            {Vinyl.map((product, i) => (
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


{/* 

        <div className='home'>
            <form className="search">
                <input type="text"></input><input type="submit"></input> 
            </form>
            <div className="home-row">
            {Vinyl.slice(0, 3).map((product, i) => (
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
            {Vinyl.slice(3, 6).map((product, i) => (
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
                  count={product.count}
                  track={product.tracklist}
                />
            ))}
            </div>
            <div className="home-row">
            {Vinyl.slice(6, 9).map((product, i) => (
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
                  count={product.count}
                  track={product.tracklist}
                />
            ))}
            </div>
            <div className="home-row">
            {Vinyl.slice(9, 12).map((product, i) => (
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
                  count={product.count}
                  track={product.tracklist}
                />
            ))}
               
            </div> */}
      </div>
    )

}

export default Main;