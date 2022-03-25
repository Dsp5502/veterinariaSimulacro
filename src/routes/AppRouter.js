import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Pacientes from '../components/Pacientes';

function App() {
  return (
    <div className='border-2 container mx-auto mt-20'>
      <h1 className='border-2 border-red-900 text-center text-3xl'>
        Veterinaria
      </h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pacientes' element={<Pacientes />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
