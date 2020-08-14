import React, { useState } from 'react';
import Nav from './nav/Nav';
import HomeContent from './home/HomeContent';
import Login from './addRestaurant/Login';
import AddRestaurant from './addRestaurant/AddRestaurant';

function App() {
  const [clickedRestaurantBtn, setClickedRestaurantBtn] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);

  const handleAuth = (a) => {
    setIsAuthorised(a);
    setClickedRestaurantBtn(false);
  };

  return (
    <div className='App'>
      <Nav addBtn={(e) => setClickedRestaurantBtn(e)} />
      {!isAuthorised && (
        <>
          {!clickedRestaurantBtn && <HomeContent />}
          {clickedRestaurantBtn && <Login goHome={(e) => setClickedRestaurantBtn(e)} auth={handleAuth} />}
        </>
      )}
      {isAuthorised && <AddRestaurant />}
    </div>
  );
}

export default App;
