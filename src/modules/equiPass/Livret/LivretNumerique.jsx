import React, { useState } from "react";
import "./LivretNumerique.css";

// Import des pages du livret
import PageCover from "./PageCover";
import Page01Identification from "./Page01Identification";
import Page02Identification from "./Page02Identification";
import Page03Signalement from "./Page03Signalement";
import { cheval } from "../../../data/mockData";
import Page04Castration from "./Page04Castration";
import Page05Proprietaire from "./Page05Proprietaire";
import Page06Historique from "./Page06Historique";
import Page07SubstancesReglementees from "./Page07SubstancesReglementees";
import Page08Validation from "./Page08Validation";
import Page09ProprieteFEI from "./Page09ProprieteFEI";
import Page10CertificationZootechnique from "./Page10CertificationZootechnique";

export default function LivretNumerique() {

  // SECTION ACTIVE
  const [section, setSection] = useState("cover");

  return (
    <div className="livret-wrapper" style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div
        className="sidebar-livret"
        style={{
          width: "220px",
          background: "#f4f4f4",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          borderRight: "1px solid #ddd"
        }}
      >
        <button onClick={() => setSection("cover")}>Page de garde</button>
        <button onClick={() => setSection("identification")}>Identification</button>
        <button onClick={() => setSection("identification2")}>Identification (2)</button>
        <button onClick={() => setSection("signalement")}>Signalement</button>
        <button onClick={() => setSection("castration")}>Castration</button>
        <button onClick={() => setSection("proprietaire")}>Propriétaires</button>
        <button onClick={() => setSection("historique")}>Historique</button>
        <button onClick={() => setSection("substances-reglementees")}>Substances réglementées</button>
        <button onClick={() => setSection("validation")}>Validation</button>
        <button onClick={() => setSection("propriete-fei")}>Propriété FEI</button>
        <button onClick={() => setSection("certificat-zootechnique")}>Certificat zootechnique</button>
      </div>

      {/* CONTENU DU LIVRET */}
      <div
        className="livret-content"
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto"
        }}
      >
        {section === "cover" && <PageCover data={cheval} />}
        {section === "identification" && <Page01Identification data={cheval} />}
        {section === "identification2" && <Page02Identification data={cheval} />}
        {section === "signalement" && <Page03Signalement data={cheval} />}
        {section === "castration" && <Page04Castration data={cheval} />}
        {section === "proprietaire" && <Page05Proprietaire data={cheval} />}
        {section === "historique" && <Page06Historique data={cheval} />}
        {section === "substances-reglementees" && <Page07SubstancesReglementees data={cheval} />}
        {section === "validation" && <Page08Validation data={cheval} />}
        {section === "propriete-fei" && <Page09ProprieteFEI data={cheval} />}
        {section === "certificat-zootechnique" && <Page10CertificationZootechnique data={cheval} />}
      </div>

    </div>
  );
}
