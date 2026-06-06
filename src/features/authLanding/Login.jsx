import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // On récupère l'utilisateur stocké lors de l'inscription
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("Aucun compte trouvé. Veuillez vous inscrire.");
      return;
    }

    // Vérification email + mot de passe
    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Identifiants incorrects.");
      return;
    }

    // Connexion OK
    localStorage.setItem("isLoggedIn", "true");

    // Redirection selon le rôle
    if (storedUser.role === "proprietaire") {
      navigate("/proprietaires");
      return;
    }

    if (storedUser.role === "prestataire") {
      navigate("/prestataires");
      return;
    }

    if (storedUser.role === "institution") {
      navigate("/institution");
      return;
    }

    // Sécurité : si aucun rôle ne correspond
    navigate("/");
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Connexion</h1>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>

      <div className="login-info">
        <img src="src/assets/logo.png" alt="Logo EquiTotal" className="login-logo" />
        <p>Bienvenue sur EquiPass Sante</p>
      </div>
    </div>
  );
}
