import { NavLink, Outlet } from "react-router-dom";

export default function LivretLayout() {
  return (
    <div className="livret-container">
      <aside className="livret-sidebar">
        <NavLink to="/">Vue d’ensemble</NavLink>
        <NavLink to="/sante">Santé</NavLink>
        <NavLink to="/alimentation">Alimentation</NavLink>
        <NavLink to="/comportement">Comportement</NavLink>
        <NavLink to="/entrainement">Entraînement</NavLink>
        <NavLink to="/documents">Documents</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </aside>

      <main className="livret-content">
        <Outlet />
      </main>
    </div>
  );
}
