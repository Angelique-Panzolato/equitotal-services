import React from "react";
import "./prestataires.css";

export default function Prestataires() {
  // Récupération de l'utilisateur connecté
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="prestataire-dashboard">
      <header className="prestataire-header">
        <h1>Espace Prestataire</h1>
        <p>Bienvenue {user?.email}</p>
        <span className="role-badge">Prestataire</span>
      </header>

      <div className="prestataire-content">

        <section className="prestataire-card">
          <h2>Mes Clients & Chevaux</h2>
          <p>Accédez aux chevaux des propriétaires qui vous ont autorisé.</p>
          <button className="prestataire-btn">Voir les chevaux</button>
        </section>

        <section className="prestataire-card">
          <h2>Mes Interventions</h2>
          <p>Consultez et ajoutez vos actes : soins, visites, traitements.</p>
          <button className="prestataire-btn">Accéder aux interventions</button>
        </section>

        <section className="prestataire-card">
          <h2>Documents Professionnels</h2>
          <p>Certificats, ordonnances, rapports, documents partagés.</p>
          <button className="prestataire-btn">Voir mes documents</button>
        </section>

        <section className="prestataire-card">
          <h2>QR Code d’Accès</h2>
          <p>Permettre à un propriétaire de vous donner accès à un cheval.</p>
          <button className="prestataire-btn">Générer mon QR Code</button>
        </section>

      </div>
    </div>
  );
}
