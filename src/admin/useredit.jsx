import { useParams, Link, useNavigate } from "react-router-dom";
import { users, updateUser } from "./data/users";
import { useState } from "react";
import "./users.css";

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "user");

  if (!user) {
    return (
      <div className="users-container">
        <h1 className="users-title">Utilisateur introuvable</h1>
        <Link to="/admin/users" className="users-btn">
          Retour
        </Link>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateUser(user.id, { email, role });

    navigate("/admin/users");
  }

  return (
    <div className="users-container">
      <h1 className="users-title">Modifier l’utilisateur</h1>

      <form className="user-edit-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          className="users-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Rôle</label>
        <select
          className="users-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Utilisateur</option>
          <option value="admin">Administrateur</option>
        </select>

        <button type="submit" className="users-btn">
          Enregistrer
        </button>
      </form>

      <Link to="/admin/users" className="users-btn">
        Retour
      </Link>
    </div>
  );
}
