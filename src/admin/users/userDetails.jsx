import { useParams, Link } from "react-router-dom";
import { users } from "./data/users";
import "./userdetails.css";

export default function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <p>Utilisateur introuvable.</p>;
  }

  return (
    <div className="details-container">
      <h1 className="details-title">Détails de l’utilisateur</h1>

      <div className="details-card">
        <div className="details-row">
          <span className="details-label">ID :</span>
          <span className="details-value">{user.id}</span>
        </div>

        <div className="details-row">
          <span className="details-label">Email :</span>
          <span className="details-value">{user.email}</span>
        </div>

        <div className="details-row">
          <span className="details-label">Rôle :</span>
          <span
            className={
              user.role === "admin"
                ? "role-badge admin"
                : "role-badge user"
            }
          >
            {user.role}
          </span>
        </div>
      </div>

      <div className="details-actions">
        <Link to="/admin/users" className="details-btn back">
          Retour
        </Link>

        <Link
          to={`/admin/users/${user.id}/edit`}
          className="details-btn edit"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
}
