// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Asignaturas from './pages/Asignaturas';
import Actividades from './pages/Actividades';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Asignaturas />} />
        <Route path="/asignatura/:id" element={<Actividades />} />
      </Routes>
    </Router>
  );
}

export default App;
