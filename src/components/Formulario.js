import axios from 'axios';
import React, { useState } from 'react';
import { urlApi } from '../helpers/url';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();

    setNombre('');
    setPropietario('');
    setEmail('');
    setDireccion('');
    setTelefono('');
    setSintomas('');
  };

  const mascotaDatos = {
    nombre,
    propietario,
    email,
    direccion,
    telefono,
    sintomas,
  };
  const postData = () => {
    axios
      .post(urlApi, mascotaDatos)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h3 className='font-black text-3xl text-center'>Ingrese Paciente</h3>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
      >
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold w-full'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Ingrese Nombre Mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Ingrese Nombre Propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Ingrese Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='direccion'
            className='text-gray-700 uppercase font-bold'
          >
            Direccion
          </label>
          <input
            id='direccion'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Ingrese Direccion'
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='telefono'
            className='text-gray-700 uppercase font-bold'
          >
            Telefono
          </label>
          <input
            id='telefono'
            type='text'
            placeholder='Ingrese Telefono'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='text-gray-700 uppercase font-bold'
          >
            Sintomas
          </label>
          <textarea
            id='sintomas'
            placeholder='Ingrese Sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar Mascota'
        />
      </form>
    </div>
  );
};

export default Formulario;
