import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/" className="header-logo">equitotal</Link>
      </div>

      <nav className="header-nav">
        <Link to="/dashboard" className="header-link">dashboard</Link>
        <Link to="/logout" className="header-link logout">déconnexion</Link>
      </nav>
    </header>
  );
}
