// Función para reproducir o pausar el vídeo
function playPause() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Función para detener el vídeo
function stop() {
    var video = document.getElementById("video");
    video.pause();
    video.currentTime = 0;
}

// Función para retroceder el vídeo 10 segundos
function rewind() {
    var video = document.getElementById("video");
    video.currentTime -= 10;
}

// Función para avanzar el vídeo 10 segundos
function forward() {
    var video = document.getElementById("video");
    video.currentTime += 10;
}

// Función para ir al final del vídeo
function goToEnd() {
    var video = document.getElementById("video");
    video.currentTime = video.duration;
}

// Función para ajustar el volumen del vídeo
function setVolume() {
    var video = document.getElementById("video");
    var volume = document.getElementById("volume").value;
    video.volume = volume;
}

// Función para cambiar a pantalla completa
function toggleFullScreen() {
    var video = document.getElementById("video");
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

// Función para cambiar el vídeo
function changeVideo(source) {
    var video = document.getElementById("video");
    video.src = "./video/" + source;
    video.play();
}

// Actualizar el indicador de progreso de la reproducción
var video = document.getElementById("video");
var progress = document.getElementById("progress");
video.addEventListener("timeupdate", function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    progress.value = (currentTime / duration) * 100;
});