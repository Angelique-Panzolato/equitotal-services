import { useNavigate } from "react-router-dom";
import "./backbutton.css";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      ← Retour
    </button>
  );
}
