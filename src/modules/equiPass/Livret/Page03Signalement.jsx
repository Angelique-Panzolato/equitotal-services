import React from "react";
import "./Page03Signalement.css";
import Signalement from "./assets/signalement.png";

export default function Page03Signalement({ data }) {
  return (
    <div className="livret-page page03-container">

      <h2>Signalement graphique</h2>

      <div className="page03-info">
        <p><strong>Code transpondeur :</strong> {data.transpondeur}</p>
        <p><strong>Sexe :</strong> {data.sexe}</p>
        <p><strong>Robe :</strong> {data.robe}</p>
        <p><strong>UELN :</strong> {data.ueln}</p>
      </div>

      <div className="page03-image-wrapper">
        <img 
          src={Signalement}
          alt="Signalement graphique du cheval"
          className="page03-image"
        />
      </div>

    </div>
  );
}
