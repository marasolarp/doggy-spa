$(document).ready(function() {
  $(function() {
    $('#auto-carusel div:gt(0)').hide();// se seleccionan todos los div a partir del numero x. es decir del primero en este caso que es el 0 y con hide para ocultar las otra
    setInterval(function() { 
      $('#auto-carusel div:first-child').fadeOut(0)// fadeOut=tiempo en desaparecer la imagen saliente.
        .next('div').fadeIn(1000)// tiempo en aparecer la imagen entrante
        .end().appendTo('#auto-carusel');
    }, 3000);// tiempo de permanencia de c/imagen
    $('#auto-carusel').css('text-align', 'center');
  });
}); 