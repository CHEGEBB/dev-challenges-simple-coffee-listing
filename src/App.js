import React from 'react';
import Card from './components/cards/cards';
import starsFill from './images/Star_fill.svg';
import star from './images/Star.svg';
import './Card.scss'


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
        <button>All Products</button>
        <button>Available Now</button>
        <Card />
    </div>
    </div>
  );
}

export default App;
