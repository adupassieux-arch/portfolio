# Portfolio — Aurélie Dupassieux

Site portfolio statique, reconstruit depuis Adobe Portfolio. Il est hébergé gratuitement sur **GitHub Pages** et ne dépend d'aucun service payant.

## Contenu du dossier

| Fichier / dossier | Rôle |
|---|---|
| `content.js` | **Tout le contenu** : projets, textes, images, ordre, e-mail de contact. C'est le seul fichier à modifier au quotidien. |
| `images/` | Les images, un sous-dossier par projet (`images/<slug>/cover.jpg`, `01.jpg`, `02.png`…). |
| `index.html` | Galerie *Design* (page d'accueil). |
| `strategy.html` | Galerie *Strategy & Markets*. |
| `project.html` | Modèle de page projet (`project.html?p=<slug>`). |
| `contact.html` | Page contact. |
| `assets/style.css` | Couleurs, polices, mise en page (variables en haut du fichier). |
| `assets/app.js` | Moteur du site — inutile d'y toucher. |
| `telecharger-images.command` | Récupère une fois pour toutes vos images depuis Adobe. |

## 1. Récupérer vos images (une seule fois)

Double-cliquez sur `telecharger-images.command`. Si macOS refuse de l'ouvrir : clic droit → *Ouvrir* → *Ouvrir*.
Le script télécharge les 71 images dans `images/`. Tant que ce n'est pas fait, le site affiche automatiquement les images hébergées chez Adobe.

Vous pouvez aussi remplacer n'importe quelle image par votre fichier original en haute définition, en gardant le même nom.

## 2. Voir le site sur votre ordinateur

Double-cliquez sur `index.html` : il s'ouvre dans votre navigateur, sans installation.

## 3. Ajouter ou modifier un projet

Ouvrez `content.js` dans un éditeur de texte (TextEdit en mode texte brut, ou VS Code), puis :

1. Copiez un bloc `{ "slug": … }` existant dans la liste `PROJECTS`.
2. Changez :
   - `slug` : identifiant court, sans espace ni accent (ex. `villa-cap-ferret`) ;
   - `gallery` : `"design"` ou `"strategy"` ;
   - `title`, `year` ;
   - `text` : une ligne par paragraphe. `## Titre` pour un intertitre, `**gras**`, `*italique*`, `[lien](https://…)` ;
   - `cover` et `images` : chemins vers vos fichiers dans `images/<slug>/`. La ligne `web` est facultative.
3. Créez le dossier `images/<slug>/` et déposez-y vos images.

L'ordre des blocs dans `PROJECTS` est l'ordre d'affichage. Pour supprimer un projet, supprimez son bloc.

## 4. Publier sur GitHub Pages

1. Envoyez le contenu du dossier dans votre dépôt GitHub (glisser-déposer sur github.com → *Add file* → *Upload files*, ou GitHub Desktop).
2. Dans le dépôt : *Settings* → *Pages* → *Source : Deploy from a branch* → branche `main`, dossier `/ (root)` → *Save*.
3. Après une minute, le site est en ligne à l'adresse `https://<votre-identifiant>.github.io/<nom-du-depot>/`.

Chaque modification envoyée sur GitHub est publiée automatiquement.

### Nom de domaine personnalisé (facultatif)

*Settings* → *Pages* → *Custom domain*, puis configurez les DNS chez votre registrar selon la documentation GitHub Pages.

## Formulaire de contact

GitHub Pages n'exécute pas de code serveur. Le formulaire ouvre donc la messagerie du visiteur avec le message pré-rempli, adressé à l'e-mail indiqué dans `content.js` (`contactEmail`).
Pour recevoir les messages sans passer par la messagerie du visiteur, on peut brancher plus tard un service gratuit comme Formspree.
