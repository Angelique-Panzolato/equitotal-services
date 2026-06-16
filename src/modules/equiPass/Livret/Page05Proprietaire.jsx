import React from "react";
import "./Page05Proprietaire.css";

export default function Page05Proprietaire({ data }) {
  return (
    <div className="livret-page page05-container">

      <h2>Partie D : Propriétaires / Détenteurs</h2>

      {/* Identification cheval */}
      <div className="page05-id">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

      {/* Tableau des propriétaires */}
      <h3>Historique des propriétaires</h3>

      <div className="page05-table">
        <div className="table-header">
          <span>Nom</span>
          <span>Adresse</span>
          <span>CP / Ville</span>
          <span>Pays</span>
          <span>Début</span>
          <span>Fin</span>
          <span>Mode</span>
        </div>

        {data.historiqueProprietaires?.length > 0 ? (
          data.historiqueProprietaires.map((p, index) => (
            <div className="table-row" key={index}>
              <span>{p.nom}</span>
              <span>{p.adresse}</span>
              <span>{p.cpVille}</span>
              <span>{p.pays}</span>
              <span>{p.dateDebut}</span>
              <span>{p.dateFin || "-"}</span>
              <span>{p.mode}</span>
            </div>
          ))
        ) : (
          <p>Aucun propriétaire enregistré.</p>
        )}
      </div>

      {/* Signature */}
      <div className="page05-signature">
        <p>Signature et cachet :</p>
        <div className="signature-box"></div>
      </div>

      {/* Autorité compétente */}
      <div className="page05-authority">
        <p>Cachet de l’autorité compétente :</p>
        <div className="signature-box"></div>
      </div>

    </div>
  );
}
