import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Pacientes from '../components/Pacientes';

function App() {
  return (
    <div className=' container mx-auto '>
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
