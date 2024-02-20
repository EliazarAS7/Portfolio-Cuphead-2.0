// Verificar si hay preferencias guardadas
var username = localStorage.getItem('username');
var backgroundColor = localStorage.getItem('backgroundColor');
var fontColor = localStorage.getItem('fontColor');

if (username && backgroundColor && fontColor) {
    // Mostrar saludo con preferencias
    document.getElementById('saludo').innerHTML = '<p>Hola, ' + username + '! Bienvenido a tu página personalizada.</p>';
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = fontColor;
} else {
    // Redirigir a la página de preferencias si no hay preferencias guardadas
    window.location.href = 'preferencias.html';
}

// Agregar evento al botón de borrar preferencias
document.getElementById('clearPreferences').addEventListener('click', function() {
    // Borrar preferencias de localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('backgroundColor');
    localStorage.removeItem('fontColor');

    // Redirigir a la página de preferencias
    window.location.href = 'preferencias.html';
});