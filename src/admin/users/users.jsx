import { useState } from "react";
import {mockData} from "../../data/mockData";
import "./users.css";
import { Link } from "react-router-dom";

export default function Users() {
  const [userList, setUserList] = useState(mockData.users);

  function handleDelete(id) {
    if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      const updatedList = userList.filter ((u) => u.id !== id);
      setUserList(updatedList);
    }
  }

  return (
    <div className="users-container">
      <h1 className="users-title">Gestion des utilisateurs</h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Mot de Passe</th>{/* On n'affiche pas le mot de passe pour des raisons de sécurité, mais tu peux ajouter une colonne si tu veux */}
          </tr>
        </thead>

        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                <code>********</code>
                <span
                  className={
                    user.role === "admin"
                      ? "role-badge admin"
                      : "role-badge user"
                  }
                >
                  {user.role}
                </span>
              </td>

              <td className="actions-cell">
                <Link to={`/admin/users/${user.id}`} className="users-btn">
                  Voir
                </Link>

                <Link
                  to={`/admin/users/${user.id}/edit`}
                  className="users-btn edit"
                >
                  Modifier
                </Link>

                <button
                  className="users-btn delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
