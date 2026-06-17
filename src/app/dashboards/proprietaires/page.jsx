"use client";

import { useState } from "react";
import { useRouter} from "next/navigation";
import "./proprietaires.css"; // Importation du CSS local au dossier


const Proprietaires = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
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

  // Gestion de la recherche de transpondeur / SIRE
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    // Recherche par numéro de puce ou numéro SIRE
    const trouve = chevaux.find(
      (c) => c.puce === search.trim() || c.sire === search.trim()
    );

    setSearchResult(trouve || null);
    setHasSearched(true);
  };

  // Action temporaire pour la création de livret
  const handleCreateEquiPass = () => {
    router.push("/equiPass/createEquiPass");
  };

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

          {/* CTA Principal au-dessus du formulaire */}
          <div style={{ backgroundColor: "#f0f7ff", padding: "1.5rem", borderRadius: "8px", marginBottom: "2rem", border: "1px solid #cce3ff" }}>
            <h3 style={{ marginTop: 0, color: "#0056b3" }}>Nouveau compagnon ?</h3>
            <p style={{ margin: "0.5rem 0 1rem 0" }}>Si votre cheval ne possède pas encore de livret numérique sur la plateforme, créez-le dès maintenant.</p>
            <button 
              onClick={handleCreateEquiPass}
              className="btnViewLivret"
              style={{ backgroundColor: "#0070f3", color: "white", width: "auto", padding: "0.75rem 1.5rem" }}
            >
              ➕ Créer le livret numérique de mon cheval
            </button>
          </div>

          {/* Recherche SIRE / Puce */}
          <div className="searchSection">
            <h2>Rechercher un cheval</h2>
            <form onSubmit={handleSearch} className="searchBox">
              <input
                type="text"
                placeholder="Numéro SIRE ou numéro de puce (ex: 250123456789012)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Rechercher</button>
            </form>
          </div>

          {/* ZONE DE RÉSULTAT DE RECHERCHE */}
          {hasSearched && (
            <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
              {searchResult ? (
                /* SCÉNARIO A : Le cheval existe -> Affichage sous forme de Card */
                <div className="horseCard" style={{ width: "100%", maxWidth: "500px", border: "2px solid #28a745", margin: "0 auto" }}>
                  <div className="horseAvatar">🐴</div>
                  <div className="horseInfo">
                    <span style={{ backgroundColor: "#28a745", color: "white", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold" }}>
                      ✓ EquiPass Trouvé
                    </span>
                    <h3 style={{ marginTop: "0.5rem" }}>{searchResult.nom}</h3>
                    <p>SIRE : {searchResult.sire}</p>
                    <p>Puce : {searchResult.puce}</p>
                  </div>
                  <button className="btnViewLivret" style={{ marginTop: "1rem" }}>
                    Ouvrir le livret complet
                  </button>
                </div>
              ) : (
                /* SCÉNARIO B : Le cheval n'existe pas -> Redirection vers création */
                <div style={{ backgroundColor: "#fff", border: "1px solid #dc3545", padding: "1.5rem", borderRadius: "8px", maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
                  <p style={{ color: "#dc3545", margin: "0 0 1rem 0", fontWeight: "bold" }}>
                    Aucun EquiPass ne correspond à cet identifiant.
                  </p>
                  <button 
                    onClick={handleCreateEquiPass}
                    className="btnViewLivret"
                    style={{ backgroundColor: "#dc3545", color: "white" }}
                  >
                    Créer le livret numérique pour ce cheval
                  </button>
                </div>
              )}
            </div>
          )}

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

                <button onClick={() => router.push(`/equiPass/livret/${c.id}`)}
                  className="btnViewLivret"
                  >
                  Ouvrir le livret numérique
                </button>
              </div>
            ))}

            {/* Ajouter un cheval */}
            <div className="horseCard addCard" onClick={handleCreateEquiPass} style={{ cursor: "pointer" }}>
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