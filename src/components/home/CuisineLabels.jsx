import React from 'react';

const CuisineLabels = () => {
  const cuisines = ['chinese', 'singaporean', 'malaysian', 'korean', 'indian', 'japanese', 'fusion', 'western', 'misc.', 'all'];

  return (
    <div className='cuisine-label-container'>
      {cuisines.map((cuisine, i) => (
        <div key={i} className='cuisine-labels'>
          {' '}
          <h4>{cuisine}</h4>
        </div>
      ))}
    </div>
  );
};

export default CuisineLabels;
