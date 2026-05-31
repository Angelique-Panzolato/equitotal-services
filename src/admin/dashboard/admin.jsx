import {Link} from "react-router-dom";
import "./admin.css";

export default function Admin() {
  return (
      <div className="admin-dashboard">

        <h1 className="dashboard-title">Dashboard</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3 className="card-title">Utilisateurs</h3>
            <p className="card-number">128</p>
          </div>

          <div className="dashboard-card">
            <h3 className="card-title">Livrets actifs</h3>
            <p className="card-number">74</p>
          </div>

          <div className="dashboard-card">
            <h3 className="card-title">Prestataires</h3>
            <p className="card-number">32</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <Link to="/admin/users" className="dashboard-button">
            Voir les utilisateurs
          </Link>
          <Link to="/admin/livrets" className="dashboard-button">
            Voir les livrets
          </Link>
          <Link to="/admin/parametres" className="dashboard-button">
            Paramètres
          </Link>
        </div>

      </div>
  );
}
