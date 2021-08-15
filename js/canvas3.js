const cuadrito = document.getElementById("area_de_dibujo");
const color = document.getElementById("color");
const clear = document.getElementById("clear");
const lienzo = cuadrito.getContext("2d");

let colorcito = "#000";

let isPressed = false;

document.addEventListener("mousemove", (e) => {
  if (!isPressed) return;

  dibujar(colorcito, e.layerX - 1, e.layerY - 1, e.layerX + 1, e.layerY + 1);
});

document.addEventListener("mousedown", () => {
  isPressed = true;
});

document.addEventListener("mouseup", () => {
  isPressed = false;
});

function dibujar(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

color.addEventListener("change", () => {
  colorcito = color.value;
});

clear.addEventListener("click", () => {
  lienzo.clearRect(0, 0, cuadrito.width, cuadrito.height);
});
