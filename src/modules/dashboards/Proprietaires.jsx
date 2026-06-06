import React, { useState } from "react";
import "./proprietaires.css";

const Proprietaires = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("equippass");

  // MockData provisoire (remplacé plus tard par API IFCE)
  const chevaux = [
    {
      id: 1,
      nom: "Uranos du Vent",
      sire: "123456789",
      puce: "250123456789012",
      alertes: {
        vaccin: "urgent",
        vermifuge: "ok",
        parage: "urgent",
      },
    },
    {
      id: 2,
      nom: "Bella Donna",
      sire: "987654321",
      puce: "250987654321098",
      alertes: {
        vaccin: "ok",
        vermifuge: "ok",
        parage: "ok",
      },
    },
  ];

  const prestataires = [
    { id: 1, nom: "Dr. Martin", metier: "Vétérinaire" },
    { id: 2, nom: "Pierre Dupont", metier: "Maréchal-ferrant" },
    { id: 3, nom: "Julie Morel", metier: "Ostéopathe" },
  ];

  const documents = [
    { id: 1, nom: "Ordonnance - 12/03/2024", type: "PDF" },
    { id: 2, nom: "Facture clinique - 02/02/2024", type: "PDF" },
  ];

  return (
    <div className="dashboardOwner">

      {/* HEADER */}
      <div className="dashHeader">
        <h1>Espace Propriétaire 🐴</h1>
        <p className="welcomeText">
          Votre interface EquiPass Santé — centrée sur votre cheval.
        </p>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button
          className={selectedTab === "equippass" ? "active" : ""}
          onClick={() => setSelectedTab("equippass")}
        >
          EQUI PASS (Identité)
        </button>

        <button
          className={selectedTab === "equipro" ? "active" : ""}
          onClick={() => setSelectedTab("equipro")}
        >
          EQUI SANTÉ (Soins)
        </button>
      </div>

      {/* CONTENU DES TABS */}
      {selectedTab === "equippass" && (
        <div className="equippass">

          {/* Recherche SIRE / Puce */}
          <div className="searchSection">
            <h2>Rechercher un cheval</h2>
            <div className="searchBox">
              <input
                type="text"
                placeholder="Numéro SIRE ou numéro de puce"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Rechercher</button>
            </div>
          </div>

          <p className="infoText">
            Cet espace correspond au livret officiel numérique (IFCE).
          </p>
        </div>
      )}

      {selectedTab === "equipro" && (
        <div className="equipro">

          {/* MES CHEVAUX */}
          <h2>Mes Chevaux</h2>
          <div className="horsesGrid">
            {chevaux.map((c) => (
              <div key={c.id} className="horseCard">
                <div className="horseAvatar">🐴</div>
                <div className="horseInfo">
                  <h3>{c.nom}</h3>
                  <p>SIRE : {c.sire}</p>
                  <p>Puce : {c.puce}</p>
                </div>

                {/* ALERTES */}
                <div className="alertBadgeContainer">
                  {c.alertes.vaccin === "urgent" && (
                    <div className="alertBadge urgent">Vaccin à jour ? ❗</div>
                  )}
                  {c.alertes.vermifuge === "urgent" && (
                    <div className="alertBadge urgent">Vermifuge urgent ❗</div>
                  )}
                  {c.alertes.parage === "urgent" && (
                    <div className="alertBadge urgent">Parage urgent ❗</div>
                  )}

                  {Object.values(c.alertes).every((a) => a === "ok") && (
                    <div className="alertBadge ok">Aucune alerte</div>
                  )}
                </div>

                <button className="btnViewLivret">
                  Ouvrir le livret numérique
                </button>
              </div>
            ))}

            {/* Ajouter un cheval */}
            <div className="horseCard addCard">
              <div className="plusIcon">+</div>
              <p>Ajouter un cheval</p>
            </div>
          </div>

          {/* PRESTATAIRES */}
          <h2>Mes Prestataires</h2>
          <div className="prestatairesList">
            {prestataires.map((p) => (
              <div key={p.id} className="prestataireCard">
                <strong>{p.nom}</strong>
                <p>{p.metier}</p>
              </div>
            ))}
          </div>

          {/* DOCUMENTS */}
          <h2>Mes Documents</h2>
          <div className="documentsList">
            {documents.map((d) => (
              <div key={d.id} className="documentCard">
                📄 {d.nom}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Proprietaires;
