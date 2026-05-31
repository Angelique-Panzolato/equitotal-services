// src/features/livretNumerique/HorseCard.jsx
import React from 'react';

export default function HorseCard({ horse }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', margin: '10px', background: '#fff', color: '#333' }}>
      <img src={horse.image} alt={horse.nom} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{horse.nom}</h3>
      <p>N° SIRE : {horse.sire}</p>
      <span>{horse.livretValide ? "✅ Livret à jour" : "⚠️ Livret incomplet"}</span>
    </div>
  );
}