import React from "react";
import "./Page08Validation.css";

export default function Page08Validation({ data }) {
  return (
    <div className="livret-page page08-container">

      <h2>Marque de validation ou licence</h2>

      {/* Identification cheval */}
      <div className="page08-id">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

      {/* Texte réglementaire */}
      <div className="page08-block">
        <p>
          Conformément à l’article 92, paragraphe 2, du règlement délégué (UE) 2020/688.
        </p>
      </div>

      {/* Validité */}
      <div className="page08-block">
        <p>Marque de validation valable jusqu’au :</p>
        <div className="line"></div>

        <p>Ou</p>

        <p>Licence valable jusqu’au :</p>
        <div className="line"></div>
      </div>

      {/* Autorité compétente */}
      <div className="page08-block">
        <p>Autorité compétente ou organisme délégataire :</p>
        <div className="line"></div>

        <p>Date :</p>
        <div className="line"></div>

        <p>Lieu :</p>
        <div className="line"></div>

        <p>Nom (en lettres capitales) et signature de la personne qualifiée :</p>
        <div className="box"></div>

        <p>Cachet de l’autorité compétente ou de l’organisme délégataire :</p>
        <div className="box"></div>
      </div>

    </div>
  );
}
