const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('i');
const body = document.body;

// Fonction pour appliquer le mode Sombre
const enableDarkMode = () => {
    body.classList.add('dark');
    body.classList.remove('light');
    icon.classList.remove('fa-moon'); // Enlève la lune
    icon.classList.add('fa-sun');     // Met le soleil
    localStorage.setItem('theme', 'dark'); // Sauvegarde
};

// Fonction pour appliquer le mode Clair
const enableLightMode = () => {
    body.classList.add('light');
    body.classList.remove('dark');
    icon.classList.remove('fa-sun');  // Enlève le soleil
    icon.classList.add('fa-moon');    // Met la lune
    localStorage.setItem('theme', 'light'); // Sauvegarde
};

// Vérification au chargement de la page
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark') {
    enableDarkMode();
} else if (savedTheme === 'light') {
    enableLightMode();
} else {
    // Si aucune sauvegarde, on suit le système
    if (systemPrefersDark) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Écouteur d'événement sur le clic
toggleButton.addEventListener('click', (e) => {
    // Si le body a déjà la classe dark, on passe en light, sinon l'inverse
    if (body.classList.contains('dark')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});