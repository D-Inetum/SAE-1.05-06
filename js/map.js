// 1. Vos données avec un champ 'address' en plus
const locations = [
  { 
    lat: 40.1215, 
    lng: -100.4503, 
    title: "Ma position", 
    address: "123 Rue Principale, Ville"
  },
  { 
    lat: 34.0522, 
    lng: -118.2437, 
    title: "Los Angeles", 
    address: "Hollywood Boulevard, Los Angeles, CA" 
  },
  { 
    lat: 40.7128, 
    lng: -74.0060,  
    title: "New York", 
    address: "5th Avenue, New York, NY" 
  }
];

// 2. Sélection de la carte
const mapElement = document.querySelector('gmp-map');

// 3. On crée une variable pour la bulle d'info (InfoWindow)
// On l'initialise à null pour l'instant
let infoWindow;

// 4. Boucle de création des marqueurs
locations.forEach(point => {
  const marker = document.createElement('gmp-advanced-marker');
  marker.setAttribute('position', `${point.lat},${point.lng}`);
  marker.setAttribute('title', point.title);


  
  // On ajoute l'écouteur d'événement 'click' sur le marqueur
  marker.addEventListener('click', () => {
    
    // Si la bulle n'existe pas encore (premier clic), on la crée
    if (!infoWindow) {
      infoWindow = new google.maps.InfoWindow();
    }

    // A. On définit le contenu (l'adresse)
    // On peut mettre du HTML ici (ex: "<b>Adresse :</b> " + point.address)
    infoWindow.setContent(`
      <div style="color: black; padding: 5px;">
        <h3>${point.title}</h3>
        <p>${point.address}</p>
      </div>
    `);

    // B. On ouvre la bulle ancrée sur le marqueur cliqué
    infoWindow.open({ anchor: marker });
  });
  // ---------------------------------

  mapElement.appendChild(marker);
});