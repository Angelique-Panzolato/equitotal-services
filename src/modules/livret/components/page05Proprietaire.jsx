import "./page05Proprietaire.css";

export default function Page05Proprietaire({ data }) {
  return (
    <div className="livret-page page05">

      <h1 className="page-title">PARTIE B — Propriétaire / Détenteur</h1>

      <section className="info-block">
        <h2 className="section-title">Propriétaire</h2>

        <div className="info-row">
          <span className="info-label">Nom / Raison sociale :</span>
          <span className="info-value">{data.nomProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Adresse :</span>
          <span className="info-value">{data.adresseProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Code postal / Ville :</span>
          <span className="info-value">{data.cpVilleProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Pays :</span>
          <span className="info-value">{data.paysProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Téléphone :</span>
          <span className="info-value">{data.telProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Email :</span>
          <span className="info-value">{data.emailProprietaire || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Date d’acquisition :</span>
          <span className="info-value">{data.dateAcquisition || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Mode d’acquisition :</span>
          <span className="info-value">{data.modeAcquisition || "—"}</span>
        </div>
      </section>

      <section className="info-block">
        <h2 className="section-title">Détenteur (si différent)</h2>

        <div className="info-row">
          <span className="info-label">Nom / Raison sociale :</span>
          <span className="info-value">{data.nomDetenteur || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Adresse :</span>
          <span className="info-value">{data.adresseDetenteur || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Code postal / Ville :</span>
          <span className="info-value">{data.cpVilleDetenteur || "—"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Pays :</span>
          <span className="info-value">{data.paysDetenteur || "—"}</span>
        </div>
      </section>

      <section className="signature-block">
        <p>Signature du propriétaire / cachet :</p>
        <div className="signature-placeholder">—</div>
      </section>

      <div className="page-number">5</div>
    </div>
  );
}
