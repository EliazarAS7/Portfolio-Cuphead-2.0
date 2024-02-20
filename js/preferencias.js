document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var backgroundColor = document.getElementById('backgroundColor').value;
    var fontColor = document.getElementById('fontColor').value;
    
    // Guardar preferencias en localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('fontColor', fontColor);
    
    // Redirigir a la página de saludo
    window.location.href = 'saludo.html';
});