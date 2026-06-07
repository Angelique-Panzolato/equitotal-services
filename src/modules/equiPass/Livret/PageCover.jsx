import React from "react";
import "../Livret/pageCover.css";
// Logos (à placer dans livret/assets/logos/)
import logoIfce from "./assets/logos/logo-ifce.png";
import logoSire from "./assets/logos/logo-sire.png";
import logoAngloArabe from "./assets/logos/logo-anaa.png";

export default function PageCover({ data }) {
  return (
    <div className="cover-container">

      {/* HEADER LOGOS */}
      <div className="cover-header">
        <img src={logoIfce} alt="IFCE" className="cover-logo-small" />
        <img src={logoSire} alt="SIRE" className="cover-logo-small" />
        
        {data.race === "Anglo-Arabe" && (
          <img src={logoAngloArabe} alt="Association Nationale de l’Anglo-Arabe" className="cover-logo-small" />
        )}
      </div>

      {/* TITLE */}
      <h1 className="cover-title">
        DOCUMENT D’IDENTIFICATION<br />
        d’un équidé
      </h1>

      {/* IDENTIFICATION BLOCK */}
      <div className="cover-block">
        <div className="cover-row">
          <span className="label">Nom :</span>
          <span className="value">{data.nom}</span>
        </div>

        <div className="cover-row">
          <span className="label">N° SIRE :</span>
          <span className="value">{data.sire}</span>
        </div>

        <div className="cover-row">
          <span className="label">N° UELN :</span>
          <span className="value">{data.ueln}</span>
        </div>

        <div className="cover-row">
          <span className="label">Code transpondeur :</span>
          <span className="value">{data.transpondeur}</span>
        </div>

        <div className="cover-row">
          <span className="label">Race :</span>
          <span className="value">{data.race}</span>
        </div>

        <div className="cover-row">
          <span className="label">% Sang Arabe :</span>
          <span className="value">{data.sangArabe}</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="cover-footer">
        <p>Document émis par : IFCE - SIRE, Arnac-Pompadour</p>
        <p>Association Nationale de l’Anglo-Arabe</p>
      </div>

    </div>
  );
}
