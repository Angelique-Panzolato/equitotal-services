"use client"; 

import { useState, useEffect } from "react"; // 1. Ajout de useEffect
import { useRouter } from "next/navigation"; 
import Image from "next/image"; 
import "../../styles/Login.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [storedUser, setStoredUser] = useState(null); // 2. On stocke l'user dans un state
  const router = useRouter(); 

  // 3. Ce hook s'exécute UNIQUEMENT côté client (navigateur) après le premier rendu
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        setStoredUser(JSON.parse(user));
      }
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    // 4. La vérification utilise maintenant le state sécurisé
    if (!storedUser) {
      setError("Aucun compte trouvé. Veuillez vous inscrire.");
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Identifiants incorrects.");
      return;
    }

    // Connexion OK
    localStorage.setItem("isLoggedIn", "true");

    // Redirection selon le rôle
    if (storedUser.role === "proprietaire") {
      router.push("/dashboards/proprietaires");
      return;
    }

    if (storedUser.role === "prestataire") {
      router.push("/dashboards/prestataires");
      return;
    }

    if (storedUser.role === "institution") {
      router.push("/dashboards/institutions");
      return;
    }

    router.push("/");
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
        <Image src="/assets/logo.png" alt="Logo EquiTotal" className="login-logo" width={200} height={100} />
        <p>Bienvenue sur EquiPass Sante</p>
      </div>
    </div>
  );
}