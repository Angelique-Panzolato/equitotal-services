import "./admin.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Espace Administrateur</h1>

      <p className="admin-text">
        Ici, vous pouvez visualiser les comptes utilisateurs, leurs livrets numériques,
        et superviser l’activité générale de la plateforme.
      </p>

      <div className="admin-actions">
        <button className="admin-button">Voir les utilisateurs</button>
        <button className="admin-button">Voir les livrets</button>
        <button className="admin-button">Paramètres</button>
      </div>
    </div>
  );
}
