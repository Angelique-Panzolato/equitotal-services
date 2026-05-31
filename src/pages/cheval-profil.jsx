import "./cheval-profil.css";
import { useParams, useNavigate } from "react-router-dom";

// ⭐ Import correct selon ton arborescence
import DocumentIdentification from "../modules/livret/components/documentIdentification";

export default function ChevalProfil() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ⚠️ Données temporaires (à remplacer par backend)
  const chevaux = [
    {
      id: 1,
      nom: "Noopy",
      race: "Pur-sang",
      age: 1,
      image: "noopy.jpg",
      puce: "25021...",
      sire: "08123...",
      vaccins: "Grippe/Tétanos (Prochaine : Dec 2026)",
      rhino: "Rhinopneumonie (Dec 2026)",
      traitement: "Note vétérinaire 12/04/26",
      dernierTrajet: "Lons → Bordeaux (65 km)",
      detenteur: "Écuries de Lons",
      proprietaire: "PY Massoubre"
    }
  ];

  const cheval = chevaux.find((c) => c.id === Number(id));

  if (!cheval) return <p>Cheval introuvable.</p>;

  // ⭐ LIVRET NUMÉRIQUE — Données temporaires
  const livret = {
    identification: {
      nom: cheval.nom,
      sire: cheval.sire,
      ueln: "25000125376905G",
      transpondeur: cheval.puce,
      race: cheval.race,
      pourcentageSangArabe: 19.83,
      robe: "BAI FONCE",
      sexe: "MALE",
      dateNaissance: "30/04/2025",
      lieuNaissance: "POEY DE LESCAR (64230) FRANCE",
      naisseur: "PY Massoubre",
      organismeEmetteur: {
        nom: "IFCE - SIRE",
        adresse: "BP3, Route de Troche, 19231 Arnac - Pompadour Cedex",
        mail: "info@ifce.fr",
        site: "www.ifce.fr"
      },
      associationRace: {
        nom: "ASSOCIATION NATIONALE DE L’ANGLO-ARABE",
        adresse: "INSTITUT DE L’ADOUR, CENTRE DE VALORISATION, 64250 SAMES"
      }
    }
  };

  return (
    <div className="profil-container">

      {/* Titre */}
      <h1 className="profil-title">{cheval.nom}</h1>

      {/* Grille 4 blocs */}
      <div className="profil-grid">

        {/* ⭐ LIVRET NUMÉRIQUE — CARTE CLIQUABLE */}
      <div
        className="profil-card livret-preview"
        onClick={() => navigate(`/chevaux/${id}/livret`)}
      >
        <h2 className="card-title">Livret numérique</h2>

        <div className="livret-cover">
          <p className="livret-cover-title">📘 Livret d’identification</p>
          <p className="livret-cover-sub">Clique pour ouvrir</p>
        </div>
      </div>

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
