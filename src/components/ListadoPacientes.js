import React from 'react';
import PacienteCard from './PacienteCard';

const ListadoPacientes = ({ pacientes, getdata }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h3 className='font-black text-3xl text-center'>Pacientes</h3>
      {pacientes.map((pacient) => (
        <PacienteCard key={pacient.id} pacient={pacient} getdata={getdata} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
