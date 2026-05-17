import "./prestataires.css";
import { useNavigate } from "react-router-dom";

export default function Prestataires() {
  const navigate = useNavigate();

  const cards = [
    {
      id: "veterinaire",
      title: "Mon vétérinaire",
      desc: "Soins médicaux, vaccins, urgences",
      path: "/prestataires/veterinaire"
    },
    {
      id: "marechal",
      title: "Mon maréchal-ferrant",
      desc: "Ferrure, parage, suivi des pieds",
      path: "/prestataires/marechal"
    },
    {
      id: "osteo",
      title: "Mon ostéopathe",
      desc: "Mobilité, bien-être, suivi locomoteur",
      path: "/prestataires/osteo"
    },
    {
      id: "autres",
      title: "Autres prestataires",
      desc: "Dentiste, saddle-fitter, coach…",
      path: "/prestataires/autres"
    }
  ];

  return (
    <div className="prest-container">
      <h1 className="prest-title">Mes prestataires santé</h1>

      <div className="prest-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="prest-card"
            onClick={() => navigate(card.path)}
          >
            <h3 className="prest-card-title">{card.title}</h3>
            <p className="prest-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
