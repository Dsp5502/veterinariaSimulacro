import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-col    md:flex-row m-5 '>
        <NavLink className='mx-5 text-xl font-bold' to='/'>
          Home
        </NavLink>
        <NavLink className='mx-5 text-xl font-bold' to='/pacientes'>
          Ingresar Paciente
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
