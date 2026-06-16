import Link from "next/link"; // Utilisation de Link pour la navigation interne
import "../styles/Footer.css"; // Import du fichier CSS pour le style du footer

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <Link href="/conditions" className="footer-link">
            Conditions & Confidentialité
        </Link>

        <Link href="/aide" className="footer-link">
          Aide
        </Link>

        <p>© 2026 EquiTotal Services</p>
    </div>
    </footer>
  );
}