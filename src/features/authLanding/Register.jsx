import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("proprietaire");

  const handleSubmit = (e) => {
    e.preventDefault();

    // On crée l'utilisateur
    const newUser = {
      email,
      password,
      role,
    };

    // On le stocke dans le localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    // On redirige vers la page de connexion
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Créer un compte</h1>

      <p className="register-subtitle">
        Accédez à votre espace personnel et créez le livret numérique de votre cheval.
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Type d'utilisateur</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="proprietaire">Propriétaire</option>
          <option value="prestataire">Prestataire</option>
          <option value="institution">Institution</option>
        </select>

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
