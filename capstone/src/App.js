import React from 'react';

import {Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Homepage from './pages/Homepage';
import Checkout from './pages/Cart/Checkout';
import Main from './pages/Sell/Main';

// style
import './default.scss';


function App() {

  return (
   <div className="App"> 
    <Header/>
      <div className="main">
        <Switch>
          <Route exact path='/'>
            <Homepage/>
            <Footer/>
          </Route>
          <Route path='/shop'>
            <Main/>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Checkout/>

          </Route>
        </Switch>
      </div>
      
   </div>
  );
}

export default App;
