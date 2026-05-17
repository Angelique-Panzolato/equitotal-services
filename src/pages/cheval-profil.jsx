import "./cheval-profil.css";
import { useParams } from "react-router-dom";

export default function ChevalProfil() {
  const { id } = useParams();

  // ⚠️ Données temporaires (à remplacer par backend)
  const chevaux = [
    {
      id: 1,
      nom: "Hidalgo",
      race: "Pur-sang",
      age: 7,
      image: "/img/cheval1.jpg",
      puce: "25021...",
      sire: "08123...",
      vaccins: "Grippe/Tétanos (Prochaine : Dec 2026)",
      rhino: "Rhinopneumonie (Dec 2026)",
      traitement: "Note vétérinaire 12/04/26",
      dernierTrajet: "Lons → Bordeaux (65 km)",
      detenteur: "Écuries de Lons",
      proprietaire: "J. Dupont"
    }
  ];

  const cheval = chevaux.find((c) => c.id === Number(id));

  if (!cheval) return <p>Cheval introuvable.</p>;

  return (
    <div className="profil-container">

      {/* Titre */}
      <h1 className="profil-title">{cheval.nom}</h1>

      {/* Grille 4 blocs */}
      <div className="profil-grid">

        {/* IDENTIFICATION */}
        <div className="profil-card">
          <h2 className="card-title">Identification (SIRE)</h2>
          <p className="card-line">Puce : {cheval.puce}</p>
          <p className="card-line">SIRE : {cheval.sire}</p>
          <p className="card-line">Signalement graphique</p>
        </div>

        {/* SUIVI SANITAIRE */}
        <div className="profil-card">
          <h2 className="card-title">Suivi sanitaire (RESPE)</h2>
          <p className="card-line">Vaccins :</p>
          <p className="card-sub">{cheval.vaccins}</p>
          <p className="card-sub">{cheval.rhino}</p>
          <p className="card-line">Traitements :</p>
          <p className="card-sub">{cheval.traitement}</p>
        </div>

        {/* MOUVEMENTS */}
        <div className="profil-card">
          <h2 className="card-title">Mouvements & transport</h2>
          <p className="card-line">Dernier trajet :</p>
          <p className="card-sub">{cheval.dernierTrajet}</p>
          <p className="card-line">Registre de transport :</p>
          <p className="card-sub">Disponible</p>
        </div>

        {/* PROPRIÉTAIRE */}
        <div className="profil-card">
          <h2 className="card-title">Gestion détenteur / propriétaire</h2>
          <p className="card-line">Détenteur :</p>
          <p className="card-sub">{cheval.detenteur}</p>
          <p className="card-line">Propriétaire :</p>
          <p className="card-sub">{cheval.proprietaire}</p>
        </div>

      </div>
    </div>
  );
}
