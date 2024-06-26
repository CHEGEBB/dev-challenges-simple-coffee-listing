import React from 'react';
import {Card} from './components/cards/cards';
import './components/cards/cards.scss';
import Vector from './images/vector.svg';



function App() {
  return (
    <div className="App">
      <div className="product-list">
       
        <div className="unique">
        <h1 className="heading">Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p></div>
        
        <div className="spans-container">
        <button className="all-products">All Products</button>
        <button className="available-now">Available Now</button>
        </div>
        <div className='coffee-cards'>
        <Card />
        </div>
    </div>
    </div>
  );
}

export default App;
