var video = document.getElementById('video');
var toggle=document.getElementById('buttonPlayPause').getElementsByTagName('img')[0];
function playPause() {
    if (video.paused) {
        video.play();
        toggle.src = "./icons/pause.svg"; // Cambiar el icono a pause.svg cuando el vídeo se esté reproduciendo
    } else {
        video.pause();
        toggle.src = "./icons/play.svg"; // Cambiar el icono a play.svg cuando el vídeo esté pausado
    }
}

// $(document).ready(function() {
//     var video = $('#video')[0]; // Obtener el elemento de vídeo
//     var toggle = $('#buttonPlayPause img'); // Obtener el elemento de la imagen dentro del botón

//     $('#buttonPlayPause').click(function() {
//         if (video.paused) {
//             video.play();
//             toggle.attr('src', './icons/pause.svg'); // Cambiar el icono a pause.svg cuando el vídeo se esté reproduciendo
//         } else {
//             video.pause();
//             toggle.attr('src', './icons/play.svg'); // Cambiar el icono a play.svg cuando el vídeo esté pausado
//         }
//     });
// });

