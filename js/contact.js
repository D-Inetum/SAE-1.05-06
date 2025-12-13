document.addEventListener("DOMContentLoaded", () => {
    
    const emailButton = document.getElementById('contactBtn');

    if (emailButton) {
        emailButton.addEventListener('click', (e) => {
            // Empêche le comportement par défaut du lien (#)
            e.preventDefault();

            // --- CONFIGURATION DU MAIL ---
            const destinataire = "contact-stage@inetum.fr";
            const sujet = "Demande d'information - Stage";
            const corpsMessage = "Bonjour,\n\nJe souhaite avoir des informations concernant les offres de stages.\n\nCordialement,";

            // --- CRÉATION DU LIEN MAILTO ---
            const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corpsMessage)}`;

            // --- OUVERTURE DE LA FENÊTRE DE MAIL ---
            window.location.href = mailtoLink;
        });
    }
});