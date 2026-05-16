import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenue dans votre espace</h1>

      <p className="dashboard-text">
        Gérez le livret numérique de votre cheval et suivez son évolution au quotidien.
      </p>

      <div className="dashboard-actions">
        <Link to="/livret" className="dashboard-button">
          Accéder au livret
        </Link>

        <Link to="/livret" className="dashboard-button-secondary">
          Créer un nouveau livret
        </Link>
      </div>
    </div>
  );
}
