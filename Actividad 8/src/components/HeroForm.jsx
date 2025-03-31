import React, { useEffect, useState } from 'react';

const initialState = {
  realName: '',
  heroName: '',
  photoUrl: '',
  info: ''
};

const HeroForm = ({ onSubmit, editingHero }) => {
  const [hero, setHero] = useState(initialState);

  useEffect(() => {
    if (editingHero) setHero(editingHero);
    else setHero(initialState);
  }, [editingHero]);

  const handleChange = (e) => {
    setHero({ ...hero, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(hero);
    setHero(initialState);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        name="realName"
        placeholder="Nombre real"
        value={hero.realName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="heroName"
        placeholder="Nombre de superhéroe"
        value={hero.heroName}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="photoUrl"
        placeholder="URL de la foto"
        value={hero.photoUrl}
        onChange={handleChange}
        required
      />
      <textarea
        name="info"
        placeholder="Información adicional"
        value={hero.info}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">{editingHero ? 'Actualizar' : 'Agregar'} héroe</button>
    </form>
  );
};

export default HeroForm;
