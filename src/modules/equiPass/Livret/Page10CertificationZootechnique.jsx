import React from "react";
import "./Page10CertificationZootechnique.css";

export default function Page10CertificationZootechnique({ data }) {
  return (
    <div className="page10-container">

      <h2>Certificat zootechnique</h2>
      <p className="subtitle">
        Pour les échanges de reproducteurs de race pure conformément au règlement (UE) 2016/1012
      </p>

      {/* IDENTIFICATION */}
      <div className="page10-block">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
        <p><strong>N° Transpondeur :</strong> {data.transpondeur}</p>
      </div>

      {/* INFOS CHEVAL */}
      <div className="page10-block">
        <p><strong>Sexe :</strong> {data.sexe}</p>
        <p><strong>Race :</strong> {data.race}</p>
        <p><strong>% Sang Arabe :</strong> {data.sangArabe}</p>
        <p><strong>Robe :</strong> {data.robe}</p>
        <p><strong>Stud-book :</strong> {data.studbook}</p>
        <p><strong>Volume :</strong> {data.volume}</p>
      </div>

      {/* NAISSANCE */}
      <div className="page10-block">
        <p><strong>Date de naissance :</strong> {data.naissance}</p>
        <p><strong>Lieu de naissance :</strong> {data.lieuNaissance}</p>
      </div>

      {/* NAISSEUR */}
      <div className="page10-block">
        <p><strong>Naisseur(s) :</strong></p>
        <div className="box">
          {data.naisseur}
        </div>
      </div>

      {/* ORGANISME ÉMETTEUR */}
      <div className="page10-block">
        <p><strong>Organisme émetteur (adresse, téléphone, courriel) :</strong></p>
        <div className="box"></div>

        <p><strong>Fait le :</strong> {data.dateEmission}</p>
        <p><strong>À :</strong> {data.lieuEmission}</p>

        <p><strong>Cachet et signature :</strong></p>
        <div className="box"></div>
      </div>

    </div>
  );
}
