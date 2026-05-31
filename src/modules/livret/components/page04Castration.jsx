import "./page04Castration.css";

export default function Page04Castration({ data }) {
  return (
    <div className="livret-page page04">

      <h1 className="page-title">
        PARTIE C — Castration, vérification de la description, autres modifications
      </h1>

      {/* Informations cheval */}
      <div className="horse-info">
        <div><strong>Nom :</strong> {data.nom}</div>
        <div><strong>N° SIRE :</strong> {data.sire}</div>
        <div><strong>N° UELN :</strong> {data.ueln}</div>
      </div>

      {/* Bloc Castration */}
      <div className="section">
        <h2>Castration / Castration</h2>

        <div className="field-row">
          <label>Date :</label>
          <div className="field-line"></div>
        </div>

        <div className="field-row">
          <label>Vétérinaire / Veterinary surgeon :</label>
          <div className="field-line"></div>
        </div>

        <div className="signature-box">
          Cachet et signature / Stamp and signature
        </div>
      </div>

      {/* Bloc Rectification / Ajout */}
      <div className="section">
        <h2>Rectification ou ajout / Correction or addition</h2>

        <div className="field-row">
          <label>Nature de la modification :</label>
          <div className="field-line"></div>
        </div>

        <div className="field-row">
          <label>Date :</label>
          <div className="field-line"></div>
        </div>

        <div className="signature-box">
          Cachet et signature / Stamp and signature
        </div>
      </div>

      {/* Bloc Vérification de la description */}
      <div className="section">
        <h2>Vérification de la description / Verification of description</h2>

        <p className="small-text">
          Le vétérinaire certifie que la description correspond à l’animal présenté.  
          The veterinary surgeon certifies that the description matches the horse presented.
        </p>

        <div className="field-row">
          <label>Date :</label>
          <div className="field-line"></div>
        </div>

        <div className="signature-box">
          Cachet et signature / Stamp and signature
        </div>
      </div>

      <div className="page-number">4</div>
    </div>
  );
}
