import React, { useState } from "react";

// Import des pages du livret
import PageCover from "./PageCover";
import Page02Identification from "./Page02Identification";
import Page03Signalement from "./Page03Signalement";
import { cheval } from "../../../data/mockData";

export default function LivretNumerique() {

  // SECTION ACTIVE
  const [section, setSection] = useState("cover");

  return (
    <div className="livret-wrapper" style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div className="sidebar-livret" 
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
        <button onClick={() => setSection("signalement")}>Signalement</button>
        {/* Tu rajouteras les autres sections ici */}
      </div>

      {/* CONTENU DU LIVRET */}
      <div className="livret-content" 
           style={{
             flex: 1,
             padding: "20px",
             overflowY: "auto"
           }}
      >
        {section === "cover" && <PageCover data={cheval} />}
        {section === "identification" && <Page02Identification data={cheval} />}
        {section === "signalement" && <Page03Signalement data={cheval} />}
      </div>

    </div>
  );
}
