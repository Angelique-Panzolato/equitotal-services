import React from "react";
import "./Page02Identification.css";

export default function Page02Identification({ data }) {
  return (
    <div className="livret-page page02-container">

      <h2 className="page02-title">Signalement du cheval</h2>

      {/* ROBE DÉTAILLÉE */}
      <div className="page02-row">
        <span className="label">Robe détaillée :</span>
        <span className="value">{data.robeDetaillee}</span>
      </div>

      {/* TÊTE */}
      <h3 className="page02-section">Tête</h3>

      <div className="page02-row">
        <span className="label">EN TÊTE :</span>
        <span className="value">{data.tete.entete}</span>
      </div>

      <div className="page02-row">
        <span className="label">LISTE :</span>
        <span className="value">{data.tete.liste}</span>
      </div>

      <div className="page02-row">
        <span className="label">LADRE :</span>
        <span className="value">{data.tete.ladre}</span>
      </div>

      {/* MEMBRES */}
      <h3 className="page02-section">Membres</h3>

      <div className="page02-row">
        <span className="label">ANT. G :</span>
        <span className="value">{data.membres.antG}</span>
      </div>

      <div className="page02-row">
        <span className="label">ANT. D :</span>
        <span className="value">{data.membres.antD}</span>
      </div>

      <div className="page02-row">
        <span className="label">POST. G :</span>
        <span className="value">{data.membres.postG}</span>
      </div>

      <div className="page02-row">
        <span className="label">POST. D :</span>
        <span className="value">{data.membres.postD}</span>
      </div>

      {/* CORPS (ÉPIS) */}
      <h3 className="page02-section">Corps (épis)</h3>

      <div className="page02-row">
        <span className="label">SS CRINI G :</span>
        <span className="value">{data.corps.ssCriniG}</span>
      </div>

      <div className="page02-row">
        <span className="label">SS CRINI D :</span>
        <span className="value">{data.corps.ssCriniD}</span>
      </div>

      <div className="page02-row">
        <span className="label">SS ENCOLURE :</span>
        <span className="value">{data.corps.ssEncolure}</span>
      </div>

      {/* SPÉCIFICITÉS */}
      <h3 className="page02-section">Spécificités</h3>

      <div className="page02-row">
        <span className="label">AUCUNE SPÉCIFICITÉ</span>
        <span className="value">{data.specificites}</span>
      </div>

      {/* ADN */}
      <h3 className="page02-section">Typage ADN</h3>

      <div className="page02-row">
        <span className="label">TYPE ADN :</span>
        <span className="value">{data.adn}</span>
      </div>

    </div>
  );
}
