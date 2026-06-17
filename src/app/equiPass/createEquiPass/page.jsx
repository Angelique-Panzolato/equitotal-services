"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEquiPass() {
  const router = useRouter();
  
  // États du formulaire
  const [nomCheval, setNomCheval] = useState("");
  const [transpondeur, setTranspondeur] = useState("");
  const [identityFile, setIdentityFile] = useState(null);
  const [ownershipFile, setOwnershipFile] = useState(null);

  // États de la logique de validation
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null); // 'success' | 'error' | null
  const [scenarioMessage, setScenarioMessage] = useState("");

  // Simulation de la base de données locale
  const chevauxExistants = [
    { id: 1, nom: "Uranos du Vent", puce: "250123456789012" },
    { id: 2, nom: "Bella Donna", puce: "250987654321098" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nomCheval || !transpondeur || !identityFile || !ownershipFile) {
      alert("Veuillez remplir tous les champs et fournir les deux documents requis.");
      return;
    }

    setIsVerifying(true);
    setVerificationStatus(null);

    // --- SIMULATION LOGIQUE INTERNE / IA & API IFCE ---
    setTimeout(() => {
      setIsVerifying(false);

      // Si le transpondeur commence par "250", succès de propriété
      if (transpondeur.trim().startsWith("250")) {
        setVerificationStatus("success");
     
        const windowHorse = chevauxExistants.find(c => c.puce === transpondeur.trim());
        
        if (windowHorse) {
          setScenarioMessage(
            `Le livret numérique certifié a été rattaché avec succès au profil existant de "${windowHorse.nom}" sur votre tableau de bord.`
          );
        } else {
          setScenarioMessage(
            `Livret numérique créé avec succès ! Le profil complet de "${nomCheval}" a été automatiquement généré sur votre tableau de bord.`   
          );
        }
      } else {
        setVerificationStatus("error");
      }
    }, 3000);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
      
      <button 
        onClick={() => router.back()} 
        style={{ background: "none", border: "none", color: "#0070f3", cursor: "pointer", marginBottom: "20px", fontSize: "1rem" }}
      >
        ← Retour au tableau de bord
      </button>

      <h1 style={{ marginBottom: "10px" }}>Créer un EquiPass 📑</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Enregistrez un nouveau cheval. Notre système va extraire les données de vos documents et les croiser avec l'API officielle de l'IFCE pour certifier votre propriété.
      </p>

      {/* ÉTAT DE CHARGEMENT / ANALYSE */}
      {isVerifying && (
        <div style={{ backgroundColor: "#fff9db", border: "1px solid #f59f00", padding: "20px", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ margin: 0, fontWeight: "bold", color: "#f59f00" }}>
            🔄 Analyse des documents en cours et connexion à l'IFCE...
          </p>
          <p style={{ margin: "5px 0 0 0", fontSize: "0.9rem", color: "#666" }}>
            Extraction des données du certificat et vérification du propriétaire...
          </p>
        </div>
      )}

      {/* RÉSULTAT : SUCCÈS */}
      {verificationStatus === "success" && (
        <div style={{ backgroundColor: "#d3f9d8", border: "1px solid #2b8a3e", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#2b8a3e" }}>✅ Propriété certifiée par l'IFCE !</h3>
          
          <p style={{ margin: "0 0 15px 0", color: "#1e5229", fontWeight: "500" }}>
            {scenarioMessage}
          </p>
          
          <p style={{ margin: "0 0 15px 0", color: "#666", fontSize: "0.9rem" }}>
            Nom validé : <strong>{nomCheval}</strong> ({transpondeur})
          </p>
          
          <button 
            onClick={() => router.push("/dashboards/proprietaires")}
            style={{ backgroundColor: "#2b8a3e", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
          >
            Accéder au Livret de mon cheval
          </button>
        </div>
      )}

      {/* RÉSULTAT : ÉCHEC */}
      {verificationStatus === "error" && (
        <div style={{ backgroundColor: "#ffe3e3", border: "1px solid #c92a2a", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#c92a2a" }}>❌ Échec de la certification</h3>
          <p style={{ margin: 0, color: "#c92a2a" }}>
            Les données extraites de votre certificat de propriété ne correspondent pas aux registres de l'IFCE pour ce numéro de transpondeur. Veuillez vérifier vos documents ou contacter l'administration.
          </p>
        </div>
      )}

      {/* FORMULAIRE */}
      {!verificationStatus && !isVerifying && (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Nom du cheval :</label>
            <input 
              type="text" 
              value={nomCheval}
              onChange={(e) => setNomCheval(e.target.value)}
              placeholder="Ex: Uranos du Vent"
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Numéro de transpondeur (Puce) :</label>
            <input 
              type="text" 
              value={transpondeur}
              onChange={(e) => setTranspondeur(e.target.value)}
              placeholder="Ex: 250123456789012 (Mettre 250... pour réussir le test)"
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Pièce d'identité du propriétaire (Passeport / CNI) :</label>
            <input 
              type="file" 
              accept="image/*,.pdf"
              onChange={(e) => setIdentityFile(e.target.files[0])}
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", background: "#f9f9f9" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Certificat de propriété officiel (Document IFCE) :</label>
            <input 
              type="file" 
              accept="image/*,.pdf"
              onChange={(e) => setOwnershipFile(e.target.files[0])}
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", background: "#f9f9f9" }}
            />
          </div>

          <button 
            type="submit" 
            style={{ backgroundColor: "#0070f3", color: "white", border: "none", padding: "12px", borderRadius: "5px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
          >
            Lancer la vérification & Créer le livret
          </button>

        </form>
      )}
    </div>
  );
}