import React from 'react';
import {Card} from './components/cards/cards';
import './cards.scss'


function App() {
  return (
    <div className="App">
      <div className="product-list">
        <h1 className="heading">Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className='span-container'> <span className='all'>All Products</span> <span className='avail'>Available Now</span></div>
        <div className='coffee-cards'>
        <Card />
        </div>
    </div>
    </div>
  );
}

export default App;
