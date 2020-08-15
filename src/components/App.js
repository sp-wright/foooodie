import React, { useState } from 'react';
import Nav from './nav/Nav';
import HomeContent from './home/HomeContent';
import Backend from './addRestaurant/Backend';

function App() {
  const [clickedRestaurantBtn, setClickedRestaurantBtn] = useState(false);

  return (
    <div className='App'>
      <Nav home={() => setClickedRestaurantBtn(false)} addBtn={(e) => setClickedRestaurantBtn(e)} />
      {!clickedRestaurantBtn && <HomeContent />}
      {clickedRestaurantBtn && <Backend goHome={(e) => setClickedRestaurantBtn(e)} />}
    </div>
  );
}

export default App;
