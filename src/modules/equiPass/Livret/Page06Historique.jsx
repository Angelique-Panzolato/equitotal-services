import React from "react";
import "./Page06Historique.css";  

export default function Page06Medicaments({ data }) {
  return (
    <div className="livret-page page06-container">

      <h2>Administration de médicaments – Section II</h2>

      {/* Identification cheval */}
      <div className="page06-id">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

      {/* Partie I */}
      <div className="page06-block">
        <h3>Partie I</h3>
        <p>
          Chapitre inséré dans le document d’identification par l’IFCE.
        </p>
      </div>

      {/* Partie II */}
      <div className="page06-block">
        <h3>Partie II</h3>
        <p>
          L’équidé n’est pas destiné à l’abattage pour la consommation humaine.
        </p>
        <p>
          Par conséquent, l’équidé peut recevoir des médicaments vétérinaires autorisés conformément
          au règlement (UE) 2019/6.
        </p>
      </div>

      {/* Date / Lieu */}
      <div className="page06-double">
        <div>
          <p>Date :</p>
          <div className="line"></div>
        </div>
        <div>
          <p>Lieu :</p>
          <div className="line"></div>
        </div>
      </div>

      {/* Vétérinaire */}
      <div className="page06-block">
        <h3>Vétérinaire responsable</h3>

        <p>Nom :</p>
        <div className="line"></div>

        <p>Adresse :</p>
        <div className="line"></div>

        <p>Code postal / Ville :</p>
        <div className="line"></div>

        <p>Téléphone :</p>
        <div className="line"></div>

        <p>Signature et cachet :</p>
        <div className="box"></div>
      </div>

      {/* Autorité compétente */}
      <div className="page06-block">
        <h3>Autorité compétente ou organisme délégataire</h3>

        <p>Nom et signature :</p>
        <div className="box"></div>
      </div>

      {/* Notes */}
      <div className="page06-notes">
        <p>(1) Rayer la mention inutile</p>
        <p>(2) Voir instructions générales</p>
        <p>(3) Conformément au règlement (UE) 2019/6</p>
        <p>(4) Conformément au règlement (CE) n°470/2009</p>
      </div>

    </div>
  );
}
