import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
  e.preventDefault();

  // Exemple simple : un admin
  if (email === "angelique.panzolato@gmail.com" && password === "admin") {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", "admin");
    navigate("/admin");
    return;
  }

  // Exemple simple : un utilisateur normal
  if (email === "test@test.com" && password === "12345") {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", "user");
    navigate("/dashboard");
    return;
  }

  alert("Identifiants incorrects");
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
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>

      <div className="login-info">
        <img src="src/assets/logo.png" alt="Logo EquiTotal" className="login-logo" />
        <p>Bienvenue sur le Livret Numérique d'EquiTotal Services</p>
      </div>  
    </div>
  );
}
