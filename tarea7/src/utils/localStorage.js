// src/utils/localStorage.js

export const getAsignaturas = () => {
  return JSON.parse(localStorage.getItem('asignaturas')) || [];
};

export const saveAsignatura = (asig) => {
  const actuales = getAsignaturas();
  localStorage.setItem('asignaturas', JSON.stringify([...actuales, asig]));
};

export const deleteAsignatura = (id) => {
  const nuevas = getAsignaturas().filter(a => a.id !== id);
  localStorage.setItem('asignaturas', JSON.stringify(nuevas));
};

export const updateAsignatura = (actualizada) => {
  const nuevas = getAsignaturas().map(a => a.id === actualizada.id ? actualizada : a);
  localStorage.setItem('asignaturas', JSON.stringify(nuevas));
};

export const getActividades = (asignaturaId) => {
  const data = JSON.parse(localStorage.getItem('actividades')) || {};
  return data[asignaturaId] || [];
};

export const saveActividad = (asignaturaId, actividad) => {
  const data = JSON.parse(localStorage.getItem('actividades')) || {};
  const nuevas = [...(data[asignaturaId] || []), actividad];
  data[asignaturaId] = nuevas;
  localStorage.setItem('actividades', JSON.stringify(data));
};

export const deleteActividad = (asignaturaId, actividadId) => {
  const data = JSON.parse(localStorage.getItem('actividades')) || {};
  data[asignaturaId] = (data[asignaturaId] || []).filter(a => a.id !== actividadId);
  localStorage.setItem('actividades', JSON.stringify(data));
};

export const updateActividad = (asignaturaId, actividad) => {
  const data = JSON.parse(localStorage.getItem('actividades')) || {};
  data[asignaturaId] = (data[asignaturaId] || []).map(a => a.id === actividad.id ? actividad : a);
  localStorage.setItem('actividades', JSON.stringify(data));
};
