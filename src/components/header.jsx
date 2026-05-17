import { Link, useLocation } from "react-router-dom";
import "./header.css";
import BackButton from "./backbutton";

export default function Header() {
  const location = useLocation();

  // Pages où le header doit être caché
  const hiddenPages = ["/", "/livret-info"];

  if (hiddenPages.includes(location.pathname)) {
    return null;
  }

  // Pages où le bouton retour NE doit PAS apparaître
  const noBackPages = ["/dashboard"];

  const showBack = !noBackPages.includes(location.pathname);

  return (
    <header className="main-header">
      <div className="header-left">
        {showBack && <BackButton />}
        <Link to="/" className="header-logo">EquiTotal Services</Link>
      </div>

      <nav className="header-nav">
        <Link to="/dashboard" className="header-link">Dashboard</Link>
        <Link to="/logout" className="header-link logout">Déconnexion</Link>
      </nav>
    </header>
  );
}
