import "./dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="userdash-container">

      <h1 className="userdash-title">Mon espace personnel</h1>


      <button
        className="livret-btn"
        onClick={() => navigate("/livret-numerique")}
      >
        Créer le livret numérique de mon cheval
      </button>
      <div className="userdash-cards">

        <div className="userdash-card" onClick={() => navigate("/chevaux")}>
          <h3 className="card-title">Mes chevaux</h3>
          <p className="card-value">Voir mes chevaux</p>
        </div>

        <div className="userdash-card" onClick={() => navigate("/prestataires")}>
          <h3 className="card-title">Mes prestataires santé</h3>
          <p className="card-value">Vétérinaire, maréchal, ostéo…</p>
        </div>

        <div className="userdash-card" onClick={() => navigate("/documents")}>
          <h3 className="card-title">Mes documents</h3>
          <p className="card-value">Certificats, ordonnances…</p>
        </div>

        <div className="userdash-card" onClick={() => navigate("/alertes")}>
          <h3 className="card-title">Mes alertes</h3>
          <p className="card-value">Vaccins, rappels, soins…</p>
        </div>

      </div>

    </div>
  );
}
