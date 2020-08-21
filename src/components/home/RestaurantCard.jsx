import React, { useState, useEffect } from 'react';

const RestaurantCard = ({ restaurant }) => {
  const [cutWebsite, setCutWebsite] = useState('');
  const { name, website, postcode, comment, cuisine, budget } = restaurant;

  useEffect(() => {
    let site = website.replace('https://' || 'http://', '');
    setCutWebsite(site);
  }, []);

  return (
    <div className='restaurant-card'>
      <div>
        <h1 className='restaurant-name'>{name}</h1>
        <a href={website}>{cutWebsite}</a>
        <p className='postcode'>{postcode}</p>
      </div>
      <p>{comment}</p>
      <div className='price'>
        {budget.map((b, i) => (
          <i key={i} className='fas fa-pound-sign'></i>
        ))}
      </div>
      <h5 className='cuisine'>{cuisine}</h5>
    </div>
  );
};

export default RestaurantCard;
