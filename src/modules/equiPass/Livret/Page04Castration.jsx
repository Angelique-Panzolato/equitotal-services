import React from "react";
import "./page04Castration.css";

export default function Page04Castration({ data }) {
  return (
    <div className="livret-page page04-container">

    

      <h2>Partie C : Castration, vérification de la description, autres modifications</h2>

      {/* Identification cheval */}
      <div className="page04-id">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

      {/* Section Castration */}
      <div className="page04-section">
        <h3>Castration - gelding</h3>
        <p>Date, lieu, signature et cachet du vétérinaire :</p>
        <div className="page04-box"></div>
      </div>

      {/* Section Rectifications */}
      <div className="page04-section">
        <h3>1) Rectifications</h3>
        <div className="page04-lines"></div>
      </div>

      {/* Section Adjonctions */}
      <div className="page04-section">
        <h3>2) Adjonctions - Additions</h3>
        <div className="page04-lines"></div>
      </div>

      {/* Section Identification */}
      <div className="page04-section">
        <h3>Identification</h3>
        <div className="page04-lines"></div>

        <p>N° de l’identificateur :</p>
        <div className="page04-line"></div>

        <p>Nom (en lettres capitales), signature et cachet :</p>
        <div className="page04-box"></div>

        <div className="page04-double">
          <div>
            <p>Le (date) :</p>
            <div className="page04-line"></div>
          </div>
          <div>
            <p>À (lieu) :</p>
            <div className="page04-line"></div>
          </div>
        </div>

        <p>Cachet de l’autorité compétente :</p>
        <div className="page04-box"></div>
      </div>

      {/* Section Enregistrement */}
      <div className="page04-section">
        <h3>
          3) Enregistrement du document d’identification dans une autre base
        </h3>

        <p>N° transpondeur lu correspondant au n° inscrit :</p>

        <div className="page04-choices">
          <label><input type="checkbox" /> Oui</label>
          <label><input type="checkbox" /> Non</label>
        </div>

        <p>N° lu :</p>
        <div className="page04-line"></div>
      </div>

    </div>
  );
}
