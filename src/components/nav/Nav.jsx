import React from 'react';
import bear from '../../bear.png';

const Nav = ({ addBtn, home }) => {
  return (
    <nav>
      <img onClick={() => home()} className='logo' src={bear} alt='bear icon' />
      <h1 className='main-title'>Vanessa is a Foooodie</h1>
      <div onClick={() => addBtn(true)} className='nav-button'>
        <h2>Add Restaurant</h2>
      </div>
    </nav>
  );
};

export default Nav;
