import React from 'react';

const Card = ({ name, price, rating }) => {
  return (
    <div className='w-auto h-100 bg-white m-2 p-1 text-black rounded'>
      <p>Name:{name}</p>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Card;
