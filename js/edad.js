var boton = document.getElementById("boton");
boton.addEventListener("click", obtenerEdad);
var resultado = document.getElementById("resultado");

function obtenerEdad () {
	var edad = document.getElementById("edad");
	edad = parseInt(edad.value);
	var e_final = 0;
	var nacimiento = 0;
	nacimiento = 2018 - edad;
	e_final = 2080 - nacimiento;
	resultado.innerHTML = "tu edad en el 2080 sera " + e_final;
}