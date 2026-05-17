import "./livret-numerique.css";
import { useState } from "react";

export default function LivretNumerique() {
  const [selectedHorse, setSelectedHorse] = useState("");
  const [files, setFiles] = useState([]);

  const chevaux = [
    { id: 1, nom: "Hidalgo" },
    { id: 2, nom: "Eclipse" }
  ];

  function handleFilesChange(e) {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function handleAnalyse() {
    // plus tard : envoi au backend (OCR + IA)
    console.log("Prêt à analyser :", { selectedHorse, files });
  }

  return (
    <div className="livret-container">
      <h1 className="livret-title">Créer le livret numérique</h1>

      <div className="livret-section">
        <h2 className="livret-subtitle">1. Sélectionner un cheval</h2>
        <select
          className="livret-select"
          value={selectedHorse}
          onChange={(e) => setSelectedHorse(e.target.value)}
        >
          <option value="">Choisir un cheval</option>
          {chevaux.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nom}
            </option>
          ))}
        </select>
      </div>

      <div className="livret-section">
        <h2 className="livret-subtitle">2. Ajouter les pages du livret papier</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFilesChange}
        />

        <div className="livret-files">
          {files.map((file, index) => (
            <div key={index} className="livret-file-item">
              {file.name}
            </div>
          ))}
        </div>
      </div>

      <div className="livret-section">
        <h2 className="livret-subtitle">3. Lancer l’analyse</h2>
        <button
          className="livret-analyse-btn"
          onClick={handleAnalyse}
          disabled={!selectedHorse || files.length === 0}
        >
          Analyser les pages (bientôt)
        </button>
      </div>
    </div>
  );
}
