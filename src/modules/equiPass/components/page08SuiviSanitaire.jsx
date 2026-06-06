import "./page08SuiviSanitaire.css";

export default function Page08SuiviSanitaire({ data }) {
  return (
    <div className="livret-page page08">

      <h1 className="page-title">PARTIE C — Suivi sanitaire</h1>

      <table className="sanitaire-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Intervention</th>
            <th>Vétérinaire / Cachet</th>
            <th>Observations</th>
          </tr>
        </thead>

        <tbody>
          {(data || []).length > 0 ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date || "—"}</td>
                <td>{entry.intervention || "—"}</td>
                <td className="signature-cell">—</td>
                <td>{entry.observations || "—"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="empty-row">
                Aucun suivi sanitaire enregistré
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="page-number">8</div>
    </div>
  );
}
