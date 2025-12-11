const inputCv = document.getElementById('cv');
const labelText = document.getElementById('file-label-text');
const defaultText = "Ajouter mon CV";

inputCv.addEventListener('change', function(event) {
    // On vérifie s'il y a un fichier sélectionné
    if (this.files) {
        // On récupère le nom du fichier
        const fileName = this.files[0].name;
        // On met à jour le texte
        labelText.textContent = fileName;
    } else {
        // Si l'utilisateur annule, on remet le texte d'origine
        labelText.textContent = defaultText;
    }
});