# Portfolio Professionnel - Koudougou Laurent

Portfolio moderne et professionnel pour développeur Full Stack et administrateur réseau.

## 🚀 Fonctionnalités

- Design moderne et responsive
- Animations fluides et interactives
- Section projets dynamique
- Formulaire de contact
- Menu de navigation fixe
- Effets parallaxe
- Compatible tous appareils

## 📂 Structure du Projet

```
Portefolio/
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles CSS
├── js/
│   └── script.js      # Scripts JavaScript
├── images/
│   └── profile.jpg    # Photo de profil (à ajouter)
│   └── projects/      # Images des projets (à ajouter)
└── README.md          # Ce fichier
```

## 🎨 Personnalisation

### Ajouter votre photo de profil
1. Placez votre photo dans le dossier `images/`
2. Nommez-la `profile.jpg`

### Ajouter vos projets
Éditez le fichier `js/script.js` et modifiez le tableau `projects` :

```javascript
const projects = [
    {
        title: "Nom du projet",
        description: "Description du projet",
        image: "images/projects/projet1.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/votre-username/projet",
        demo: "https://demo-url.com"
    },
    // Ajoutez plus de projets...
];
```

### Modifier les couleurs
Dans `css/style.css`, modifiez les variables CSS :

```css
:root {
    --primary-color: #0066ff;
    --secondary-color: #00d9ff;
    --dark-bg: #0a0a0a;
    /* ... autres couleurs */
}
```

## 🌐 Déploiement

### Option 1 : GitHub Pages
1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans les paramètres
4. Votre site sera accessible à : `https://votre-username.github.io/nom-repo`

### Option 2 : Netlify
1. Créez un compte sur Netlify
2. Glissez-déposez le dossier du portfolio
3. Votre site sera en ligne en quelques secondes

### Option 3 : Vercel
1. Installez Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à :
- 📱 Mobile (< 480px)
- 📱 Tablette (480px - 968px)
- 💻 Desktop (> 968px)

## 🔧 Technologies Utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript Vanilla
- Font Awesome (icônes)

## 📞 Contact

Pour toute question ou suggestion concernant ce portfolio :
- Email : koudougoulaurent@gmail.com
- Téléphone : 56420189

## 📝 Licence

Ce portfolio est libre d'utilisation pour votre usage personnel.

---

Créé avec ❤️ par Koudougou Laurent
