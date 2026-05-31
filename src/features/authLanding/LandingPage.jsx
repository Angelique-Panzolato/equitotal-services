import React from 'react';
import logo from "../../assets/logo.png";
import livretnum from "../../assets/livretnum.jpg";
import { Link } from 'react-router-dom';
import "./LandingPage.css"; 

export default function LandingPage() {
  return (
    <div className="landing-container">
      <section className="landing-hero">
        <img src={logo} alt="Logo ETS" className="landing-logo" />
        <h1 className="landing-title">bienvenue chez EquiTotal Services</h1>
        <p className="landing-subtitle"> Le livret numérique pour les cavaliers et leurs chevaux</p>
      </section>

      <section className="landing-section">
        <img src={livretnum} alt="Icone de cheval" className="landing-icon" />
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
        <Link to="/livret" className="btn-primary">
          découvrir le livret numérique
        </Link>
        <Link to="/login" className="btn-secondary">
          se connecter
        </Link>
        <Link to="/register" className="btn-tertiary">
          s’inscrire
        </Link>
      </section>
    </div>
  );
}