"use client"; // Obligatoire pour utiliser useRouter et les clics

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/aide.css"; // Remonte de 2 niveaux vers src/styles/aide.css
import "../../components/backbutton.css"; // Remonte de 2 niveaux vers src/components/backbutton.css

export default function Aide() {
  const router = useRouter();

  return (
    <div className="aide-container">
      {/* Retour en arrière fluide avec le routeur de Next.js */}
      <button className="back-button" onClick={() => router.back()}>
        ← Retour
      </button>
      
      <h1 className="aide-title">Aide & Support</h1>
      <p className="aide-intro">
        Bienvenue dans l’espace d’aide du Livret Numérique.  
        Retrouvez ici toutes les informations nécessaires pour utiliser la plateforme sereinement.
      </p>

      {/* SECTION 1 — DEMARRER */}
      <section className="aide-section">
        <h2 className="aide-section-title">1. Démarrer avec EquiTotal</h2>

        <h3 className="aide-subtitle">Créer un compte</h3>
        <ul className="aide-list">
          <li>Accédez à la page d’inscription.</li>
          <li>Renseignez vos informations personnelles.</li>
          <li>Validez pour créer votre compte.</li>
        </ul>

        <h3 className="aide-subtitle">Se connecter</h3>
        <ul className="aide-list">
          <li>Rendez-vous sur la page de connexion.</li>
          <li>Entrez votre email et votre mot de passe.</li>
          <li>Accédez à votre tableau de bord.</li>
        </ul>
      </section>

      {/* SECTION 2 — ESPACE UTILISATEUR */}
      <section className="aide-section">
        <h2 className="aide-section-title">2. Gérer votre espace</h2>
        <p className="aide-text">
          Depuis votre tableau de bord, vous pouvez consulter vos chevaux, accéder au livret numérique, modifier vos informations et suivre vos documents.
        </p>
      </section>

      {/* SECTION 3 — CHEVAUX */}
      <section className="aide-section">
        <h2 className="aide-section-title">3. Gérer vos chevaux</h2>

        <h3 className="aide-subtitle">Ajouter un cheval</h3>
        <ul className="aide-list">
          <li>Ouvrez la section “Mes chevaux”.</li>
          <li>Cliquez sur “Ajouter un cheval”.</li>
          <li>Renseignez les informations demandées.</li>
        </ul>

        <h3 className="aide-subtitle">Consulter un cheval</h3>
        <p className="aide-text">
          Accédez à son profil, ses documents, ses analyses et son livret numérique.
        </p>
      </section>

      {/* SECTION 4 — LIVRET NUMERIQUE */}
      <section className="aide-section">
        <h2 className="aide-section-title">4. Livret numérique</h2>
        <p className="aide-text">
          Le livret numérique centralise les documents importants, analyses et informations essentielles de chaque cheval.
        </p>

        <h3 className="aide-subtitle">Importer un document</h3>
        <ul className="aide-list">
          <li>Sélectionnez un cheval.</li>
          <li>Ouvrez le livret numérique.</li>
          <li>Choisissez un type de document.</li>
          <li>Importez votre fichier.</li>
        </ul>
      </section>

      {/* SECTION 5 — ANALYSES */}
      <section className="aide-section">
        <h2 className="aide-section-title">5. Analyses & fichiers</h2>
        <p className="aide-text">
          Consultez les analyses vétérinaires, documents techniques et fichiers PDF associés à chaque cheval.
        </p>

        <h3 className="aide-subtitle">Analyser un fichier</h3>
        <ul className="aide-list">
          <li>Importez un fichier compatible.</li>
          <li>Cliquez sur “Analyser”.</li>
          <li>Consultez le résumé généré.</li>
        </ul>
      </section>

      {/* SECTION 6 — SECURITE */}
      <section className="aide-section">
        <h2 className="aide-section-title">6. Sécurité & confidentialité</h2>
        <p className="aide-text">
          Vos données sont protégées et stockées de manière sécurisée.  
          Pour plus d’informations, consultez nos mentions légales ou RGPD.
        </p>
      </section>

      {/* SECTION 7 — SUPPORT */}
      <section className="aide-section">
        <h2 className="aide-section-title">7. Support & Contact</h2>
        <p className="aide-text">
          Une question ? Un problème ?  
          Notre équipe est là pour vous aider.
        </p>
        <p className="aide-contact">
          📩 contact@equitotal-services.fr
        </p>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="aide-section">
        <h2 className="aide-section-title">8. FAQ</h2>

        <h3 className="aide-subtitle">Puis-je supprimer mon compte ?</h3>
        <p className="aide-text">Oui, sur simple demande au support.</p>

        <h3 className="aide-subtitle">Mes données sont-elles sécurisées ?</h3>
        <p className="aide-text">Oui, elles sont stockées sur des serveurs sécurisés en Europe.</p>
      </section>
    </div>
  );
}