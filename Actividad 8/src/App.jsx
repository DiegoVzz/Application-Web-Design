import React, { useState } from 'react';
import HeroForm from './components/HeroForm';
import HeroCard from './components/HeroCard';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [editingHero, setEditingHero] = useState(null);

  const addHero = (hero) => {
    if (editingHero !== null) {
      const updatedHeroes = heroes.map((h, index) =>
        index === editingHero ? hero : h
      );
      setHeroes(updatedHeroes);
      setEditingHero(null);
    } else {
      setHeroes([...heroes, hero]);
    }
  };

  const deleteHero = (index) => {
    const newHeroes = heroes.filter((_, i) => i !== index);
    setHeroes(newHeroes);
  };

  const editHero = (index) => {
    setEditingHero(index);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Registro de Superhéroes</h1>
      <HeroForm onSubmit={addHero} editingHero={editingHero !== null ? heroes[editingHero] : null} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {heroes.map((hero, index) => (
          <HeroCard
            key={index}
            hero={hero}
            onDelete={() => deleteHero(index)}
            onEdit={() => editHero(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
