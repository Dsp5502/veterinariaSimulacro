import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-col    md:flex-row m-5  mb-10 '>
        <NavLink
          className='mx-5 text-xl font-bold hover:text-indigo-600'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='mx-5 text-xl font-bold hover:text-indigo-600 '
          to='/pacientes'
        >
          Ingresar Paciente
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
