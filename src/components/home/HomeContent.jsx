import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import CountryLabels from './CountryLabels';
import CuisineLabels from './CuisineLabels';
import RestaurantCard from './RestaurantCard';

const HomeContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState('london');
  const [cuisine, setCuisine] = useState('all');

  useEffect(() => {
    setCuisine('all');
    const callAPI = async () => {
      const { data } = await fetchData(city);
      setRestaurants(data);
    };
    callAPI();
  }, [city]);

  useEffect(() => {
    const callAPI = async () => {
      const { data } = await fetchData(city);
      if (cuisine !== 'all') {
        const filteredRestaurant = data.filter((r) => r.cuisine === cuisine);
        setRestaurants(filteredRestaurant);
      } else {
        setRestaurants(data);
      }
    };
    callAPI();
  }, [cuisine, city]);

  return (
    <section className='main-content'>
      <CountryLabels currentCity={city} changeCity={(city) => setCity(city)} />
      <CuisineLabels currentCuisine={cuisine} changeCuisine={(cuisine) => setCuisine(cuisine)} />
      <div className='restaurant-card-container'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} index={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default HomeContent;
