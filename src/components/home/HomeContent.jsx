import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import CountryLabels from './CountryLabels';
import CuisineLabels from './CuisineLabels';
import RestaurantCard from './RestaurantCard';

const HomeContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState('london');

  useEffect(() => {
    const callAPI = async () => {
      const { data } = await fetchData(city);
      setRestaurants(data);
    };
    callAPI();
  }, [city]);

  return (
    <section className='main-content'>
      <CountryLabels changeCity={(city) => setCity(city)} />
      <CuisineLabels />
      <div className='restaurant-card-container'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} index={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default HomeContent;
