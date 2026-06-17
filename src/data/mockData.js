// src/data/mockData.js

export const mockChevaux = [
  {
    id: "1",
    nom: "VULCAIN DE LA COUR",
    sire: "09123456Z",
    ueln: "25000109123456Z",
    transpondeur: "250258500421094",
    race: "ANGLO-ARABE",
    pourcentageArabe: "19.83%",
    dateEdition: "11/12/2025",
    robe: "BAI FONCE",
    tete: {
      enTete: "EN-TÊTE",
      liste: "PAS DE LISTE",
      epis: "UN EPI EN-TÊTE",
      ladre: "PAS DE LADRE"
    },
    membres: {
      antG: "NEANT",
      antD: "NEANT",
      postG: "NEANT",
      postD: "NEANT"
    },
    corps: {
      criniG: "UN EPI SOUS CRINIERE",
      criniD: "UN EPI SOUS CRINIERE",
      encolure: "DEUX EPIS SOUS ENCOLURE"
    },
    specificities: "AUCUNE SPECIFICITE",
    typageAdn: "TYPÉ ADN, CONTROLE DE FILIATION COMPATIBLE",
    agentIdentificateur: "Jean-Roch GAILLET",
    lieuIdentification: "POMPADOUR"
  },

  {
    id: "2",
    nom: "STITCH PROOF AA",
    sire: "25376905G",
    ueln: "25000125376905G",
    transpondeur: "250258500421999",
    race: "ANGLO-ARABE",
    pourcentageArabe: "25.50%",
    dateEdition: "18/02/2026",
    robe: "ALEZAN",
    tete: { enTete: "LARGE ETOILE", liste: "FINE LISTE", epis: "DEUX EPIS", ladre: "NEANT" },
    membres: { antG: "BALZANE", antD: "NEANT", postG: "NEANT", postD: "GRANDE BALZANE" },
    corps: { criniG: "NEANT", criniD: "UN EPI", encolure: "UN EPI" },
    specificities: "AUCUNE SPECIFICITE",
    typageAdn: "TYPÉ ADN, CONTROLE DE FILIATION COMPATIBLE",
    agentIdentificateur: "Jean-Roch GAILLET",
    lieuIdentification: "POMPADOUR"
  },
  
  {
    id: "3",
    nom: "GAVROCHE DU JOMY",
    sire: "16458712T",
    ueln: "25000116458712T",
    transpondeur: "250258500421888",
    race: "TROTTEUR FRANCAIS",
    pourcentageArabe: null, // Pas de pourcentage pour Gavroche !
    dateEdition: "05/05/2026",
    robe: "ALEZAN BRULE",
    tete: { 
      enTete: "QUELQUES POILS EN TÊTE", 
      liste: "NEANT", 
      epis: "UN EPI PLUS HAUT QUE LA LIGNE DES YEUX", 
      ladre: "NEANT" 
    },
    membres: { 
      antG: "NEANT", 
      antD: "NEANT", 
      postG: "PETITE BALZANE", 
      postD: "NEANT" 
    },
    corps: { 
      criniG: "UN EPI EN CONFLUENCE", 
      criniD: "NEANT", 
      encolure: "NEANT" 
    },
    specificities: "AUCUNE SPECIFICITE",
    typageAdn: "TYPÉ ADN, CONTROLE DE FILIATION COMPATIBLE",
    agentIdentificateur: "Hubert LALANDE",
    lieuIdentification: "MESLAY-DU-MAINE"
  }
];