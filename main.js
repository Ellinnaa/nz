/*Skript für Neuseelandreise*/

let stop= {
    nr: 2,
    title: "Bay of Islands",
    user: "Ellinnaa",
    lat:-35.183333,
    long:174.166667,
    zoom:11,
};


//Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.long], stop.zoom);
//Hintergrundkarte initialisieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen
let marker = L.marker([stop.lat, stop.long]).addTo(map);
//Popup definieren und öffnen
marker.bindPopup(`
            <h2>${stop.title}</h2>
            <ul>
            <li>Geografische Breite ${stop.lat. toFixed(5)}° </li>
            <li>Geografische Länge ${stop.long. toFixed(5)}° </li>
            </ul>
            `).openPopup();
