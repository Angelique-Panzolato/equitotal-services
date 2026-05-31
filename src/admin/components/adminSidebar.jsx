import { Link } from "react-router-dom";
import "./adminSidebar.css";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="sidebar-logo">equitotal</h2>

      <nav className="sidebar-nav">
        <Link to="/admin" className="sidebar-link">Dashboard</Link>
        <Link to="/admin/users" className="sidebar-link">Utilisateurs</Link>
        <Link to="/admin/livrets" className="sidebar-link">Livrets</Link>
        <Link to="/admin/settings" className="sidebar-link">Paramètres</Link>
      </nav>
    </aside>
  );
}
