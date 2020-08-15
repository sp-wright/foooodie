import React, { useState } from 'react';
import { addRestaurant } from '../api';

const AddRestaurant = ({ auth }) => {
  const [mE, setME] = useState({
    meOne: '',
    meTwo: '',
    meThree: '',
  });
  const [restaurantForm, setRestaurantForm] = useState({
    name: '',
    website: '',
    postcode: '',
    comment: '',
    cuisine: '',
    city: '',
    budget: [],
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (name === 'meOne' || name === 'meTwo' || name === 'meThree') {
      setME({
        ...mE,
        [name]: value,
      });
    } else if (name === 'budget') {
      const b = [];
      for (let i = 0; i < value; i++) {
        b.push('£');
      }
      setRestaurantForm({
        ...restaurantForm,
        budget: [...b],
      });
    } else {
      setRestaurantForm({
        ...restaurantForm,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setRestaurantForm({ name: '', website: '', postcode: '', comment: '', mustEats: [], cuisine: '', city: '', budget: [] });
    setME({
      meOne: '',
      meTwo: '',
      meThree: '',
    });
  };

  const postData = async () => {
    const mustEat = [mE.meOne, mE.meTwo, mE.meThree];
    const { data } = await addRestaurant(restaurantForm, mustEat);
    if (data) {
      auth(false);
    }
  };

  return (
    <div className='add-restaurant-container'>
      <div className='welcome-titles'>
        <h1>Add new Restaurant</h1>
        <h2>Welcome Vanessa!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} placeholder='name' className='name' type='text' name='name' id='name' />
        <input onChange={handleInputChange} placeholder='website' className='website' type='text' name='website' id='website' />
        <input onChange={handleInputChange} placeholder='postcode' className='postcode' type='text' name='postcode' id='postcode' />
        <textarea onChange={handleInputChange} placeholder='comment' className='comment' name='comment' id='comment' cols='25' rows='3'></textarea>
        <input onChange={handleInputChange} placeholder='must eat 1' className='must-1' type='text' name='meOne' id='must-eat-1'></input>
        <input onChange={handleInputChange} placeholder='must eat 2' className='must-2' type='text' name='meTwo' id='must-eat-2'></input>
        <input onChange={handleInputChange} placeholder='must eat 3' className='must-3' type='text' name='meThree' id='must-eat-3'></input>
        <select onChange={handleInputChange} className='cuisine-select' name='cuisine' id='cuisine'>
          <option disabled selected value='disabled'>
            choose cuisine
          </option>
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
        <select onChange={handleInputChange} className='city' name='city' id='city'>
          <option disabled selected value='disabled'>
            choose city
          </option>
          <option value='london'>london</option>
          <option value='singapore'>singapore</option>
        </select>
        <select onChange={handleInputChange} className='budget' name='budget' id='budget'>
          <option disabled selected value='disabled'>
            choose budget
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button className='add-restaurant-button' type='submit'>
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
