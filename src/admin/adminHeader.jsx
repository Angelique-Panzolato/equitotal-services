import "./adminHeader.css";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <h1 className="admin-header-title">Espace Administrateur</h1>

      <div className="admin-header-right">
        <span className="admin-user">Admin</span>
        <button className="admin-logout">Déconnexion</button>
      </div>
    </header>
  );
}
