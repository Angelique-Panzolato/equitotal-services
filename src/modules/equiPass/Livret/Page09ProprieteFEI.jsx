import React from "react";
import "./Page09ProprieteFEI.css";

export default function Page09ProprieteFEI({ data }) {
  return (
    <div className="livret-page page09-container">

      <h2>Section IV – Renseignements relatifs au droit de propriété (FEI)</h2>

      {/* Mention non applicable */}
      <div className="page09-block">
        <p>
          Cette section ne s’applique pas aux équidés situés en France.
        </p>
      </div>

      {/* Texte explicatif */}
      <div className="page09-block">
        <p>
          Les renseignements relatifs au droit de propriété des équidés participant aux compétitions
          de la Fédération Équestre Internationale (FEI) doivent être enregistrés conformément aux
          règles FEI. Tout changement de propriétaire doit être notifié et enregistré.
        </p>
      </div>

      {/* Tableau FEI */}
      <div className="page09-table">
        <div className="table-header">
          <span>Date d’enregistrement</span>
          <span>Nom du propriétaire</span>
          <span>Adresse du propriétaire</span>
          <span>Nationalité</span>
          <span>Signature du propriétaire</span>
          <span>Cachet / Signature organisme</span>
        </div>

        {data.proprieteFEI?.length > 0 ? (
          data.proprieteFEI.map((p, index) => (
            <div className="table-row" key={index}>
              <span>{p.date}</span>
              <span>{p.nom}</span>
              <span>{p.adresse}</span>
              <span>{p.nationalite}</span>
              <span>{p.signature || "-"}</span>
              <span>{p.cachet || "-"}</span>
            </div>
          ))
        ) : (
          <p>Aucun enregistrement FEI.</p>
        )}
      </div>

    </div>
  );
}
