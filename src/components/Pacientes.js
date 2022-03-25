import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { urlApi } from '../helpers/url';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  const getData = () => {
    axios
      .get(urlApi)
      .then((resp) => setPacientes(resp.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex'>
      <Formulario pacientes={pacientes} setPacientes={setPacientes} />
      <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} />
    </div>
  );
};

export default Pacientes;
