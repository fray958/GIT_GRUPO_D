// Función para girar la tarjeta al hacer clic
function girar(tarjeta) {
  const inner = tarjeta.querySelector('.tarjeta-inner');
  inner.classList.toggle('girado');
}

// Para el efecto de scroll en secciones con clase "reveal"
window.addEventListener("scroll", function() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;

    if (top < visible) {
      el.classList.add("active");
    }
  });
});