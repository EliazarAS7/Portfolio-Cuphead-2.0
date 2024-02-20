// Función para guardar las preferencias del usuario en cookies
function savePreferences() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Guardar las preferencias en cookies con una duración de 30 días
    setCookie('username', name, 30);
    setCookie('useremail', email, 30);

    alert('Preferencias guardadas exitosamente.');
}

// Event listener para el botón de guardar preferencias
document.getElementById('savePreferencesButton').addEventListener('click', savePreferences);


// Función para establecer una cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Función para eliminar una cookie
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
