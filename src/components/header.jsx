import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header({ isLoggedIn }) {
  const location = useLocation();

  // Pages où le header doit être caché quand NON connecté
  const hiddenWhenLoggedOut = [
    "/",
    "/login",
    "/register",
    "/conditions",
    "/aide",
    "/livret-info"
  ];

  // Page où le header doit être caché même connecté (ex : livret feuilletable)
  const hiddenAlways = [
    "/chevaux/:id/livret" // on affinera avec un includes()
  ];

  // Masquer si :
  // - utilisateur non connecté ET page dans hiddenWhenLoggedOut
  // - OU page dans hiddenAlways
  if (
    (!isLoggedIn && hiddenWhenLoggedOut.includes(location.pathname)) ||
    location.pathname.includes("/livret")
  ) {
    return null;
  }

  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/dashboard" className="header-logo">
          EquiTotal Services
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/account" className="header-link">Mon compte</Link>
        <button className="lang-btn">🌍</button>

        <Link to="/logout" className="header-link logout">Déconnexion</Link>

      </nav>
    </header>
  );
}
