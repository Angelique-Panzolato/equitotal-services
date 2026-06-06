import "./page02Identification.css";

export default function Page02Identification({ data }) {
  return (
    <div className="livret-page page02">

      <h1 className="page-title">PARTIE A — Identification (suite)</h1>

      <section className="info-block">
        <div className="info-row">
          <span className="info-label">Sexe :</span>
          <span className="info-value">{data.sexe}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Date de naissance :</span>
          <span className="info-value">{data.dateNaissance}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Lieu de naissance :</span>
          <span className="info-value">{data.lieuNaissance}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Naisseur :</span>
          <span className="info-value">{data.naisseur}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Robe :</span>
          <span className="info-value">{data.robe}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Race :</span>
          <span className="info-value">{data.race}</span>
        </div>

        <div className="info-row">
          <span className="info-label">% Sang Arabe :</span>
          <span className="info-value">{data.pourcentageSangArabe}%</span>
        </div>

        <div className="info-row">
          <span className="info-label">Transpondeur :</span>
          <span className="info-value">{data.transpondeur}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Date de pose :</span>
          <span className="info-value">—</span>
        </div>

        <div className="info-row">
          <span className="info-label">Localisation du transpondeur :</span>
          <span className="info-value">—</span>
        </div>

        <div className="info-row">
          <span className="info-label">Vétérinaire identificateur :</span>
          <span className="info-value">—</span>
        </div>
      </section>

      <div className="page-number">2</div>
    </div>
  );
}
