let divSaludo = document.getElementById("div_saludo");
let btnSaludo = document.getElementById("btn_saludo");

divSaludo.addEventListener("click", () => {
  alert("Hola! Soy el div");
});
btnSaludo.addEventListener("click", (event) => {
  //detener el evento para que no "siga" hacia el div
  event.stopPropagation();
  alert("Hola");
});
