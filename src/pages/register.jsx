import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici tu ajouteras plus tard la logique réelle d'inscription (API)
    // Pour l'instant on simule une inscription réussie :
    navigate("/dashboard");
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Créer un compte</h1>

      <p className="register-subtitle">
        Accédez à votre espace personnel et créez le livret numérique de votre cheval.
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Votre email" required />

        <label>Mot de passe</label>
        <input type="password" placeholder="Votre mot de passe" required />

        <button type="submit" className="register-button">
          Créer mon compte
        </button>
      </form>

      <p className="register-login">
        Vous avez déjà un compte ?{" "}
        <Link to="/login">Se connecter</Link>
      </p>
    </div>
  );
}
