import React from 'react';

const CuisineLabels = ({ changeCuisine, currentCuisine }) => {
  const cuisines = ['chinese', 'singaporean', 'malaysian', 'korean', 'indian', 'japanese', 'fusion', 'western', 'misc.', 'all'];

  const handleClick = (e) => {
    changeCuisine(e.target.innerText);
  };

  return (
    <div className='cuisine-label-container'>
      {cuisines.map((cuisine, i) => (
        <div key={i} className='cuisine-labels'>
          {' '}
          <h4 className={currentCuisine === cuisine ? 'highlighted' : null} onClick={handleClick}>
            {cuisine}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default CuisineLabels;
