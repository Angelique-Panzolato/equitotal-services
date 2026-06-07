import React from "react";

// Import des pages du livret
import PageCover from "./PageCover";
import "../Livret/PageCover.css";
// Les suivantes viendront après
// import Page01Signalement from "./pagesjsx/Page01Signalement";
// import Page02Graphique from "./pagesjsx/Page02Graphique";
// etc.

export default function LivretNumerique() {

  // 🔹 Données mock pour tester (tu remplaceras par les vraies plus tard)
  const cheval = {
    nom: "JE S’APPELLE PROOF AA",
    sire: "25376905G",
    ueln: "25000125376905G",
    transpondeur: "250258500421094",
    race: "ANGLO-ARABE",
    sangArabe: "19.83%"
  };

  return (
    <div className="livret-wrapper">

      {/* PAGE DE GARDE */}
      <PageCover data={cheval} />

      {/* Quand on aura les autres pages, on les active ici */}
      {/* <Page01Signalement data={cheval.signalement} /> */}
      {/* <Page02Graphique data={cheval.graphique} /> */}
      {/* <Page03Identification data={cheval.identification} /> */}

    </div>
  );
}
