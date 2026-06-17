"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
// On remonte les dossiers manuellement pour atteindre "data" à la racine de "src"
import { mockChevaux } from "../../../../data/mockData"; 
import Identite from "./components/identite";
import Signalement from "./components/signalement";

export default function LivretPage() {
  const params = useParams();
  const [ongletActif, setOngletActif] = useState("identite");

  // On récupère les données du cheval grâce à l'ID présent dans l'URL
  const chevalSelectionne = mockChevaux.find((c) => c.id === params.id);

  // Sécurité indispensable si l'ID n'est pas trouvé dans le mock
  if (!chevalSelectionne) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow border border-red-200 text-center max-w-sm">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-2">error</span>
          <p className="text-on-background font-semibold text-[16px]">Équidé introuvable</p>
          <p className="text-sm opacity-70 mt-1">L'identifiant {params.id} ne correspond à aucun cheval de test.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      
      {/* Barre de navigation supérieure (Header) */}
      <header className="bg-white border-b border-outline-variant w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white flex items-center justify-center border border-outline-variant rounded">
            <img 
              alt="Logo République Française" 
              className="w-full h-full object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-4KQqIcs-k5Wu3NXAFlOGu0FcY5KqLjLQC9m8QgxUBP0vThCeVbfgZOYfUB6ExvMrq2EeWsIK7a4vk2bBEOB5VhRVNnpVb1IjhF261MkWuiI2CVPuV56F-KP9-HNiy1R_PcZC6t5di0BhJFwz9HJdgILKQ99vCT-v5FugGP8KwOJyhTyf3NljmuX7F8hnm4BUQzEUztq_K87BkJGXuD64sOromuqfVK09_QRm4bqWKmzLdLaNF7lcVDmRzXdinG9bFzJoJWsmAJcm"
            />
          </div>
          <div>
            <h1 className="text-[20px] font-bold uppercase text-primary tracking-wide">DOCUMENT D'IDENTIFICATION</h1>
            <p className="text-[12px] font-semibold text-primary opacity-70">LIVRET SIRE / EQUIPASS</p>
          </div>
        </div>

        {/* Onglets de navigation version Desktop */}
        <nav className="hidden md:flex items-center gap-2 bg-surface-container-low p-1 rounded-lg border border-outline-variant">
          <button
            onClick={() => setOngletActif("identite")}
            className={`px-4 py-2 text-[14px] font-bold rounded-md transition-all ${
              ongletActif === "identite"
                ? "bg-primary text-white shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            IDENTITÉ
          </button>
          <button
            onClick={() => setOngletActif("signalement")}
            className={`px-4 py-2 text-[14px] font-bold rounded-md transition-all ${
              ongletActif === "signalement"
                ? "bg-primary text-white shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            SIGNALEMENT
          </button>
          <button
            onClick={() => setOngletActif("propriete")}
            className={`px-4 py-2 text-[14px] font-bold rounded-md transition-all ${
              ongletActif === "propriete"
                ? "bg-primary text-white shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            PROPRIÉTÉ
          </button>
        </nav>
      </header>

      {/* Zone de contenu principal dynamique */}
      <main className="flex-1 p-4 md:p-8 space-y-6 max-w-[1200px] w-full mx-auto pb-24 md:pb-8">
        
        {ongletActif === "identite" && (
          <Identite id={params.id} cheval={chevalSelectionne} />
        )}
        
        {ongletActif === "signalement" && (
          <Signalement cheval={chevalSelectionne} />
        )}

        {/* Sécurité pour l'onglet propriétaire */}
        {ongletActif === "propriete" && (
          <div className="bg-white border border-outline-variant p-8 text-center rounded-lg">
            <span className="material-symbols-outlined text-primary text-5xl mb-2">history_edu</span>
            <h3 className="text-[18px] font-bold text-primary uppercase">Historique de Propriété</h3>
            <p className="text-sm opacity-70 mt-2">Ce module (EquiGene / Attestation de propriété) sera connecté à l'étape suivante.</p>
            <div className="mt-4 p-4 bg-surface-container-low inline-block text-left rounded border border-outline-variant font-mono text-[12px]">
              Propriétaire actuel enregistré : <span className="font-bold text-primary">Angélique Panzolato</span>
            </div>
          </div>
        )}
      </main>

      {/* Barre de navigation basse pour la version Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-outline-variant flex justify-around items-center py-2 z-50 shadow-lg">
        <button 
          onClick={() => setOngletActif("identite")}
          className={`flex flex-col items-center justify-center flex-1 py-1 ${ongletActif === "identite" ? "text-primary font-bold" : "text-on-surface-variant"}`}
        >
          <span className="material-symbols-outlined">id_card</span>
          <span className="text-[11px]">Identité</span>
        </button>
        <button 
          onClick={() => setOngletActif("signalement")}
          className={`flex flex-col items-center justify-center flex-1 py-1 ${ongletActif === "signalement" ? "text-primary font-bold" : "text-on-surface-variant"}`}
        >
          <span className="material-symbols-outlined">draw</span>
          <span className="text-[11px]">Signal.</span>
        </button>
        <button 
          onClick={() => setOngletActif("propriete")}
          className={`flex flex-col items-center justify-center flex-1 py-1 ${ongletActif === "propriete" ? "text-primary font-bold" : "text-on-surface-variant"}`}
        >
          <span className="material-symbols-outlined">history_edu</span>
          <span className="text-[11px]">Propriété</span>
        </button>
      </nav>
    </div>
  );
}