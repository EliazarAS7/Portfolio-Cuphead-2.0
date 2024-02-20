// Declaración de la variable bd
var bd;

function iniciar() {
    var nombre = document.getElementById('name');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('message');
    var boton = document.getElementById('submitButton');
    var borrar = document.getElementById('resetButton');

    boton.addEventListener('click', agregar, false);
    borrar.addEventListener('click', borrarDatos, false);

    var request = indexedDB.open('formularioDB', 1);
    request.onsuccess = function(e) {
        bd = e.target.result;
    }

    request.onupgradeneeded = function(e) {
        bd = e.target.result;
        bd.createObjectStore('formularios', { keyPath: 'id', autoIncrement: true });
    }
}

function agregar() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;

    var formulario = { nombre: nombre, email: email, mensaje: mensaje };

    var objetoAlmacen = bd.transaction('formularios', 'readwrite').objectStore('formularios');
    objetoAlmacen.add(formulario);

    alert('Datos guardados correctamente en la base de datos.');
    return false;
}

function borrarDatos() {
    var objetoAlmacen = bd.transaction('formularios', 'readwrite').objectStore('formularios');
    var borrar = objetoAlmacen.clear();

    borrar.onsuccess = function(e) {
        alert('Datos borrados de la base de datos correctamente.');
        return false;
    }
}

window.addEventListener('load', iniciar, false);
