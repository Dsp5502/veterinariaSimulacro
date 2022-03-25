import axios from 'axios';
import React from 'react';
import { urlApi } from '../helpers/url';

const PacienteCard = ({ pacient, getdata }) => {
  const { nombre, propietario, email, direccion, telefono, sintomas, id } =
    pacient;

  const deleteData = (id) => {
    axios
      .delete(urlApi + id)
      .then((resp) => {
        getdata();
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Mascota: {''}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {''}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Direccion: {''}
        <span className='font-normal normal-case'>{direccion}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Telefono: {''}
        <span className='font-normal normal-case'>{telefono}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>
      <button
        className='bg-red-900 w-full p-3 text-white uppercase font-bold hover:bg-red-600 cursor-pointer transition-all'
        onClick={() => deleteData(id)}
      >
        eliminar
      </button>
    </div>
  );
};

export default PacienteCard;
