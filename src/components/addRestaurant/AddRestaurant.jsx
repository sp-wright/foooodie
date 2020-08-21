import React, { useState } from 'react';
import { addRestaurant } from '../api';

const AddRestaurant = ({ auth }) => {
  const [mustEat, setMustEat] = useState({
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
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (name === 'meOne' || name === 'meTwo' || name === 'meThree') {
      return setMustEat({
        ...mustEat,
        [name]: value,
      });
    }
    if (name === 'budget') {
      const b = [];
      for (let i = 0; i < value; i++) {
        b.push('£');
      }
      return setRestaurantForm({
        ...restaurantForm,
        budget: [...b],
      });
    }
    return setRestaurantForm({
      ...restaurantForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      restaurantForm.name !== '' &&
      restaurantForm.website !== '' &&
      restaurantForm.postcode !== '' &&
      restaurantForm.comment !== '' &&
      restaurantForm.cuisine !== '' &&
      restaurantForm.city !== '' &&
      restaurantForm.budget.length !== 0 &&
      mustEat.meOne !== '' &&
      mustEat.meTwo !== '' &&
      mustEat.meThree !== ''
    ) {
      postData();
      setError(false);
    }
    setError(true);
  };

  const postData = async () => {
    const mustEats = [mustEat.meOne, mustEat.meTwo, mustEat.meThree];
    const { data } = await addRestaurant(restaurantForm, mustEats);
    if (data) {
      setRestaurantForm({ name: '', website: '', postcode: '', comment: '', mustEats: [], cuisine: '', city: '', budget: [] });
      setMustEat({
        meOne: '',
        meTwo: '',
        meThree: '',
      });
      auth(false);
    }
  };

  return (
    <div className='add-restaurant-container'>
      <div className='welcome-titles'>
        <h1>Add new Restaurant</h1>
        <h2>Welcome Vanessa!</h2>
      </div>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input onChange={handleInputChange} autoComplete='off' placeholder='name' className={`name ${error && 'error'}`} type='text' name='name' />
        <input onChange={handleInputChange} placeholder='website' className={`website ${error && 'error'}`} type='text' name='website' />
        <input onChange={handleInputChange} placeholder='postcode' className={`postcode ${error && 'error'}`} type='text' name='postcode' />
        <textarea onChange={handleInputChange} placeholder='comment' className={`comment ${error && 'error'}`} name='comment' cols='25' rows='3'></textarea>
        <input onChange={handleInputChange} placeholder='must eat 1' className={`must-1 ${error && 'error'}`} type='text' name='meOne'></input>
        <input onChange={handleInputChange} placeholder='must eat 2' className={`must-2 ${error && 'error'}`} type='text' name='meTwo'></input>
        <input onChange={handleInputChange} placeholder='must eat 3' className={`must-3 ${error && 'error'}`} type='text' name='meThree'></input>
        <select onChange={handleInputChange} className={`cuisine-select ${error && 'error'}`} name='cuisine'>
          <option disabled selected value='disabled'>
            choose cuisine
          </option>
          <option value='chinese'>Chinese</option>
          <option value='singaporean'>Singaporean</option>
          <option value='malaysian'>Malaysian</option>
          <option value='korean'>Korean</option>
          <option value='indian'>Indian</option>
          <option value='japanese'>Japanese</option>
          <option value='fusion'>Fusion</option>
          <option value='western'>Western</option>
          <option value='drinks'>Drinks</option>
          <option value='misc.'>Misc.</option>
        </select>
        <select onChange={handleInputChange} className={`city ${error && 'error'}`} name='city'>
          <option disabled selected value='disabled'>
            choose city
          </option>
          <option value='london'>London</option>
          <option value='singapore'>Singapore</option>
        </select>
        <select onChange={handleInputChange} className={`budget ${error && 'error'}`} name='budget'>
          <option disabled selected value='disabled'>
            choose cost
          </option>
          <option value={1}>Budget</option>
          <option value={2}>Normal</option>
          <option value={3}>Expensive</option>
        </select>
        <button className='add-restaurant-button' type='submit'>
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
