import React, { useState } from 'react';
import { callAuthorise } from '../api';

const Login = ({ goHome, auth }) => {
  const [password, setPassword] = useState('');

  const authorise = async () => {
    const {
      data: { authorised },
    } = await callAuthorise(password);

    if (authorised) {
      auth(authorised);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authorise();
    setPassword('');
  };

  return (
    <div className='login-container'>
      <h1>Are you Vanessa?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='password'>password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' name='password' id='password' />
        <button type='submit'>submit</button>
      </form>
      <h3>
        not Vanessa? <span onClick={() => goHome(false)}>go back</span>
      </h3>
    </div>
  );
};

export default Login;
