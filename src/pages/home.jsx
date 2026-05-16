import "./home.css";
import logo from "../assets/logo.png";
import livretnum from "../assets/livretnum.jpg";
export default function Home() {
  return (
    <div className="landing-container">

      <section className="landing-hero">
        <img src={logo} alt="Logo ETS" className="landing-logo" />
        <h1 className="landing-title">bienvenue chez EquiTotal Services</h1>
        <p className="landing-subtitle"> Le livret numérique pour les cavaliers et leurs chevaux</p>
      </section>

      <section className="home-section">
                <img src={livretnum} alt="Icone de cheval" className="home-icon" />

        <p className="home-text">
          Centralisez toutes les informations essentielles de votre cheval :
          santé, alimentation, entraînement, documents…
          Un espace unique, sécurisé et toujours accessible.
        </p>

        <p className="home-text">
          Créez dès maintenant le livret numérique de votre cheval et suivez son
          évolution au quotidien.
        </p>
      </section>

      <section className="landing-buttons">
        <a href="/livret" className="btn-primary">découvrir le livret numérique</a>
        <a href="/login" className="btn-secondary">se connecter</a>
        <a href="/register" className="btn-tertiary">s’inscrire</a>
      </section>

      <footer className="landing-footer">
        <a className="footer-link">aide</a>
        <a className="footer-link">conditions</a>
      </footer>

    </div>
  );
}
