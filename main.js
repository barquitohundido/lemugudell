const fechaCasorio = new Date  (2026, 10, 27, 19, 0, 0);
function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaCasorio - ahora;

  if (diferencia <= 0) {
    document.getElementById("reloj").innerHTML = "<p>Estamos ansiosxs!</p>";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}
actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);

const botonNav = document.querySelector("nav button")
const menuDesplegable = document.querySelector("#nav-menu")
botonNav.addEventListener("click", function(){
menuDesplegable.classList.toggle("active")
})
document.addEventListener("click", function(e) {
  const clickAdentroDelMenu = menuDesplegable.contains(e.target);
  const clickEnBoton = botonNav.contains(e.target);
  if (!clickAdentroDelMenu && !clickEnBoton) {
    menuDesplegable.classList.remove("active");
  }
});
menuDesplegable.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function() {
    menuDesplegable.classList.remove("active");
  });
});