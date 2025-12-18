# Documentation Technique — SAE-1.05-06

Ce document regroupe les normes techniques et l'organisation du projet. **Merci de les respecter** pour faciliter le travail de groupe et la fusion du code.

---

## Lancement du Projet

**⚠️ Important :** Le site ne fonctionne pas correctement si on ouvre simplement les fichiers (protocole `file://`).

Il faut lancer un **serveur HTTP local** :

1. **VS Code** : Utiliser l'extension **Live Server**
   Clic droit sur `pages/index.html` → *Open with Live Server*
2. **Python** : Ouvrir un terminal à la racine du projet et taper :

```bash
python -m http.server
```

---

## Architecture du Projet

Voici l'organisation actuelle des fichiers. **Ne déplacez pas les fichiers existants** sans prévenir le groupe.

```text
📦 SAE-1.05-06
 ┣ 📂 css                 # Feuilles de style
 ┃ ┣ 📜 style.css         # CSS GLOBAL (reset, base)
 ┃ ┣ 📜 colors.css        # VARIABLES (Couleurs Dark/Light mode)
 ┃ ┣ 📜 navbar.css        # CSS spécifique aux composants
 ┃ ┣ 📜 footer.css
 ┃ ┗ 📜 nompage.css       # CSS spécifique à chaque page
 ┣ 📂 img                 # Images
 ┃ ┣ 📂 nompage           # ⚠️ Toujours créer un dossier par page
 ┃ ┃ ┗ 📜 image.webp
 ┃ ┗ 📜 inetum.webp
 ┣ 📂 js                  # Scripts JavaScript
 ┃ ┣ 📜 theme.js          # Gestion du mode Sombre/Clair
 ┃ ┗ 📜 nomfeature.js     # JS spécifique
 ┗ 📂 pages               # Pages HTML
   ┣ 📜 index.html        # Page d'accueil
   ┗ 📜 nompage.html
```

---

## HTML & CSS

### Structure des Fichiers

* **HTML** : Toutes les pages doivent être dans le dossier `/pages`.
* **CSS** :

  * `style.css` et `colors.css` doivent être **liés sur toutes les pages**.
  * Pour chaque nouvelle page, créer un fichier CSS dédié dans `/css`.

**Exemple :**

```text
/css/mapage.css
/pages/mapage.html
```

---

### Gestion des Couleurs (Dark / Light Mode)

**INTERDICTION** d'utiliser des couleurs hexadécimales en dur (`#FFFFFF`, `#000000`, etc.).

Utilisez **uniquement** les variables définies dans `css/colors.css`.

**Exemple :**

```css
/* NE PAS FAIRE */
background-color: #ffffff;

/* À FAIRE */
background-color: var(--color-bg);
```

---

### Titres & Typographie

* **Titres soulignés** : utiliser une balise `h2` avec la classe `subtitle`.

```html
<h2 class="subtitle">Mon Titre</h2>
```

* **Icônes** : utiliser la librairie **[FontAwesome](https://fontawesome.com/)**.

---

## Médias & Performance

Pour garantir de bonnes performances (critère de notation), respectez strictement les règles suivantes.

### Images

* **Format** : `.webp` **OBLIGATOIRE**
* **Poids** : **100 Ko maximum** par image
* **Organisation** :

  * Les images spécifiques à une page doivent être rangées dans :

```text
/img/nomdelapage/
```

* **Outil recommandé** :

  * [Squoosh.app](https://www.freeconvert.com/fr/png-to-webp) -> Mettre qualité de l'image à 80 et réduire si nécessaire la taille en %

---

### Vidéos

* Ne **jamais** mettre de fichiers vidéo (`.mp4`) dans le projet
* Héberger la vidéo sur **YouTube**
* Intégrer la vidéo avec une balise `<iframe>`

---

**Merci de respecter ces règles pour un projet propre.**