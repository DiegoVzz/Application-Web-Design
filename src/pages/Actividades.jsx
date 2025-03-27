// src/pages/Actividades.jsx

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getActividades,
  saveActividad,
  deleteActividad,
  updateActividad,
  getAsignaturas,
} from '../utils/localStorage';

function Actividades() {
  const { id } = useParams();
  const [actividades, setActividades] = useState([]);
  const [form, setForm] = useState({ tipo: '', calificacion: '', fecha: '', comentario: '' });
  const [editando, setEditando] = useState(null);
  const [nombreAsignatura, setNombreAsignatura] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setActividades(getActividades(id));
    const asig = getAsignaturas().find(a => a.id == id);
    if (asig) setNombreAsignatura(asig.nombre);
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (editando) {
      updateActividad(id, { ...form, id: editando.id });
    } else {
      saveActividad(id, { ...form, id: Date.now() });
    }
    setForm({ tipo: '', calificacion: '', fecha: '', comentario: '' });
    setEditando(null);
    setActividades(getActividades(id));
  };

  const eliminar = (actId) => {
    deleteActividad(id, actId);
    setActividades(getActividades(id));
  };

  const editar = (actividad) => {
    setForm(actividad);
    setEditando(actividad);
  };

  return (
    <div>
      <h2>Actividades de: {nombreAsignatura}</h2>
      <button onClick={() => navigate('/')}>⬅ Volver</button>
      <ul>
        {actividades.map(act => (
          <li key={act.id}>
            <strong>{act.tipo}</strong> - {act.calificacion} pts - {act.fecha}
            {act.comentario && <> - {act.comentario}</>}
            <button onClick={() => editar(act)}>Editar</button>
            <button onClick={() => eliminar(act.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>{editando ? 'Editar actividad' : 'Agregar actividad'}</h3>
      <form onSubmit={handleSubmit}>
        <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo" required />
        <input name="calificacion" value={form.calificacion} onChange={handleChange} type="number" placeholder="Calificación" required />
        <input name="fecha" value={form.fecha} onChange={handleChange} type="date" required />
        <input name="comentario" value={form.comentario} onChange={handleChange} placeholder="Comentario (opcional)" />
        <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
}

export default Actividades;
