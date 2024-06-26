import React, { useEffect, useState } from 'react';
import './cards.scss';
import StarFill from '../../images/Star_fill.svg';
import Star from '../../images/Star.svg';
import Vector from '../../images/vector.svg';


export const Card = () => {
  const [products, setProducts] = useState([]);

 
  const fetchApi = async () => {
    const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
    const data = await res.json();
    setProducts(data);
  }

 
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className='product-container'>
      {products.map((product) => (
        <div className="card" key={product.id}>
          {product.popular && <span className="popular">Popular</span>}
          <img src={product.image} alt={product.name} />
          <div className='card-details'>
            <div className='card-info'>
              <h2 className='name'>{product.name} <span className='price'>{product.price}</span></h2>
            </div>
            <div className='card-ratings'>
              <div className='stars'>
                {product.rating && product.rating > 4 && <img src={StarFill} alt='filled stars'/>}
                {!product.rating && <img src={Star} alt='unfilled star'/>}
              </div>
              <p className='rating'>{product.rating || 'No ratings'} {product.votes !==0 &&<span >({product.votes} votes)</span>}</p>
              {!product.available && <p className='availability'>Sold Out</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
