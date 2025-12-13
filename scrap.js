(function() {
    console.log("Nettoyage et récupération des données...");
    let allMarkers = [];

    function nettoyerTexte(htmlContent) {
        if (!htmlContent) return "Inconnu";
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlContent;
       
        return tempDiv.innerText.replace(/\s+/g, ' ').trim();
    }

    if (window.drupalSettings && window.drupalSettings.leaflet) {
        for (let mapId in window.drupalSettings.leaflet) {
             let mapData = window.drupalSettings.leaflet[mapId];
             if (mapData.features) {
                 mapData.features.forEach(f => {
                     // On extrait et on nettoie
                     allMarkers.push({
                         lat: parseFloat(f.lat),
                         lng: parseFloat(f.lon),
                         // On nettoie le contenu de la popup
                         info: nettoyerTexte(f.popup || f.label) 
                     });
                 });
             }
        }
    }

    if (allMarkers.length > 0) {
        
        copy(allMarkers); 
        
        console.log(`SUCCÈS : ${allMarkers.length} lieux récupérés !`);
        console.log("Les données sont copiées dans le presse-papier !");
    } else {
        console.log("Rien trouvé");
    }
})();