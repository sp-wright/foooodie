import React from 'react';

const CountryLabels = ({ changeCity }) => {
  const cities = ['London', 'Singapore'];

  const handleClick = (e) => {
    const clickedCity = e.target.innerText.toLowerCase();
    changeCity(clickedCity);
  };

  return (
    <div className='country-label-container'>
      {cities.map((city, i) => (
        <div key={i} className='country-labels'>
          {' '}
          <h2 onClick={handleClick}>{city}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountryLabels;
