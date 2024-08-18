import React from 'react';
import logo from '../assets/Images/airbnb.jpg';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md py-2 px-8'>
        <img src={logo} alt="airbnb" className='size-20'/>
    </nav>
  );
}

export default Navbar;
