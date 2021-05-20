$(document).ready(function(){
  $("#navbarCollapsible").on("hide.bs.collapse", function(){
    $(".boton-menu").html('<i class="material-icons icono-bm"> menu </i>');
  });
  $("#navbarCollapsible").on("show.bs.collapse", function(){
    $(".boton-menu").html('<i class="material-icons icono-bc"> close </i>');
  });
});



function validar() {

  var nombre = document.getElementById('nombre-contacto');
  var email = document.getElementById('email');
  var telefono = document.getElementById('telefono');

  //validar nombre

  var elem = document.getElementById('etiqueta-nombre');
  nombre.className = 'inputs';
  elem.style.display = 'none';

  nombre.addEventListener('invalid', function(event){
      event.preventDefault();
      nombre.className = 'errorColor';
      elem.style.display = 'block';
      elem.className = 'errorColor2';
      if(nombre.validity.valueMissing){
        elem.textContent = 'Esta información es necesaria';
      }else
      if(!event.target.validity.valid){
          elem.textContent = 'Ingresa un nombre válido';
      }
  });

  nombre.addEventListener('input', function(event){
    if('block' === elem.style.display){
      nombre.className = 'inputs';
        elem.style.display = 'none';
    }
  });

  //validar Email

  var elem2 = document.getElementById('etiqueta-email');
  email.className = 'inputs';
  elem2.style.display = 'none';

  email.addEventListener('invalid', function(event){
      event.preventDefault();
      email.className = 'errorColor';
      elem2.style.display = 'block';
      elem2.className = 'errorColor2';
      if(email.validity.valueMissing){
        elem2.textContent = 'Esta información es necesaria';
      }else
      if (!event.target.validity.valid) {
          elem2.textContent   = 'Ingresa un correo electronico válido';
      }
  });

  email.addEventListener('input', function(event){
      if ( 'block' === elem2.style.display ) {
          email.className = 'inputs';
          elem2.style.display = 'none';
      }
  });

  //validar telefono

  var elem3 = document.getElementById('etiqueta-tel');
  telefono.className = 'inputs';
  elem3.style.display = 'none';
  elem3.class = 'telefono';


  telefono.addEventListener('invalid', function(event){
      event.preventDefault();
      telefono.className = 'errorColor';
      elem3.style.display = 'block';
      elem3.className = 'errorColor2';
      if(telefono.validity.valueMissing){
        elem3.textContent = 'Esta información es necesaria';
      }else
      if (!event.target.validity.valid ) {
          elem3.textContent   = 'Ingresa un numero telefónico válido';

      }
  });

  telefono.addEventListener('input', function(event){
      if ( 'block' === elem3.style.display ) {
          telefono.className = 'inputs';
          elem3.style.display = 'none';
      }
  });

};
