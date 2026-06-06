import "./page06Historique.css";

export default function Page06Historique({ data }) {
  return (
    <div className="livret-page page06">

      <h1 className="page-title">PARTIE B — Historique des propriétaires</h1>

      <table className="historique-table">
        <thead>
          <tr>
            <th>Nom / Raison sociale</th>
            <th>Adresse</th>
            <th>CP / Ville</th>
            <th>Pays</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Mode</th>
            <th>Signature</th>
          </tr>
        </thead>

        <tbody>
          {(data || []).length > 0 ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.nom || "—"}</td>
                <td>{entry.adresse || "—"}</td>
                <td>{entry.cpVille || "—"}</td>
                <td>{entry.pays || "—"}</td>
                <td>{entry.dateDebut || "—"}</td>
                <td>{entry.dateFin || "—"}</td>
                <td>{entry.mode || "—"}</td>
                <td className="signature-cell">—</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="empty-row">
                Aucun historique enregistré
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="page-number">6</div>
    </div>
  );
}
