# Stockify - Gestion de stock simplifiée

Ce projet est une application web moderne construite avec Next.js et stylisée avec Tailwind CSS. Elle offre une interface élégante et animée pour présenter un logiciel de gestion de stock fictif nommé "Stockify".

## Stack technique

*   **Framework :** [Next.js](https://nextjs.org/) (React)
*   **Styling :** [Tailwind CSS](https://tailwindcss.com/)
*   **Composants UI :** [ShadCN UI](https://ui.shadcn.com/)
*   **Animations :** [Framer Motion](https://www.framer.com/motion/)
*   **Icônes :** [Lucide React](https://lucide.dev/)

## Fonctionnalités de la landing page

*   **Design moderne et sombre :** Une interface utilisateur élégante et professionnelle.
*   **Animations au défilement :** Des transitions subtiles qui se déclenchent lorsque vous faites défiler la page pour une expérience utilisateur dynamique.
*   **Composants réutilisables :** Construit avec les composants de ShadCN pour une maintenance et une évolution facilitées.
*   **Sticky Header :** Une barre de navigation qui reste visible et accessible en haut de la page lors du défilement.
*   **Carrousel d'images :** Une présentation animée des fonctionnalités du produit.
*   **Responsive :** S'adapte à toutes les tailles d'écran, du mobile au bureau.

## Démarrage

Pour lancer le projet en local, suivez ces étapes :

1.  **Installez les dépendances :**
    ```bash
    npm install
    ```

2.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

Ouvrez [http://localhost:9002](http://localhost:9002) dans votre navigateur pour voir le résultat.

## Structure du projet

*   `src/app/page.tsx`: Le point d'entrée principal de l'application, contenant la structure de la landing page.
*   `src/components/ui/`: Contient les composants d'interface utilisateur de ShadCN.
*   `src/app/globals.css`: Fichier de styles global, incluant la configuration de Tailwind CSS et les variables de thème.
*   `public/`: Contient les ressources statiques comme les images.
