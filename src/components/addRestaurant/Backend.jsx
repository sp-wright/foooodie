import React, { useState } from 'react';
import Login from './Login';
import AddRestaurant from './AddRestaurant';

const Backend = ({ goHome }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  return (
    <div>
      {!isAuthorised && <Login goHome={(e) => goHome(e)} auth={(e) => setIsAuthorised(e)} />}
      {isAuthorised && (
        <AddRestaurant
          auth={(e) => {
            setIsAuthorised(e);
            goHome(e);
          }}
        />
      )}
    </div>
  );
};

export default Backend;
