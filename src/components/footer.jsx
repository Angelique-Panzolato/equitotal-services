import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <Link to="/conditions" className="footer-link">
            Conditions & Confidentialité
        </Link>

        <Link to="/aide" className="footer-link">
          Aide
        </Link>

        <p>© 2026 EquiTotal Services</p>
    </div>
    </footer>
  );
}