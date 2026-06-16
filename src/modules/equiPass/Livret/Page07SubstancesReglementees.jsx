import React from "react";
import "./Page07SubstancesReglementees.css";

export default function Page07SubstancesReglementees({ data }) {
  return (
    <div className="livret-page page07-container">

      {/* TITRE */}
      <h2>Partie IV – Substances réglementées (Directive 96/22/CE)</h2>

      {/* IDENTIFICATION CHEVAL */}
      <div className="page07-id">
        <p><strong>Nom :</strong> {data.nom}</p>
        <p><strong>N° SIRE :</strong> {data.sire}</p>
        <p><strong>N° UELN :</strong> {data.ueln}</p>
      </div>

      {/* TEXTE REGLEMENTAIRE */}
      <div className="page07-block">
        <p>
          Les échanges des équidés enregistrés auxquels ont été administrés des médicaments
          vétérinaires contenant du trembolone allyle ou des substances bêta‑agonistes au fins
          indiquées à l’article 4 de la directive 96/22/CE peuvent s’effectuer avant la fin de la
          période d’attente, conformément à l’article 7, paragraphe 1, de la directive 96/22/CE.
        </p>
      </div>

      {/* DATE DERNIÈRE ADMINISTRATION */}
      <div className="page07-block">
        <p>Date de la dernière administration :</p>
        <div className="line"></div>
      </div>

      {/* SUBSTANCES */}
      <div className="page07-block">
        <p>Substance(s) incorporée(s) dans le médicament vétérinaire :</p>
        <div className="box"></div>
      </div>

      {/* VETERINAIRE */}
      <div className="page07-block">
        <h3>Vétérinaire responsable</h3>

        <p>Nom :</p>
        <div className="line"></div>

        <p>Adresse :</p>
        <div className="line"></div>

        <p>Code postal :</p>
        <div className="line"></div>

        <p>Lieu :</p>
        <div className="line"></div>

        <p>Téléphone :</p>
        <div className="line"></div>

        <p>Signature et cachet du vétérinaire :</p>
        <div className="box"></div>
      </div>

      {/* PARTIE V */}
      <h2>Partie V – Équidé destiné à l’abattage pour consommation humaine</h2>

      <div className="page07-block">
        <p>
          L’abattage de l’équidé est, pour des raisons administratives, retardé d’au moins six mois
          conformément à l’article 38, paragraphe 2, point b) du règlement d’exécution (UE) 2021/963.
        </p>
      </div>

      {/* DATE + LIEU */}
      <div className="page07-double">
        <div>
          <p>Date de la suspension :</p>
          <div className="line"></div>
        </div>
        <div>
          <p>Lieu :</p>
          <div className="line"></div>
        </div>
      </div>

      {/* AUTORITÉ COMPÉTENTE */}
      <div className="page07-block">
        <p>Autorité compétente ou organisme délégataire :</p>
        <div className="box"></div>

        <p>Nom et signature de la personne responsable :</p>
        <div className="box"></div>
      </div>

    </div>
  );
}
