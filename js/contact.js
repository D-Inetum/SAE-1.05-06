document.addEventListener("DOMContentLoaded", () => {
    
    const emailButton = document.getElementById('contactBtn');

    if (emailButton) {
        emailButton.addEventListener('click', (e) => {
            e.preventDefault();

            const destinataire = "contact-stage@inetum.fr";
            const sujet = "Demande d'information - Stage";
            const corpsMessage = "Bonjour,\n\nJe souhaite avoir des informations concernant les offres de stages.\n\nCordialement,";

            const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corpsMessage)}`;

            window.location.href = mailtoLink;
        });
    }
});