// src/features/livretNumerique/HorseList.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import { MOCK_HORSES } from "../data/mockData"; // On importe nos données ici !
import "./HorseList.css";

export default function HorseList() {
  const navigate = useNavigate();

  return (
    <div className="chevaux-container">
      <h1 className="chevaux-title">Mes chevaux</h1>

      <div className="chevaux-grid">
        {MOCK_HORSES.map((cheval) => (
          <div
            key={cheval.id}
            className="cheval-card"
            onClick={() => navigate(`/livret/${cheval.id}`)} // Route ajustée
          >
            <div className="cheval-image-wrapper">
              <img src={cheval.image} alt={cheval.nom} className="cheval-image" />
            </div>

            <div className="cheval-info">
              <h3 className="cheval-nom">{cheval.nom}</h3>
              <p className="cheval-detail">{cheval.race}</p>
              <p className="cheval-detail">{cheval.sire}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}