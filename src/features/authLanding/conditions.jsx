import React from "react";
import { Link } from "react-router-dom";
import "./conditions.css";

export default function Conditions() {
  return (
    <div className="conditions-container">
      <h1 className="conditions-title">Conditions d’utilisation & Mentions légales</h1>
      <p className="conditions-intro">
        La présente page décrit les conditions d’utilisation de la plateforme EquiTotal,
        ainsi que les informations légales et notre politique de confidentialité.
      </p>

      {/* 1. Éditeur du site / Mentions légales */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">1. Éditeur du site</h2>
        <p>
          Le site et la plateforme EquiTotal (ci-après « la Plateforme ») sont édités par :
        </p>
        <ul>
          <li><strong>Raison sociale :</strong> [Nom de ta société]</li>
          <li><strong>Forme juridique :</strong> [ex : SAS, micro-entreprise]</li>
          <li><strong>Adresse :</strong> [Adresse complète]</li>
          <li><strong>SIRET :</strong> [Numéro SIRET]</li>
          <li><strong>Responsable de publication :</strong> [Nom, prénom]</li>
          <li><strong>Contact :</strong> [email de contact]</li>
        </ul>
        <p>
          Le site est hébergé par :  
          <strong>[Nom de l’hébergeur]</strong>, [adresse de l’hébergeur].
        </p>
      </section>

      {/* 2. Objet du service */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">2. Objet de la Plateforme</h2>
        <p>
          La Plateforme EquiTotal permet aux utilisateurs de gérer un livret numérique
          pour leurs chevaux, centraliser des informations, documents et analyses, et
          partager certaines données avec des prestataires (vétérinaires, maréchaux, etc.).
        </p>
      </section>

      {/* 3. Acceptation des conditions */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">3. Acceptation des conditions</h2>
        <p>
          L’accès et l’utilisation de la Plateforme impliquent l’acceptation pleine et entière
          des présentes Conditions Générales d’Utilisation (CGU). En créant un compte, l’utilisateur
          reconnaît avoir lu, compris et accepté ces conditions.
        </p>
      </section>

      {/* 4. Création de compte & accès */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">4. Création de compte et accès</h2>
        <ul>
          <li>L’utilisateur doit fournir des informations exactes et à jour.</li>
          <li>L’utilisateur est responsable de la confidentialité de ses identifiants.</li>
          <li>Toute activité réalisée via son compte est réputée effectuée par lui.</li>
          <li>EquiTotal se réserve le droit de suspendre un compte en cas d’usage abusif ou frauduleux.</li>
        </ul>
      </section>

      {/* 5. Utilisation de la Plateforme */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">5. Utilisation de la Plateforme</h2>
        <p>L’utilisateur s’engage notamment à :</p>
        <ul>
          <li>Ne pas utiliser la Plateforme à des fins illégales ou contraires aux lois en vigueur.</li>
          <li>Ne pas porter atteinte aux droits des tiers.</li>
          <li>Ne pas tenter de nuire au bon fonctionnement de la Plateforme.</li>
        </ul>
      </section>

      {/* 6. Données et contenus */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">6. Données et contenus</h2>
        <p>
          L’utilisateur reste seul responsable des informations et documents qu’il ajoute
          sur la Plateforme. Il garantit disposer des droits nécessaires sur les contenus
          qu’il téléverse ou partage.
        </p>
      </section>

      {/* 7. Responsabilité */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">7. Responsabilité</h2>
        <p>
          EquiTotal met en œuvre tous les moyens raisonnables pour assurer l’accès et le bon
          fonctionnement de la Plateforme, mais ne peut garantir une disponibilité continue.
        </p>
        <p>
          EquiTotal ne saurait être tenue responsable des dommages indirects, pertes de données,
          ou préjudices résultant de l’utilisation de la Plateforme.
        </p>
      </section>

      {/* 8. Données personnelles / RGPD */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">8. Données personnelles & confidentialité</h2>
        <p>
          EquiTotal collecte et traite certaines données personnelles dans le cadre de l’utilisation
          de la Plateforme, conformément au Règlement Général sur la Protection des Données (RGPD).
        </p>
        <p>Les données collectées peuvent inclure :</p>
        <ul>
          <li>Informations d’identification (nom, prénom, email, etc.).</li>
          <li>Informations liées aux chevaux et à leur suivi.</li>
          <li>Données de connexion et de navigation.</li>
        </ul>
        <p>Ces données sont utilisées pour :</p>
        <ul>
          <li>Assurer le fonctionnement de la Plateforme.</li>
          <li>Gérer les comptes utilisateurs.</li>
          <li>Améliorer les services proposés.</li>
        </ul>
        <p>
          Les données sont hébergées sur des serveurs sécurisés situés [en Europe / préciser].
          Elles ne sont jamais vendues à des tiers.
        </p>
        <p>
          Conformément à la réglementation, l’utilisateur dispose d’un droit d’accès, de rectification,
          d’opposition, de limitation et de suppression de ses données.  
          Il peut exercer ces droits en écrivant à : <strong>[email RGPD / support]</strong>.
        </p>
      </section>

      {/* 9. Durée de conservation */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">9. Durée de conservation des données</h2>
        <p>
          Les données sont conservées pendant la durée d’utilisation de la Plateforme, puis
          archivées ou supprimées au-delà d’un certain délai, sauf obligation légale contraire.
        </p>
      </section>

      {/* 10. Cookies */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">10. Cookies</h2>
        <p>
          La Plateforme peut utiliser des cookies techniques et de mesure d’audience.  
          L’utilisateur peut configurer son navigateur pour les refuser, mais certaines
          fonctionnalités peuvent alors être limitées.
        </p>
      </section>

      {/* 11. Propriété intellectuelle */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">11. Propriété intellectuelle</h2>
        <p>
          L’ensemble des éléments de la Plateforme (marques, logos, textes, visuels, structure)
          est protégé par le droit de la propriété intellectuelle.  
          Toute reproduction ou utilisation non autorisée est interdite.
        </p>
      </section>

      {/* 12. Modification des conditions */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">12. Modification des conditions</h2>
        <p>
          EquiTotal se réserve le droit de modifier les présentes conditions à tout moment.
          En cas de modification importante, les utilisateurs seront informés par un moyen
          approprié (email, notification, etc.).
        </p>
      </section>

      {/* 13. Droit applicable */}
      <section className="conditions-section">
        <h2 className="conditions-section-title">13. Droit applicable</h2>
        <p>
          Les présentes conditions sont soumises au droit français.  
          En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront
          ceux du ressort de [ville du siège social], sous réserve des dispositions légales
          impératives.
        </p>
      </section>

      <section className="conditions-section">
        <p className="conditions-note">
          Dernière mise à jour : [date à compléter].  
          Ce document est fourni à titre indicatif et doit être validé par un professionnel du droit.
        </p>
      </section>
    </div>
  );
}
