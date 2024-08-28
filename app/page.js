'use client'
import React, { useState } from 'react';
import { data } from './details.js';

export default function Home() {
  const [search, setSearch] = useState(''); // for seraarching with keyword matching
  const [price, setPrice] = useState(10000); //for filtering with price
  const [rating, setRating] = useState(5); // for filtering with rating

  const Card = ({ name, price, rating }) => {
    return (
      <div className='w-auto h-100 bg-white m-2 p-1 text-black rounded'>
        <p>Name:{name}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  };

  // fileters data accordint to keyword, price and rating 
  const filteredData = data.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) &&
    item.price <= price &&
    item.rating <= rating
  );

  return (
    <div className="m-5 p-5">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search an item"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      <div className="mt-4">
        <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
          Maximum Price: {price}
        </label>
        <input
          type="range"
          id="price-range"
          min="0"
          max="10000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="rating-range" className="block text-sm font-medium text-gray-700">
          Maximum Rating: {rating}
        </label>
        <input
          type="range"
          id="rating-range"
          min="1"
          max="5"
          step="1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card
              key={item.id}
              name={item.product_name}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
