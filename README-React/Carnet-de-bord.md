📘 Carnet de Bord Technique — Projet Livret Numérique Équin (EquiTotal Services)
(Version initiale — tu pourras le compléter au fur et à mesure)

🗂️ 1. Contexte du projet
Le projet consiste à reproduire le livret signalétique IFCE en version numérique, avec :

un rendu fidèle au livret papier

une navigation page par page

un affichage format paysage

une expérience utilisateur fluide et intuitive

une structure de code propre, modulaire, scalable

📅 2. Historique des versions & décisions techniques
📌 Étape 1 — Mise en place du livret (OK)
Création des pages : page01, page02, etc.

Mise en place du format paysage via .livret-page.page01

Page 01 fonctionnelle et affichée correctement

Décision :  
→ Utiliser une classe globale .livret-page pour toutes les pages.

📌 Étape 2 — Problème d’affichage de la page 02
Symptômes :

Page 02 invisible

Swiper n’affiche qu’une seule page

Format paysage non appliqué

Cause identifiée :

Absence de .livret-page global

Mauvaise classe dans le JSX (livret-page02 au lieu de livret-page page02)

CSS dupliqué et désorganisé

Décision :  
→ Nettoyage complet du CSS
→ Ajout d’une classe globale .livret-page  
→ Correction du JSX pour uniformiser les pages

📌 Étape 3 — Tentative d’utiliser Swiper vertical
Objectif :  
Afficher les pages en scroll vertical.

Résultat :

Fonctionnel pour la page 01

Page 02 toujours invisible

Conflits CSS persistants

Décision :  
→ Abandon de Swiper pour ce cas d’usage.

📌 Étape 4 — Tentative d’utiliser react-pageflip
Objectif :  
Créer un flipbook avec effet page qui se tourne.

Résultat :

Effet flip horizontal OK

Effet flip vertical impossible (non supporté par la librairie)

Page 02 non reconnue (composants non forwardRef)

Décision :  
→ Abandon de react-pageflip pour un flip vertical.
→ Nécessité d’une librairie compatible flip vertical.

📌 Étape 5 — Besoin exprimé clairement
Angelique souhaite :

un flip vertical

une page à la fois

un effet calendrier (bas → haut)

un rendu fluide et réaliste

Conclusion technique :  
→ Seule la librairie Turn.js (ou équivalent) permet un flip vertical réel.
→ Préparation d’une version propre basée sur Turn.js.

🧩 3. État actuel du projet
✔ Page 01 : fonctionnelle
✔ Structure des pages : OK
✔ CSS global : en cours de stabilisation
❌ Page 02 : non affichée dans les versions précédentes
❌ Flip vertical : non fonctionnel avec react-pageflip
❌ Effet calendrier : non supporté par la librairie actuelle
🎯 4. Prochaine étape (validée par Angelique)
👉 Implémenter un flipbook vertical avec effet calendrier (Turn.js)
Une page visible à la fois

Effet flip vertical réel

Navigation fluide

Intégration propre dans React

Pages 01 et 02 affichées correctement

📝 5. Notes pour le développeur qui relira le code
Le projet a connu plusieurs tentatives d’intégration (Swiper, react-pageflip).

Le besoin final est un flip vertical, ce qui impose un changement de librairie.

Le CSS a été nettoyé pour éviter les conflits.

Les pages sont déjà structurées proprement en composants.

Le projet est prêt pour l’intégration du flipbook vertical final.

🚀 6. Ce qu’il reste à faire (roadmap)
[ ] Installer Turn.js

[ ] Créer un composant Flipbook vertical

[ ] Intégrer les pages existantes

[ ] Tester l’effet flip vertical

[ ] Ajuster le CSS pour le format paysage

[ ] Ajouter les pages suivantes du livret

[ ] Ajouter une navigation (facultatif)

[ ] Ajouter un mode impression PDF (facultatif)