import { useState } from "react";
import { users as initialUsers, deleteUser } from "./data/users";
import "./users.css";
import { Link } from "react-router-dom";

export default function Users() {
  const [userList, setUserList] = useState(initialUsers);

  function handleDelete(id) {
    deleteUser(id);
    setUserList(userList.filter((u) => u.id !== id));
  }

  return (
    <div className="users-container">
      <h1 className="users-title">Liste des utilisateurs</h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
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
