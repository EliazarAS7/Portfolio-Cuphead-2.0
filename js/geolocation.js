// Función que se ejecuta cuando se ha cargado el DOM
// document.addEventListener('DOMContentLoaded', function() {
    // Comprobamos si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
        // Solicitamos la posición del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            // Obtenemos la latitud y longitud de la posición
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            // Creamos un mapa centrado en la posición del usuario
            var map = L.map('map').setView([latitud, longitud], 13);

            // Añadimos una capa de OpenStreetMap al mapa
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Añadimos un marcador en la posición del usuario
            L.marker([latitud, longitud]).addTo(map)
                .bindPopup('¡Estás aquí!')
                .openPopup();
        });
    } else {
        // Si el navegador no soporta la geolocalización, mostramos un mensaje de error
        alert('¡Lo siento! Tu navegador no soporta la geolocalización.');
    }
// });
