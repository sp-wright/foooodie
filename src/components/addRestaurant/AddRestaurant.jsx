import React, { useState } from 'react';
import { addRestaurant } from '../api';

const AddRestaurant = ({ auth }) => {
  const [mustEat, setMustEat] = useState({});
  const [restaurantForm, setRestaurantForm] = useState({});
  const [error, setError] = useState({});

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

  const validate = (e) => {
    e.preventDefault();
    let errors = {};

    if (!restaurantForm.name) {
      errors.name = 'you must enter a name!';
    }
    if (!restaurantForm.website) {
      errors.website = 'you must enter a website!';
    }
    if (!restaurantForm.postcode) {
      errors.postcode = 'you must enter a postcode!';
    }
    if (!restaurantForm.comment) {
      errors.comment = 'you must enter a comment!';
    }
    if (!restaurantForm.cuisine) {
      errors.cuisine = true;
    }
    if (!restaurantForm.budget) {
      errors.budget = true;
    }
    if (!restaurantForm.city) {
      errors.city = true;
    }
    if (!mustEat.meOne) {
      errors.meOne = 'you must enter a must eat!';
    }
    if (!mustEat.meTwo) {
      errors.meTwo = 'you must enter a must eat!';
    }
    if (!mustEat.meThree) {
      errors.meThree = 'you must enter a must eat!';
    }
    if (Object.keys(errors).length) {
      return setError(errors);
    }
    if (!Object.keys(errors).length) {
      setError({});
      postData();
    }
  };

  const postData = async () => {
    const mustEats = [mustEat.meOne, mustEat.meTwo, mustEat.meThree];
    const { data } = await addRestaurant(restaurantForm, mustEats);
    if (data) {
      setRestaurantForm({});
      setMustEat({});
      auth(false);
    }
  };

  console.log(restaurantForm, mustEat, error);

  return (
    <div className='add-restaurant-container'>
      <div className='welcome-titles'>
        <h1>Add new Restaurant</h1>
        <h2>Welcome Vanessa!</h2>
      </div>
      <form onSubmit={validate}>
        <input
          onChange={handleInputChange}
          value={restaurantForm.name || ''}
          placeholder={!error.name ? 'name' : error.name}
          className={`name ${error.name && 'error'}`}
          type='text'
          name='name'
        />
        <input
          onChange={handleInputChange}
          value={restaurantForm.website || ''}
          placeholder={!error.website ? 'website' : error.website}
          className={`website ${error.website && 'error'}`}
          type='text'
          name='website'
        />
        <input
          onChange={handleInputChange}
          value={restaurantForm.postcode || ''}
          placeholder={!error.postcode ? 'postcode' : error.postcode}
          className={`postcode ${error.postcode && 'error'}`}
          type='text'
          name='postcode'
        />
        <textarea
          onChange={handleInputChange}
          value={restaurantForm.comment || ''}
          placeholder={!error.comment ? 'comment' : error.comment}
          className={`comment ${error.comment && 'error'}`}
          name='comment'
          cols='25'
          rows='3'
        ></textarea>
        <input
          onChange={handleInputChange}
          value={mustEat.meOne || ''}
          placeholder={!error.meOne ? 'must eat 1' : error.meOne}
          className={`must-1 ${error.meOne && 'error'}`}
          type='text'
          name='meOne'
        ></input>
        <input
          onChange={handleInputChange}
          value={mustEat.meTwo || ''}
          placeholder={!error.meTwo ? 'must eat 2' : error.meTwo}
          className={`must-2 ${error.meTwo && 'error'}`}
          type='text'
          name='meTwo'
        ></input>
        <input
          onChange={handleInputChange}
          value={mustEat.meThree || ''}
          placeholder={!error.meThree ? 'must eat 3' : error.meThree}
          className={`must-3 ${error.meThree && 'error'}`}
          type='text'
          name='meThree'
        ></input>
        <select onChange={handleInputChange} className={`cuisine-select ${error.cuisine && 'error'}`} name='cuisine'>
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
        <select onChange={handleInputChange} className={`city ${error.city && 'error'}`} name='city'>
          <option disabled selected value='disabled'>
            choose city
          </option>
          <option value='london'>London</option>
          <option value='singapore'>Singapore</option>
        </select>
        <select onChange={handleInputChange} className={`budget ${error.budget && 'error'}`} name='budget'>
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
