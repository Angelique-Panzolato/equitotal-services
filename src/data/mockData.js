// src/data/mockData.js

export const MOCK_HORSES = [
  {
    id: 1,
    nom: "Galopin du Logis",
    sire: "12345678A",
    race: "Selle Français",
    robe: "Bai",
    dateNaissance: "2016-05-12",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400", // Image d'exemple
    livretValide: true,
    vaccins: [
      { date: "2023-10-15", type: "Grippe/Tétanos", veto: "Dr. Martin" },
      { date: "2024-04-20", type: "Rhinopneumonie", veto: "Dr. Martin" }
    ]
  },
  {
    id: 2,
    nom: "Starlight",
    sire: "98765432B",
    race: "Poney Français de Selle",
    robe: "Gris",
    dateNaissance: "2019-03-25",
    image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=400",
    livretValide: false,
    vaccins: []
  }
];