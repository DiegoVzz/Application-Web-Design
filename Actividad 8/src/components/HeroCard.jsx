import React from 'react';

const HeroCard = ({ hero, onDelete, onEdit }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
      <img src={hero.photoUrl} alt={hero.heroName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h2>{hero.heroName}</h2>
      <p><strong>Nombre real:</strong> {hero.realName}</p>
      <p>{hero.info}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete} style={{ marginLeft: '0.5rem' }}>Eliminar</button>
    </div>
  );
};

export default HeroCard;
