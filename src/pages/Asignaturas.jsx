// src/pages/Asignaturas.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAsignaturas, saveAsignatura, deleteAsignatura, updateAsignatura } from '../utils/localStorage';

function Asignaturas() {
  const [asignaturas, setAsignaturas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [editando, setEditando] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAsignaturas(getAsignaturas());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      updateAsignatura({ id: editando.id, nombre });
    } else {
      saveAsignatura({ id: Date.now(), nombre });
    }
    setAsignaturas(getAsignaturas());
    setNombre('');
    setEditando(null);
  };

  const eliminar = (id) => {
    deleteAsignatura(id);
    setAsignaturas(getAsignaturas());
  };

  const editar = (asig) => {
    setNombre(asig.nombre);
    setEditando(asig);
  };

  return (
    <div>
      <h1>Asignaturas</h1>
      <form onSubmit={handleSubmit}>
        <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre de la asignatura" required />
        <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
      </form>

      <ul>
        {asignaturas.map(asig => (
          <li key={asig.id}>
            {asig.nombre}
            <button onClick={() => editar(asig)}>Editar</button>
            <button onClick={() => eliminar(asig.id)}>Eliminar</button>
            <button onClick={() => navigate(`/asignatura/${asig.id}`)}>Ver actividades</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Asignaturas;
