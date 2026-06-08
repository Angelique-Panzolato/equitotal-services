import React from "react";
import "./Page01Identification.css";

export default function Page01Identification({ data }) {
  return (
    <div className="page01-container">

      <h2>Partie A : Données d’identification</h2>

      {/* IDENTIFICATION PRINCIPALE */}
      <div className="page01-block">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>Code du transpondeur :</strong> {data.transpondeur}</p>
      </div>

      {/* INFOS CHEVAL */}
      <div className="page01-block">
        <p><strong>Sexe :</strong> {data.sexe}</p>
        <p><strong>Race :</strong> {data.race}</p>
        <p><strong>% Sang Arabe :</strong> {data.sangArabe}</p>
        <p><strong>Robe :</strong> {data.robe}</p>
      </div>

      {/* GÉNÉALOGIE */}
      <div className="page01-block">
        <p><strong>Père :</strong> {data.pere}</p>
        <p><strong>Mère :</strong> {data.mere}</p>
        <p><strong>Père de mère :</strong> {data.pereMere}</p>
      </div>

      {/* NAISSANCE */}
      <div className="page01-block">
        <p><strong>Date de naissance :</strong> {data.naissance}</p>
        <p><strong>Lieu de naissance :</strong> {data.lieuNaissance}</p>
      </div>

      {/* NAISSEUR */}
      <div className="page01-block">
        <p><strong>Naisseur(s) :</strong> {data.naisseur}</p>
      </div>

      {/* DOCUMENT ÉDITÉ */}
      <div className="page01-block">
        <p><strong>Document édité le :</strong> {data.dateEdition}</p>
        <p><strong>Cachet de l’organisme émetteur :</strong></p>
        <div className="box"></div>
      </div>

      {/* SECTION I */}
      <div className="page01-block">
        <p><strong>Section I</strong></p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

    </div>
  );
}
