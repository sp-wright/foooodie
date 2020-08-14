import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  const { name, website, postcode, comment, cuisine, budget } = restaurant;

  return (
    <div className='restaurant-card'>
      <div>
        <h1 className='restaurant-name'>{name}</h1>
        <a href={website}>{website}</a>
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
