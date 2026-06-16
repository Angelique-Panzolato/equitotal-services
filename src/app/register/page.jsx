"use client"; // Obligatoire pour gérer le state (useState) et l'événement onSubmit

import { useState } from "react";
import { useRouter } from "next/navigation"; // Le système de navigation natif de Next.js
import Link from "next/link"; // Le composant Link optimisé de Next.js
import "../../styles/Register.css"; // On cible le fichier déplacé dans src/styles/

export default function Register() {
  const router = useRouter(); // On initialise le routeur

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

    // On le stocke dans le localStorage (exécuté côté client sans soucis)
    localStorage.setItem("user", JSON.stringify(newUser));

    // On redirige vers la page de connexion avec router.push()
    router.push("/login");
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
        {/* Remplacement du 'to=' par 'href=' */}
        <Link href="/login">Se connecter</Link>
      </p>
    </div>
  );
}