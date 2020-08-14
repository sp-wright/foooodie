import React from 'react';

const AddRestaurant = () => {
  return (
    <div className='add-restaurant-container'>
      <div className='welcome-titles'>
        <h1>Add new Restaurant</h1>
        <h2>Welcome Vanessa!</h2>
      </div>
      <form>
        <input placeholder='name' className='name' type='text' name='name' id='name' />
        <input placeholder='website' className='website' type='text' name='website' id='website' />
        <input placeholder='postcode' className='postcode' type='text' name='postcode' id='postcode' />
        <textarea placeholder='comment' className='comment' name='comment' id='comment' cols='25' rows='3'></textarea>
        <input placeholder='must eat 1' className='must-1' type='text' name='must-eat-1' id='must-eat-1'></input>
        <input placeholder='must eat 2' className='must-2' type='text' name='must-eat-2' id='must-eat-2'></input>
        <input placeholder='must eat 3' className='must-3' type='text' name='must-eat-3' id='must-eat-3'></input>
        <label className='cuisine-select-label' for='cuisine'>
          cuisine
        </label>
        <select className='cuisine-select' name='cuisine' id='cuisine'>
          <option value='chinese'>chinese</option>
          <option value='singaporean'>singaporean</option>
          <option value='malaysian'>malaysian</option>
          <option value='korean'>korean</option>
          <option value='indian'>indian</option>
          <option value='japanese'>japanese</option>
          <option value='fusion'>fusion</option>
          <option value='western'>western</option>
          <option value='misc.'>misc.</option>
        </select>
        <label className='city-select-label' for='city'>
          city
        </label>
        <select className='city' name='city' id='city'>
          <option value='london'>london</option>
          <option value='singapore'>singapore</option>
        </select>
        <button className='add-restaurant-button' type='submit'>
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
