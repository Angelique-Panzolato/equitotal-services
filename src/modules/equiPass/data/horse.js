export const horse = {
  id: 1,
  nom: "Nom du cheval",
  sexe: "Hongre",
  race: "Selle Français",
  age: 8,
  dateNaissance: "2018-04-12",
  proprietaire: "Nom du propriétaire",
  photo: "src/assets/cheval.jpg",

  // Informations biologiques
  taille: 165, // en cm
  poids: 520, // en kg
  robe: "Alezan",

  // Santé
  sante: {
    dernierVeto: "2024-02-10",
    vaccins: [
      { nom: "Tétanos", date: "2024-01-15" },
      { nom: "Grippe", date: "2024-01-15" }
    ],
    vermifuge: "2024-03-01",
    allergies: ["Poussière"],
    blessures: []
  },

  // Alimentation
  alimentation: {
    foin: "8 kg/jour",
    granulés: "3 L/jour",
    supplements: ["Electrolytes", "Magnésium"]
  },

  // Comportement
  comportement: {
    temperament: "Calme",
    notes: "Très sociable, bon en extérieur"
  },

  // Entraînement
  entrainement: [
    { date: "2024-03-10", type: "Dressage", duree: 45 },
    { date: "2024-03-12", type: "Saut", duree: 30 }
  ],

  // Documents
  documents: [
    { nom: "Carnet de santé", url: "/docs/carnet.pdf" },
    { nom: "Papiers d'identité", url: "/docs/identite.pdf" }
  ],

  // Galerie
  galerie: [
    "src/assets/photo1.jpg",
    "src/assets/photo2.jpg"
  ],

// Historique des propriétaires
  historiqueProprietaires: [
    {
      nom: "Dupont Jean",
      adresse: "12 rue des Écuries",
      cpVille: "64000 Pau",
      pays: "France",
      dateDebut: "01/03/2020",
      dateFin: "—",
      mode: "Achat"
    }
  ]


};

  