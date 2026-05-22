import "./livret-info.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"; 

export default function LivretInfo() {
    const navigate = useNavigate();

    return (
        <div className="info-wrapper">
            <button className="back-button" onClick={() => navigate(-1)}>
                ← Retour
            </button>    

            <div className="info-container">
                <img src={logo} alt="Logo ETS" className="info-logo" />
                <section className="info-hero">
                    <h1 className="info-title">le livret numérique</h1>
                    <p className="info-subtitle">
                        Le Livret Signalétique de votre cheval enfin dématérialisé!
                    </p>
                </section>

                <section className="info-section">
                    <p className="info-text">
                        Passeport, carnet de santé, suivi médical et historique de carrière toujours à portée de main
                    </p>

                    <ul>
                        <li>Centralisez toute la vie de votre cheval dans une application sécurisée.</li>
                        <li>Donnez l'accès à vos prestataires santé en un clic pour une mise à jour instantanée.</li>
                    </ul>
                </section>

                <section className="info-cta">
                    <a href="/register" className="btn btn-primary">
                        créer mon livret numérique
                    </a>
                </section>

                <section className="info-explain">
                    <h3 className="info-explain-title">Un carnet de santé interactif pour vos prestataires santé</h3>
                    <p className="info-explain-text">
                        Plus besoin de chercher le livret papier au fond de la sellerie. Lors d'un vaccin ou d'un soin, donnez un accès temporaire ou permanent à vs prestatires. Il saisit directement la date, le type de vaccin et le llot sur son smartphone. Votre livret est à jour, certifié et infalsifiable.
                    </p>
                </section>

                <section className="info-explain">
                    <h3 className="info-explain-title">L'équivalent numérique de votre livret papier toujours dans la poche</h3>
                    <p className="info-explain-text">
                        Identité, puce électronique, origines, signalement... Toutes les informations officielles de votre cheval vous suivent partout, que ce soit pour un contrôle en compétition, u transport ou une urgence vétérinaire.
                    </p>
                </section>

                <section className="info-explain">
                    <h3 className="info-explain-title">Un historique complet (médical & carrière)</h3>
                    <p className="info-explain-text">
                        Gardez une  trace indélébile de la vie de votre cheval: traitements passés, pathologies, maréchalerie, ostéopathes, visites véto... mais aussi son évolution, ses changements de propriétaires et ses résultats en compéition.
                    </p>
                </section>

                <div className="info-divider"></div>


                <section className="info-pro">
                    <h2 className="info-pro-title">Comment ça fonctionne pour vos prestataires ?</h2>
                    <p className="info-pro-text">
                        Une collaboration simplifiée en 3 étapes:
                    </p>

                    <ol>
                        <li><strong>Vous créez le profil de votre cheval:</strong> Renseignez les inforcmations de bas et le numero de puce de votre équidé.</li>
                        <li><strong>Vous partagez l'accès en un clic:</strong> Générez un lien ou un QR code à présenter au vétérinaire, maréchal ferrant ou responsable d'écurie.</li>
                        <li><strong>Ils mettent à jour le livret instantanément:</strong> Une fois l'accès accordé, ils peuvent saisir les soins prodigués, les vaccins administrés et les traitements prescrits. Votre livret est mis à jour en temps réel, accessible à tout moment.</li>
                    </ol>
                </section>

                <div className="info-divider"></div>


                <section className="info-security">
                    <h2 className="info-security-title">Sécurité et confidentialité</h2>
                    <p className="info-security-text">
                        Vos données sont protégées par des mesures de sécurité avancées. Seuls les utilisateurs autorisés peuvent accéder au livret numérique de votre cheval.
                    </p>
                </section>

                <div className="info-divider"></div>


                <section className="info-owner">
                    <h2 className="info-owner-title">Ideal en cas de changement de propriétaire</h2>
                    <p className="info-owner-text">
                        Le jour où votre cheval change de main, transférez l'intégralité de son historique médical et de sa carrière au nouveau propriétaire en un clic. Le fil de sa vie n'est jamais interrompu.
                    </p>
                </section>

                <div className="info-divider"></div>


                <section className="info-footer">
                    <h3 className="info-footer-title">Offrez à votre cheval le suivi numérique qu'il merite dès aujourd'hui!</h3>
                    <p className="info-footer-text">
                        Rejoignez la nouvelle génération de gestion équine: Centralisez toutes les informations de votre cheval, facilitez la collaboration avec vos prestataires santé et assurez un suivi complet de sa vie.
                    </p>
                    <p className="info-footer-text">
                        Créez votre livret numérique dès maintenant et profitez d'une gestion simplifiée et sécurisée de la santé de votre cheval.
                    </p>

                    <button className="btn btn-secondary" onClick={() => window.location.href = "/register"}>
                        créer mon livret numérique
                    </button>
                    <p className="info-footer-copyright ">
                        © 2023 Livret Numérique. Tous droits réservés.
                    </p>


                </section>
            </div>
        </div>
            );
}
