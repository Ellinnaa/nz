/*Skript für Neuseelandreise*/

let lat =-35.183333;
let long = 174.166667;
let zoom = 11;

//Karte initialisieren
let map = L.map('map').setView([lat, long], zoom);
//Hintergrundkarte initialisieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

//Marker zeichnen
        let marker = L.marker([-35.183333, 174.166667]).addTo(map);
        //Popup definieren und öffnen
        marker.bindPopup(`<b>Hello world!</b>
            <br>
            I am a popup.
            `). openPopup();
