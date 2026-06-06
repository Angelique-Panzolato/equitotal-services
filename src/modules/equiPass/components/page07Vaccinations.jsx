import "./page07Vaccinations.css";

export default function Page07Vaccinations({ data }) {
  return (
    <div className="livret-page page07">

      <h1 className="page-title">PARTIE C — Vaccinations</h1>

      <table className="vaccin-table">
        <thead>
          <tr>
            <th>Vaccin</th>
            <th>Date</th>
            <th>Vétérinaire / Cachet</th>
            <th>Observations</th>
          </tr>
        </thead>

        <tbody>
          {(data || []).length > 0 ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.nom || "—"}</td>
                <td>{entry.date || "—"}</td>
                <td className="signature-cell">—</td>
                <td>{entry.observations || "—"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="empty-row">
                Aucune vaccination enregistrée
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="page-number">7</div>
    </div>
  );
}
