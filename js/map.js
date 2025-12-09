// --- 1. Initialisation de la carte ---
// On centre sur le centre de la France par défaut (Latitude, Longitude), Zoom 5
const map = L.map('map', {
    minZoom: 3, // L'utilisateur ne pourra pas dézoomer plus loin que 3
}).setView([46.7646, 2.5319], 5); // On commence au niveau 13

// --- 2. Ajout du thème de la carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// --- 3. Données des lieux ---
const lieux = [
    {
        "lat": 40.479002,
        "lng": -3.686804,
        "ville": "Madrid",
        "adresse": "Passeo de la Castellana, 259D 28046 Madrid Espagne",
        "tel": ""
    },
    {
        "lat": 40.500043,
        "lng": -3.660075,
        "ville": "Madrid",
        "adresse": "Calle María de Portugal, 9-11 28050 Madrid Espagne",
        "tel": "+34 91 387 4700"
    },
    {
        "lat": 40.47608,
        "lng": -3.672356,
        "ville": "Madrid",
        "adresse": "Serrano Galvache, 56. Planta 7ª Parque Norte. Edificio Encina. 28033 Madrid Espagne",
        "tel": "+34913836320"
    },
    {
        "lat": 38.312898,
        "lng": -0.518508,
        "ville": "Alicante",
        "adresse": "Avinguda de Jean Claude Combaldieu, 5 Pl. -2 03006 Alicante Espagne",
        "tel": "+34965924408"
    },
    {
        "lat": 38.348515,
        "lng": -0.538135,
        "ville": "Alicante",
        "adresse": "C/ Los Monegros S/N. Edificio A7 03006 Alicante Espagne",
        "tel": "+34965924408"
    },
    {
        "lat": 38.877906,
        "lng": -6.972319,
        "ville": "Badajoz",
        "adresse": "Avenida Juan Carlos I, 3 PL. 2ª 06001 Badajoz Espagne",
        "tel": "+34924237611"
    },
    {
        "lat": 41.390161,
        "lng": 2.168782,
        "ville": "BARCELONA",
        "adresse": "Avinguda de Les Corts Catalanes, 613 08007 BARCELONA Espagne",
        "tel": "+34932162100"
    },
    {
        "lat": 41.391705,
        "lng": 2.166105,
        "ville": "Barcelona",
        "adresse": "Passeig de Gràcia, 44 Pl. 3ª 08007 Barcelona Espagne",
        "tel": "+34932240266"
    },
    {
        "lat": 46.211205,
        "lng": 6.122253,
        "ville": "Geneva",
        "adresse": "31 rue de Bourgogne - Q4 1203 Geneva Suisse",
        "tel": "+41227062711"
    },
    {
        "lat": 47.394896,
        "lng": 8.48398,
        "ville": "Zurich​",
        "adresse": "Bändliweg 20 8048 Zurich​ Suisse",
        "tel": "+41 44 405 21 00"
    },
    {
        "lat": 43.271426,
        "lng": -2.943375,
        "ville": "Bilbao",
        "adresse": "Avenida Lehendakari Aguirre, 9 48014 Bilbao Espagne",
        "tel": "+34944478045"
    },
    {
        "lat": 43.26239,
        "lng": -2.942607,
        "ville": "Bilbao",
        "adresse": "C/ Licenciado Poza, 55. Pl. 2ª.  48013 Bilbao Espagne",
        "tel": "+34944241825"
    },
    {
        "lat": 28.135001,
        "lng": -15.432476,
        "ville": "Las Palmas",
        "adresse": "Avenida José Mesa y López, 15 Pl. 7ª Edificio Hogar 35007 Las Palmas Espagne",
        "tel": "+34928282366"
    },
    {
        "lat": 28.109457,
        "lng": -15.419377,
        "ville": "Las Palmas",
        "adresse": "Calle Perojo 19 35003 Las Palmas Espagne",
        "tel": ""
    },
    {
        "lat": 42.459709,
        "lng": -2.422216,
        "ville": "Logroño",
        "adresse": "Parque de los Lirios, 16 Pl. 1ª. Oficina 3 26006 Logroño Espagne",
        "tel": ""
    },
    {
        "lat": 39.578042,
        "lng": 2.649534,
        "ville": "Palma de Mallorca",
        "adresse": "Avenida de Conde de Sallent, 23 Pl. 2ª Oficina AB 07003 Palma de Mallorca Espagne",
        "tel": "+34971715795"
    },
    {
        "lat": 42.817303,
        "lng": -1.642159,
        "ville": "Pamplona",
        "adresse": "Plaza del Castillo, 7 Pl. 1ª Pta. Dcha 31001 Pamplona Espagne",
        "tel": "+34948206641"
    },
    {
        "lat": 42.789166,
        "lng": -1.617533,
        "ville": "Mutilva",
        "adresse": "Paseo Santsiki, Nº 1. Edificio A. Pl. 3ª. Oficina 2 31192 Mutilva Espagne",
        "tel": ""
    },
    {
        "lat": 43.443609,
        "lng": -3.846223,
        "ville": "Santander",
        "adresse": "CTRA N – 634 Polígono Nueva Montaña S/N 39011 Santander Espagne",
        "tel": "+34942951000"
    },
    {
        "lat": 43.450095,
        "lng": -3.875593,
        "ville": "Santander",
        "adresse": "PCTCAN C/ Albert Einstein, 12 Pl. 2ª dcha 39011 Santander Espagne",
        "tel": ""
    },
    {
        "lat": 42.904693,
        "lng": -8.512389,
        "ville": "Santiago de Compostela",
        "adresse": "Calle Letonia, 2 Local 3.1 Edificio Quercus Polígono Costa Vella 15707 Santiago de Compostela Espagne",
        "tel": "+34881031458"
    },
    {
        "lat": 43.292665,
        "lng": -1.984081,
        "ville": "San Sebastián",
        "adresse": "Paseo Mikeletegui, 54. Edificio B8. Pl. 0. Módulo 13. 20009 San Sebastián Espagne",
        "tel": "+34944241825"
    },
    {
        "lat": 37.386783,
        "lng": -6.029419,
        "ville": "San Juan de Aznalzarache",
        "adresse": "Av. De las Herillas, S / N 41920 San Juan de Aznalzarache Espagne",
        "tel": "+34954232230"
    },
    {
        "lat": 37.408478,
        "lng": -6.005829,
        "ville": "Sevilla",
        "adresse": "Isla de la Cartuja, C/ Leonardo Da Vinci, 20 Edificio InnOffice Cartuja. Pl. 2ª 41092 Sevilla France",
        "tel": "+34954468380"
    },
    {
        "lat": 41.117729,
        "lng": 1.248485,
        "ville": "Tarragona",
        "adresse": "Rambla Nova, 107 Entreplanta. Local BC 43001 Tarragona Espagne",
        "tel": "+ 34 977 980 700"
    },
    {
        "lat": 41.648322,
        "lng": -4.725601,
        "ville": "Valladolid",
        "adresse": "Plaza Madrid, 1 Principal Derecha 47001 Valladolid Espagne",
        "tel": "+34983 190 640"
    },
    {
        "lat": 41.616374,
        "lng": -4.705715,
        "ville": "Valladolid",
        "adresse": "Calle Cobalto, 199 Polígono Industrial San Cristobal 47012 Valladolid Espagne",
        "tel": "+34983231500"
    },
    {
        "lat": 42.232597,
        "lng": -8.720016,
        "ville": "Vigo",
        "adresse": "Calle Venezuela, 17. Mezzanine 36203 Vigo Espagne",
        "tel": ""
    },
    {
        "lat": 42.853045,
        "lng": -2.653537,
        "ville": "Vitoria",
        "adresse": "C/ Viena, 3. Entreplanta 01002 Vitoria Espagne",
        "tel": "+34944241825"
    },
    {
        "lat": 41.653869,
        "lng": -0.881592,
        "ville": "Zaragoza",
        "adresse": "C/ Alfonso I, 17 Pl. 4ª pta. 4ª Edif. Plaza 14 50003 Zaragoza Espagne",
        "tel": "+34976282188"
    },
    {
        "lat": 43.295215,
        "lng": -2.862592,
        "ville": "Zamudio",
        "adresse": "Parque Tecnológico de Zamudio. Edificio 207 – A. Pl. 1ª 48170 Zamudio Espagne",
        "tel": "+34944241825"
    },
    {
        "lat": 37.980487,
        "lng": -1.128993,
        "ville": "Murcia",
        "adresse": "Calle Corbalán, 11 30002 Murcia Espagne",
        "tel": ""
    },
    {
        "lat": 36.718118,
        "lng": -4.435515,
        "ville": "Málaga",
        "adresse": "Avenida de Andalucía, 30 29007 Málaga Espagne",
        "tel": "+34952393300"
    },
    {
        "lat": 37.987485,
        "lng": -1.131826,
        "ville": "Murcia",
        "adresse": "Gran Vía del Escultor Salcillo, 28 30001 Murcia Espagne",
        "tel": "+34968282125"
    },
    {
        "lat": 37.990979,
        "lng": -1.118274,
        "ville": "Murcia",
        "adresse": "Urban Center C/ Nelva, 1  Torre B Pl. 15ª 30006 Murcia Espagne",
        "tel": "+34868952259"
    },
    {
        "lat": 43.364388,
        "lng": -5.847739,
        "ville": "Oviedo",
        "adresse": "Calle Caveda, 4 33002 Oviedo Espagne",
        "tel": "+34985227000"
    },
    {
        "lat": 52.303999,
        "lng": 17.109375,
        "ville": "Poznań",
        "adresse": "Inetum Polska Sp. z o.o.​ ​ 88B Baraniaka St. 61-131 Poznań Pologne",
        "tel": ""
    },
    {
        "lat": 51.233871,
        "lng": 22.604882,
        "ville": "Lublin",
        "adresse": "Inetum Polska Sp. z o.o.​ ​ 16 Witosa St. 20-315 Lublin Pologne",
        "tel": ""
    },
    {
        "lat": 51.767415,
        "lng": 19.459076,
        "ville": "Łódź",
        "adresse": "Inetum Polska Sp. z o.o.​ ​ 18 Wróblewskiego St., Room 211 93-578 Łódź Pologne",
        "tel": ""
    },
    {
        "lat": 41.151106,
        "lng": -8.608621,
        "ville": "Porto",
        "adresse": "N.º 289 Rua do Zambeze 4250-505 Porto Portugal",
        "tel": "+351 228 340 400"
    },
    {
        "lat": 38.729074,
        "lng": -9.144283,
        "ville": "Lisbon",
        "adresse": "Avenida Duque de Loulé 12 4º Piso 1050-090 Lisbon Portugal",
        "tel": "+351 21 049 99 50"
    },
    {
        "lat": 38.710116,
        "lng": -9.13779,
        "ville": "Lisboa",
        "adresse": "Rua de Entrecampos nº28 – Bloco A 1700-158 Lisboa Portugal",
        "tel": "+351 213 512 330"
    },
    {
        "lat": 38.70833,
        "lng": -9.137901,
        "ville": "Lisboa",
        "adresse": "Avenida D. João II Nº 44C, Piso 4, Parque das Nações 1990-095 Lisboa Portugal",
        "tel": "+351 21 049 99 50"
    },
    {
        "lat": 41.81886,
        "lng": -6.748451,
        "ville": "Bragança",
        "adresse": "Avenida Cidade de León 5300-358 Bragança Portugal",
        "tel": ""
    },
    {
        "lat": 40.230725,
        "lng": -7.509896,
        "ville": "Covilhã",
        "adresse": "Parque da Ciência e Tecnologia da Covilhã 6200-865 Covilhã Portugal",
        "tel": "+351 21 839 34 10"
    },
    {
        "lat": 41.149913,
        "lng": -8.610506,
        "ville": "Porto",
        "adresse": "Rua de Álvares Cabral, 259 4050-041 Porto Portugal",
        "tel": "+351 21 839 34 30"
    },
    {
        "lat": 38.715127,
        "lng": -9.222113,
        "ville": "Algès",
        "adresse": "Rua Afonso Praça, 30, 13º 1495-061 Algès Portugal",
        "tel": "+351218393410"
    },
    {
        "lat": 25.750899,
        "lng": -80.260518,
        "ville": "Florida",
        "adresse": "255 Giralda Avenue  Coral Gables, Miami Florida, 33134 États-Unis",
        "tel": "+1 786-292-3612"
    },
    {
        "lat": 9.934815,
        "lng": -84.065292,
        "ville": "San José de Costa Rica",
        "adresse": "Barrio Escalante, 7 Av. 29 St. Building No. 2910  San José, 10101, Costa Rica San José de Costa Rica 10101 Costa Rica",
        "tel": "+506 2505 5746"
    },
    {
        "lat": 51.513392,
        "lng": -0.090991,
        "ville": "London",
        "adresse": "51 Eastcheap London EC3M 1DT Royaume-Uni",
        "tel": "+44 20 8549 2133"
    },
    {
        "lat": 33.526965,
        "lng": -7.641151,
        "ville": "Casablanca",
        "adresse": "1100, bd El Qods (Sidi Maârouf)  Casanearshore Park 2.B - 3°ét 20190 Casablanca Maroc",
        "tel": ""
    },
    {
        "lat": 33.53098,
        "lng": -7.61359,
        "ville": "Casablanca",
        "adresse": "300 lotiss. Mandarona Sidi Maarouf, casa business center​ 20190 Casablanca Maroc",
        "tel": ""
    },
    {
        "lat": 33.479165,
        "lng": -7.636807,
        "ville": "Casablanca",
        "adresse": "Bouskoura Business Park, MotorVillage 2e étage, Bureau B1 KM6 route de Bouskoura, 20190 Casablanca Maroc",
        "tel": "+212 (0)5 22 21 84 49"
    },
    {
        "lat": 33.523042,
        "lng": -7.641642,
        "ville": "Casablanca",
        "adresse": "1100 Bd El Qods, Parc Casanearshore Shore 28 Sidi Maârouf 20190 Casablanca Maroc",
        "tel": "+212 (0)522 94 97 79/80/81"
    },
    {
        "lat": 44.864394,
        "lng": 24.862455,
        "ville": "Pitesti",
        "adresse": "Negru Voda Street, 43 110069 Pitesti Roumanie",
        "tel": ""
    },
    {
        "lat": 49.629727,
        "lng": 6.131785,
        "ville": "Luxembourg",
        "adresse": "33 Rue d'Eich  33 Rue d'Eich  1461 Luxembourg  Luxembourg",
        "tel": "+352 43 65 22 1"
    },
    {
        "lat": -12.095544,
        "lng": -77.026249,
        "ville": "Lima",
        "adresse": "Calle Chinchón 1018, 3er floor, San Isidro​ Lima 15593 Pérou",
        "tel": "(511) 611 6300​"
    },
    {
        "lat": -33.426973,
        "lng": -70.620351,
        "ville": "Santiago de Chile",
        "adresse": "La Concepción 141. Oficina 901 Providencia 7500010 Santiago de Chile Chili",
        "tel": "+569 33883512"
    },
    {
        "lat": 19.438512,
        "lng": -99.21359,
        "ville": "Mexico",
        "adresse": "Blvd. Manuel Ávila Camacho 191, int. 502, Col. Los Morales Polanco Alcaldía Miguel Hidalgo C.P. 11510 – Ciudad de México, Méx 11510 Mexico, Mexique",
        "tel": "+52 (55) 598 07373"
    },
    {
        "lat": 19.42525,
        "lng": -99.172683,
        "ville": "Mexico City",
        "adresse": "Av Paseo de la Reforma 373 9 A​ Cuauhtemoc 06500 Mexico City, Mexique",
        "tel": "5552806540​"
    },
    {
        "lat": 20.592434,
        "lng": -100.367832,
        "ville": "Querétaro",
        "adresse": "lvd. Bernardo Quintana 155, 2do. Nivel​ Col. Loma Dorada. 76060 Querétaro, Mexique",
        "tel": "4422125584"
    },
    {
        "lat": 9.010444,
        "lng": -79.476793,
        "ville": "Panama City",
        "adresse": "Financial Park Tower​ 35th Floor, Oficina 3505 Boulevard Costa del Este​ 32401 Panama City, Mexique",
        "tel": "+33 232-2500​"
    },
    {
        "lat": 42.249626,
        "lng": -71.002171,
        "ville": "Boston",
        "adresse": "1400 Hancock st, 5FL​ Boston, 02108 États-Unis",
        "tel": "857-317-2777​"
    },
    {
        "lat": -23.533353,
        "lng": -46.628058,
        "ville": "São Paulo",
        "adresse": "Rua Haddock Lobo, 578 - Cerqueira César, São Paulo - SP, 01414-000 São Paulo- 01414-000 Brésil",
        "tel": "+55 11 3081-9195"
    },
    {
        "lat": -23.59325,
        "lng": -46.724944,
        "ville": "São Paulo",
        "adresse": "Calle Surubim 577 - 17º piso, conjunto 71 Brooklin São Paulo- 04571-050 Brésil",
        "tel": "+55 3528 4141"
    },
    {
        "lat": -23.600812,
        "lng": -46.694727,
        "ville": "São Paulo",
        "adresse": "Edifício Igarassu, Rua Surubim 577 - 17º Andar Conjunto 71 - Brooklin Novo São Paulo- 04571-050 Brésil",
        "tel": "+55 3528 4141"
    },
    {
        "lat": -22.899077,
        "lng": -43.180175,
        "ville": "Rio de Janeiro",
        "adresse": "Av Rio Branco, 26, Sobre Loja  Centro   Rio de Janeiro- 20090-001 Brésil",
        "tel": "(021) 3178-5898"
    },
    {
        "lat": -12.979286,
        "lng": -38.461246,
        "ville": "Bahia",
        "adresse": "Av Tancredo Neves, 620, SL -3319  Caminho Das Arvores  - Salvador – BA  Bahia- 41820-020 Brésil",
        "tel": "+55 71 2202-6048"
    },
    {
        "lat": 18.46985,
        "lng": -429.939303,
        "ville": "Santo Domingo",
        "adresse": "Avda. Winston Churchill Nº 1099 Esq. Rafael A. Sánchez Acrópolis Center Local C3, Piso 3. Santo Domingo 10126 Santo Domingo République dominicaine",
        "tel": "+1 8295411233"
    },
    {
        "lat": -12.119825,
        "lng": -77.03672,
        "ville": "Lima",
        "adresse": "Av. Jorge Chávez 275 Of. 203 – Miraflores  Lima Lima 15074 Pérou",
        "tel": "+511 2009730"
    },
    {
        "lat": 6.205346,
        "lng": -75.571075,
        "ville": "Medellín",
        "adresse": "Carrera 43a #5a- 113 Torre Sur - Oficinas 201 – 301  Edificio One Plaza Medellín, , 050001 Colombie",
        "tel": "+57 1 745 7505"
    },
    {
        "lat": 4.69088,
        "lng": -74.050915,
        "ville": "Bogotá",
        "adresse": "Calle 104 ,18 A-52. Piso 2 y 3. Edificio Torre 104 Bogotá, , 110111 Colombie",
        "tel": ""
    },
    {
        "lat": 44.433105,
        "lng": 26.101816,
        "ville": "Bucarest",
        "adresse": "Doamnei Street, number 14-16 030056 Bucarest Roumanie",
        "tel": "+40 31 860 2272"
    },
    {
        "lat": 48.231725,
        "lng": 16.412555,
        "ville": "Vienna",
        "adresse": "Inetum Österreich GmbH DC Tower, 30th floor Donau-City-Strasse 7 A-1220 Vienna 1220 Vienna Autriche",
        "tel": "+43 1 205 551 7021"
    },
    {
        "lat": -34.600005,
        "lng": -58.380948,
        "ville": "CABA",
        "adresse": "Carlos Pellegrini 713 –2° Piso –  1009 CABA Argentine",
        "tel": "+54 11 5263-3344 INTERNO 101"
    },
    {
        "lat": 48.90222,
        "lng": 2.321395,
        "ville": "Saint-Ouen-sur-Seine",
        "adresse": "5-7 Rue Touzet Gaillard 93400 Saint-Ouen-sur-Seine France",
        "tel": ""
    },
    {
        "lat": 48.87838,
        "lng": 2.317592,
        "ville": "Paris",
        "adresse": "19 rue du Général Foy​ 75008 Paris France",
        "tel": "+33 1 53 42 35 61​"
    },
    {
        "lat": 47.279222,
        "lng": -1.551918,
        "ville": "La Chapelle-Sur-Erdre​",
        "adresse": "64 rue du Leinster​ 44240 La Chapelle-Sur-Erdre​ France",
        "tel": "+33 2 40 32 18 18​"
    },
    {
        "lat": 47.28737,
        "lng": -1.543078,
        "ville": "La Chapelle-Sur-Erdre​",
        "adresse": "22 & 26 rue de l'Europe​ 44240 La Chapelle-Sur-Erdre​ France",
        "tel": "+33 9 52 88 07 59​"
    },
    {
        "lat": 45.777364,
        "lng": 4.860026,
        "ville": "Villeurbanne​",
        "adresse": "26 rue Louis Guérin​ 69100 Villeurbanne​ France",
        "tel": ""
    },
    {
        "lat": 45.740395,
        "lng": 4.820137,
        "ville": "Lyon",
        "adresse": "56 rue smith 69002 Lyon France",
        "tel": ""
    },
    {
        "lat": 45.747659,
        "lng": 4.858865,
        "ville": "Lyon",
        "adresse": "21-22 boulevard des Tchécoslovaques 69000 Lyon France",
        "tel": "+33 4 72 35 77 77​"
    },
    {
        "lat": 45.750962,
        "lng": 4.819884,
        "ville": "Lyon",
        "adresse": "4 quai des Etroits​ 69005 Lyon France",
        "tel": "+33 4 72 68 13 80​"
    },
    {
        "lat": 43.577943,
        "lng": 1.364475,
        "ville": "Toulouse",
        "adresse": "1 Rond-Point du Général Eisenhower​ 31100 Toulouse France",
        "tel": "+33 5 62 85 10 10​"
    },
    {
        "lat": 44.774387,
        "lng": -0.636282,
        "ville": "Gradignan",
        "adresse": "27 avenue de la Poterie​ 33170 Gradignan France",
        "tel": "+33 5 56 13 23 43​"
    },
    {
        "lat": 45.208,
        "lng": 5.794534,
        "ville": "Meylan",
        "adresse": "37 Chemin du Vieux Chêne​ 38240 Meylan France",
        "tel": "+33 4 76 61 30 00​"
    },
    {
        "lat": 46.344039,
        "lng": -0.368694,
        "ville": "Chauray",
        "adresse": "121 rue des Guillées​ 79180 Chauray France",
        "tel": "+33 5 49 04 72 04​"
    },
    {
        "lat": 43.643465,
        "lng": 3.827105,
        "ville": "Grabels",
        "adresse": "340, Rue Louis Pasteur 34790 Grabels France",
        "tel": "+33 4 67 04 53 00​"
    },
    {
        "lat": 50.632557,
        "lng": 3.067962,
        "ville": "Lille",
        "adresse": "172 rue Pierre Mauroy 59000 Lille France",
        "tel": "+33 3 20 12 85 48​"
    },
    {
        "lat": 50.630964,
        "lng": 3.068434,
        "ville": "Lille",
        "adresse": "232 rue Pierre Mauroy​ 59000 Lille France",
        "tel": "+33 3 20 48 44 80​"
    },
    {
        "lat": 49.092522,
        "lng": 6.235806,
        "ville": "Metz",
        "adresse": "2 rue de Courcelles​ 57070 Metz France",
        "tel": "+33 3 87 76 49 00​"
    },
    {
        "lat": 48.788356,
        "lng": 2.209679,
        "ville": "Meudon-La-Forêt",
        "adresse": "2 rue Andras Beck​ 92360 Meudon-La-Forêt France",
        "tel": ""
    },
    {
        "lat": 48.61381,
        "lng": 7.716069,
        "ville": "Schiltigheim​",
        "adresse": "24 avenue de l'Europe​ 67300 Schiltigheim​ France",
        "tel": "+33 3 88 19 40 50​"
    },
    {
        "lat": 48.757535,
        "lng": -3.460296,
        "ville": "Lannion",
        "adresse": "11 rue Louis de Broglie​ 22300 Lannion France",
        "tel": "+33 2 96 48 51 51​"
    },
    {
        "lat": 43.655473,
        "lng": 3.836439,
        "ville": "Saint-Clément-de-Rivière​",
        "adresse": "Route des Ganges Campus de Bissy​ 34980 Saint-Clément-de-Rivière​ France",
        "tel": "+33 4 99 61 90 00​"
    },
    {
        "lat": 43.650792,
        "lng": 3.849745,
        "ville": "Saint-Clément-de-Rivière​",
        "adresse": "Domaine des Pins​  48 Impasse des églantiers​ 34980 Saint-Clément-de-Rivière​ France",
        "tel": ""
    },
    {
        "lat": 47.993909,
        "lng": 0.202078,
        "ville": "Le Mans",
        "adresse": "39 boulevard Demorieux 72100 Le Mans France",
        "tel": ""
    },
    {
        "lat": 48.694878,
        "lng": 6.124481,
        "ville": "Laxou",
        "adresse": "31 avenue de la Résistance La Sapinière​ 54520 Laxou France",
        "tel": "+33 3 87 76 49 00​"
    },
    {
        "lat": 43.479202,
        "lng": 5.39507,
        "ville": "Aix-En-Provence​",
        "adresse": "140 avenue du 12 juillet 1998​ 13100 Aix-En-Provence​ France",
        "tel": "+33 4 42 97 68 80​"
    },
    {
        "lat": 43.61755,
        "lng": 7.068264,
        "ville": "Sophia-Antipolis​",
        "adresse": "75 rue Evariste Galois​ 06904 Sophia-Antipolis​ France",
        "tel": "+33 4 97 15 55 55​"
    },
    {
        "lat": 46.335235,
        "lng": -0.428113,
        "ville": "Niort",
        "adresse": "10 route de Chauray​ 79000 Niort France",
        "tel": "+33 5 49 04 72 04​"
    },
    {
        "lat": 43.471774,
        "lng": -0.75973,
        "ville": "Orthez",
        "adresse": "Zone Naude BB 337 64303 Orthez France",
        "tel": "+33 5 59 69 96 96​"
    },
    {
        "lat": 43.319982,
        "lng": -0.302078,
        "ville": "Pau",
        "adresse": "12, Chemin Sallié 64000 Pau France",
        "tel": "+33 5 59 40 06 60​"
    },
    {
        "lat": 49.260579,
        "lng": 4.020073,
        "ville": "Reims",
        "adresse": "7, rue Pierre HADOT 51100 Reims France",
        "tel": "+33 3 26 48 33 33​"
    },
    {
        "lat": 48.78444,
        "lng": 2.045013,
        "ville": "Montigny-le-Bretonneux",
        "adresse": "2 boulevard Vauban 78180 Montigny-le-Bretonneux France",
        "tel": ""
    },
    {
        "lat": 43.221448,
        "lng": 0.04626,
        "ville": "Tarbes",
        "adresse": "8 rue Morane-Saulnier​ 65000 Tarbes France",
        "tel": "+33 5 62 34 35 77​"
    },
    {
        "lat": 43.82909,
        "lng": 4.334265,
        "ville": "Nîmes",
        "adresse": "151 rue Gilles Roberval​ 30900 Nîmes France",
        "tel": "+33 4 66 28 78 78​"
    },
    {
        "lat": 47.204768,
        "lng": -1.561996,
        "ville": "Nantes",
        "adresse": "Le Zéro Newton - 3 Place Albert Camus 44200 Nantes France",
        "tel": ""
    },
    {
        "lat": 47.917617,
        "lng": 1.92485,
        "ville": "Orléans",
        "adresse": "20 avenue des Droits de l'Homme 45000 Orléans France",
        "tel": "+33 (0)2 38 53 67 19"
    },
    {
        "lat": 36.848625,
        "lng": 10.272209,
        "ville": "Tunis",
        "adresse": "Immeuble Harbour, Avenue de la Bourse,  Les Berges du Lac II 1053 Tunis Tunisie",
        "tel": "(+216) 70 01 62 20"
    },
    {
        "lat": 51.036811,
        "lng": 3.736143,
        "ville": "Gent",
        "adresse": "Gaston Crommenlaan 4 9050 Gent Belgique",
        "tel": "+32 2 801 55 55"
    },
    {
        "lat": 51.03045149908001,
        "lng": 4.464098999919516,
        "ville": "Mechelen",
        "adresse": "Antwerpsesteenweg 261/bus 2 2800 Mechelen Belgique",
        "tel": "+32 2 801 55 55"
    },
    {
        "lat": 42.624715,
        "lng": 23.422558,
        "ville": "Sofia",
        "adresse": "89, Aleksandar Malinov Blvd. Floor 4 1715 Sofia Bulgarie",
        "tel": ""
    }
];

// --- 4. Gestion des marqueurs et clusters ---

const markers = L.markerClusterGroup();

lieux.forEach(lieu => {
    // Sécurité : on vérifie que les coordonnées existent
    if (lieu.lat && lieu.lng) {
        
        const marker = L.marker([lieu.lat, lieu.lng]);

        // --- DESIGN DE LA POPUP ---
        let htmlContent = `
            <div style="font-family: sans-serif; font-size: 13px; color: #333; min-width: 200px;">
                
                <h3 style="margin: 0 0 5px 0; font-size: 15px; font-weight: bold; color: #000;">
                    ${lieu.ville}
                </h3>

                <div style="margin-bottom: 8px; color: #555; line-height: 1.4;">
                    ${lieu.adresse}
                </div>

                ${lieu.tel ? `
                    <div>
                        <a href="tel:${lieu.tel.replace(/\s/g, '')}" 
                           style="color: #0078D7; text-decoration: none; font-weight: 600;">
                           ${lieu.tel}
                        </a>
                    </div>
                ` : ''}

            </div>
        `;

        marker.bindPopup(htmlContent);
        markers.addLayer(marker);
    }
});

map.addLayer(markers);