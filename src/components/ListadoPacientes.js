import React from 'react';
import PacienteCard from './PacienteCard';

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h3>Pacientes</h3>
      {pacientes.map((pacient) => (
        <PacienteCard key={pacient.id} pacient={pacient} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
