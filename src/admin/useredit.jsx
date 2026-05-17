import { useParams, useNavigate } from "react-router-dom";
import { users, updateUser } from "./data/users";
import "./useredit.css";
import { useState } from "react";

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "user");

  if (!user) {
    return <p>Utilisateur introuvable.</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(user.id, { email, role });
    navigate("/admin/users");
  }

  return (
    <div className="edit-container">
      <h1 className="edit-title">Modifier l’utilisateur</h1>

      <form className="edit-card" onSubmit={handleSubmit}>
        <div className="edit-group">
          <label className="edit-label">Email</label>
          <input
            type="email"
            className="edit-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="edit-group">
          <label className="edit-label">Rôle</label>
          <select
            className="edit-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        <div className="edit-actions">
          <button
            type="button"
            className="edit-btn cancel"
            onClick={() => navigate("/admin/users")}
          >
            Annuler
          </button>

          <button type="submit" className="edit-btn save">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
