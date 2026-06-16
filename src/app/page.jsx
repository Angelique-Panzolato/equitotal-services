"use client"; // 1. Obligatoire pour gérer les interactions et les composants clients

import React from 'react';
import Image from 'next/image'; // 2. Le composant optimisé de Next.js pour les images
import Link from 'next/link';   // 3. Le routeur natif de Next.js

// Import des images (ajuste le chemin si ton dossier assets a bougé)
import Footer from "../components/Footer"; // 5. Import du composant Footer pour l'utiliser dans la page
import "../styles/LandingPage.css"; // 4. Import du fichier CSS pour le style de la page


export default function LandingPage() {
  return (
    <div className="landing-container">
      <section className="landing-hero">
        {/* On remplace <img> par <Image /> pour de meilleures performances */}
        <Image src="/assets/logo.png" alt="Logo ETS" className="landing-logo" priority width={200} height={100} />
        <h1 className="landing-title">Bienvenue chez EquiTotal Services</h1>
        <p className="landing-subtitle"> Le livret numérique pour les cavaliers et leurs chevaux</p>
      </section>

      <section className="landing-section">
        <Image className="landing-icon" src="/assets/livretnum.png" alt="Icone de cheval" width={250} height={300} />
        <p className="landing-text">
          Centralisez toutes les informations essentielles de votre cheval :
          santé, alimentation, entraînement, documents…
          Un espace unique, sécurisé et toujours accessible.
        </p>
        <p className="landing-text">
          Créez dès maintenant le livret numérique de votre cheval et suivez son
          évolution au quotidien.
        </p>
      </section>

      <section className="landing-buttons">
        {/* On remplace 'to=' par 'href=' comme l'exige Next.js */}
        <Link href="/livret" className="btn-primary">
          découvrir le livret numérique
        </Link>
        <Link href="/login" className="btn-secondary">
          se connecter
        </Link>
        <Link href="/register" className="btn-tertiary">
          s’inscrire
        </Link>
      </section>
      <Footer />
    </div>
  );
}