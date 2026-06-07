import React from "react";
import "./institutions.css";

export default function Institutions() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="institution-dashboard">
      <header className="institution-header">
        <h1>Espace Institution</h1>
        <p>Bienvenue {user?.email}</p>
        <span className="role-badge">Institution</span>
      </header>

      <div className="institution-content">

        <section className="institution-card">
          <h2>Gestion des Chevaux</h2>
          <p>Consultez les chevaux enregistrés et leurs informations officielles.</p>
          <button className="institution-btn">Accéder</button>
        </section>

        <section className="institution-card">
          <h2>Documents Officiels</h2>
          <p>Certificats, identifications, documents réglementaires.</p>
          <button className="institution-btn">Voir les documents</button>
        </section>

        <section className="institution-card">
          <h2>Contrôles & Vérifications</h2>
          <p>Historique des contrôles, conformité, suivi administratif.</p>
          <button className="institution-btn">Ouvrir</button>
        </section>

        <section className="institution-card">
          <h2>Accès Rapide</h2>
          <p>Scanner un QR Code pour accéder à un cheval.</p>
          <button className="institution-btn">Scanner</button>
        </section>

      </div>
    </div>
  );
}
