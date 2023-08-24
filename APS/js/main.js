const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})

var callsignLinks = document.querySelectorAll('.callsign'); // Seleccionar todos los enlaces con la clase "callsign"

callsignLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace (ir al inicio de la página)
    var callsign = link.textContent; // Obtener el texto del enlace, que parece ser el callsign
    mostrarVuelo(callsign); // Llamar a la función para mostrar la tabla o realizar la acción necesaria con el callsign correspondiente
  });
});

function toggleFAQ(index) {
  var faqContent = document.getElementsByClassName('faq-content');
  var faqIcons = document.getElementsByClassName('faq-icon');
  for (var i = 0; i < faqContent.length; i++) {
    if (i === index) {
      if (faqContent[i].style.display === 'block') {
        faqContent[i].style.display = 'none';
        faqIcons[i].classList.remove('icon-rotate');
      } else {
        faqContent[i].style.display = 'block';
        faqIcons[i].classList.add('icon-rotate');
      }
    } else {
      faqContent[i].style.display = 'none';
      faqIcons[i].classList.remove('icon-rotate');
    }
  }
}