📝 Journal de Bord - Développement Admin Dashboard
🏗️ 1. Architecture & Layout (Structure)
Création du AdminLayout : Mise en place d'un composant structurel parent qui encapsule la navigation (AdminSidebar) et l'entête (AdminHeader).

Gestion des enfants (children) : Utilisation de la prop children pour permettre au layout d'afficher dynamiquement n'importe quelle page admin (Dashboard, Users, etc.) sans répéter le code du menu.

Routage Protégé : Intégration du composant ProtectedAdmin dans App.jsx pour sécuriser l'accès à l'espace /admin.

🛡️ 2. Logique de Navigation & Sécurité
Centralisation du Logout : La fonction handleLogout a été remontée dans App.jsx pour gérer la déconnexion de manière globale (nettoyage du localStorage et redirection).

Prop Drilling contrôlé : Passage de la fonction de déconnexion à travers le Layout jusqu'au bouton final dans le Header Admin.

Détection du contexte d'URL : Utilisation du hook useLocation pour identifier si l'utilisateur est sur une page /admin ou sur le site public.

🎨 3. UI / UX & Design (CSS)
Rendu Conditionnel : Mise en place d'une logique dans App.jsx pour masquer automatiquement le Header et le Footer "Client" lorsqu'on navigue sur l'espace Admin.

Design Mobile-First : * Le AdminHeader passe d'un affichage en colonne (mobile) à une ligne (desktop).

La AdminSidebar a été optimisée pour rester cohérente avec la charte graphique (Bleu nuit #041c36 et Jaune #ffe603).

Adaptabilité globale : Ajout d'une classe dynamique .admin-page sur le conteneur principal (app-container) pour permettre des ajustements de style globaux (largeur d'écran, marges).

🧹 4. Refactorisation & Nettoyage (Clean Code)
Correction du Router : Déplacement du BrowserRouter dans main.jsx pour permettre l'utilisation des hooks de navigation dans l'intégralité de l'application.

Suppression des doublons : Nettoyage des composants Admin.jsx et AdminLayout.jsx pour éviter les imbrications infinies et les headers en double.

Centralisation des données : Migration vers un fichier mockData.js unique pour la gestion des données de test (utilisateurs, chevaux, etc.) et suppression des anciens fichiers de données redondants.

🚀 Prochaines étapes prévues :
Implémentation du tableau de gestion des utilisateurs (Users.jsx).

Mise en place des fonctions de filtrage et de suppression (en local avant liaison API).

Peaufinage du menu "Hamburger" pour la navigation mobile de l'admin.