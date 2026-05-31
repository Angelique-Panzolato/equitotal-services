import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn, onLogout }) { // 💡 Ajout de onLogout
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

  // Masquer si :
  // - utilisateur non connecté ET page dans hiddenWhenLoggedOut
  // - OU page est liée au livret
  if (
    (!isLoggedIn && hiddenWhenLoggedOut.includes(location.pathname)) ||
    location.pathname.includes("/livret") ||
    location.pathname.startsWith("/admin") // 💡 Masquer le header standard dans l'admin (l'admin aura son propre menu)
  ) {
    return null;
  }

  return (
    <header className="main-header">
      <div className="header-left">
        {/* 💡 Si admin, renvoie vers l'admin, sinon vers le dashboard */}
        <Link to={localStorage.getItem("userRole") === "admin" ? "/admin" : "/dashboard"} className="header-logo">
          EquiTotal Services
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/account" className="header-link">Mon compte</Link>
        <button className="lang-btn">🌍</button>

        {/* 💡 Remplacer le Link par un bouton ou déclencher onLogout pour nettoyer le localStorage */}
        <button onClick={onLogout} className="header-link logout-btn">
          Déconnexion
        </button>
      </nav>
    </header>
  );
}