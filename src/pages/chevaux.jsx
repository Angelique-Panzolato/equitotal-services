import "./chevaux.css";
import { useNavigate } from "react-router-dom";

export default function Chevaux() {
  const navigate = useNavigate();

  // ⚠️ Plus tard : on remplacera ça par des données venant du backend
  const chevaux = [
    {
      id: 1,
      nom: "Hidalgo",
      race: "Pur-sang",
      age: 7,
      image: "/img/cheval1.jpg"
    },
    {
      id: 2,
      nom: "Eclipse",
      race: "Selle Français",
      age: 10,
      image: "/img/cheval2.jpg"
    }
  ];

  return (
    <div className="chevaux-container">
      <h1 className="chevaux-title">Mes chevaux</h1>

      <div className="chevaux-grid">
        {chevaux.map((cheval) => (
          <div
            key={cheval.id}
            className="cheval-card"
            onClick={() => navigate(`/chevaux/${cheval.id}`)}
          >
            <div className="cheval-image-wrapper">
              <img src={cheval.image} alt={cheval.nom} className="cheval-image" />
            </div>

            <div className="cheval-info">
              <h3 className="cheval-nom">{cheval.nom}</h3>
              <p className="cheval-detail">{cheval.race}</p>
              <p className="cheval-detail">{cheval.age} ans</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
