# Portfolio — Aurélie Dupassieux

Site portfolio statique, reconstruit depuis Adobe Portfolio. Il est hébergé gratuitement sur **GitHub Pages** et ne dépend d'aucun service payant.

## Contenu du dossier

| Fichier / dossier | Rôle |
|---|---|
| `content.js` | **Tout le contenu** : projets, textes, images, ordre, e-mail de contact. C'est le seul fichier à modifier au quotidien. |
| `images/` | Les images, un sous-dossier par projet (`images/<slug>/cover.jpg`, `01.jpg`, `02.png`…). |
| `build.js` | Générateur : fabrique toutes les pages HTML à partir de `content.js`. |
| `index.html`, `strategy.html` | Galeries *Design* et *Strategy & Markets* (générées). |
| `<slug>/index.html` | Une vraie page par projet, avec titre, description et image d'aperçu (générées). |
| `sitemap.xml` | Plan du site pour Google (généré). |
| `project.html` | Redirige les anciennes adresses `project.html?p=…` vers les nouvelles. |
| `contact.html` | Redirige vers le formulaire du site principal. |
| `assets/style.css` | Couleurs, polices, mise en page (variables en haut du fichier). |
| `assets/app.js` | Menu mobile et visionneuse plein écran. |
| `.github/workflows/build.yml` | Régénère les pages automatiquement sur GitHub après chaque modification. |

> Les fichiers marqués « générés » ne se modifient pas à la main : ils sont réécrits à chaque génération.

## Ajouter ou modifier un projet

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

Le projet sera en ligne à l'adresse `https://adupassieux-arch.github.io/portfolio/<slug>/`.

### Régénérer les pages

- **Sur GitHub** : rien à faire. Après chaque modification de `content.js` ou des images, GitHub régénère les pages tout seul en une minute environ (onglet *Actions*).
- **Sur votre ordinateur** (facultatif) : `node build.js` dans le dossier.

Vous pouvez remplacer n'importe quelle image par votre fichier original en haute définition, en gardant le même nom.

## Publier sur GitHub Pages

1. Envoyez le contenu du dossier dans votre dépôt GitHub (glisser-déposer sur github.com → *Add file* → *Upload files*, ou GitHub Desktop).
2. Dans le dépôt : *Settings* → *Pages* → *Source : Deploy from a branch* → branche `main`, dossier `/ (root)` → *Save*.
3. Après une minute, le site est en ligne à l'adresse `https://<votre-identifiant>.github.io/<nom-du-depot>/`.

Chaque modification envoyée sur GitHub est publiée automatiquement.

### Nom de domaine personnalisé (facultatif)

*Settings* → *Pages* → *Custom domain*, puis configurez les DNS chez votre registrar selon la documentation GitHub Pages.

## Contact

Le bouton *Contact* renvoie vers le formulaire du site principal (`contactUrl` dans `content.js`).

## Référencement

Chaque page a son titre, sa description, son image d'aperçu (réseaux sociaux) et ses données structurées. Le site principal est déjà vérifié dans Google Search Console ; le portfolio, publié sous la même adresse, est couvert. Soumettez `https://adupassieux-arch.github.io/portfolio/sitemap.xml` dans *Sitemaps*.
