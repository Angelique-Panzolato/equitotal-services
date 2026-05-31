import "./page03Signalement.css";

export default function Page03Signalement({ data }) {
  return (
    <div className="livret-page page03">

      <h1 className="page-title">PARTIE A — Signalement graphique</h1>

      {/* Ligne 1 : Côté droit + Côté gauche */}
      <section className="row">
        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-cote-droit.png"
            alt="Côté droit"
            className="silhouette-img"
          />
          <p className="silhouette-label">Côté droit</p>
        </div>

        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-cote-gauche.png"
            alt="Côté gauche"
            className="silhouette-img"
          />
          <p className="silhouette-label">Côté gauche</p>
        </div>
      </section>

      {/* Ligne 2 : Vue de tête */}
      <section className="row center">
        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-tete.png"
            alt="Vue de tête"
            className="silhouette-img"
          />
          <p className="silhouette-label">Vue de tête</p>
        </div>
      </section>

      {/* Ligne 3 : Encolure + Nez */}
      <section className="row">
        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-encolure.png"
            alt="Encolure"
            className="silhouette-img"
          />
          <p className="silhouette-label">Encolure</p>
        </div>

        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-nez.png"
            alt="Nez"
            className="silhouette-img"
          />
          <p className="silhouette-label">Nez</p>
        </div>
      </section>

      {/* Ligne 4 : Antérieurs + Postérieurs */}
      <section className="row">
        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-anterieurs.png"
            alt="Antérieurs"
            className="silhouette-img"
          />
          <p className="silhouette-label">Antérieurs</p>
        </div>

        <div className="silhouette-block">
          <img
            src="/src/assets/silhouette-posterieurs.png"
            alt="Postérieurs"
            className="silhouette-img"
          />
          <p className="silhouette-label">Postérieurs</p>
        </div>
      </section>

      

      {/* Légende */}
      <section className="legende">
        <h3>Légende :</h3>
        <ul>
          <li><strong>X</strong> = marque blanche</li>
          <li><strong>•</strong> = épi</li>
          <li><strong>///</strong> = cicatrice</li>
          <li><strong>O</strong> = balzane</li>
        </ul>
      </section>

      <div className="page-number">3</div>
    </div>
  );
}
