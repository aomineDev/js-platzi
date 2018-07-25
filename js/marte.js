var usuiaro = prompt("¿Cuál es tu peso?");
var peso = parseFloat(usuiaro);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
peso_final = (peso * g_marte)/g_tierra;
/* peso_final = parseInt(peso_final); */
peso_final = parseFloat(peso_final.toFixed(2));
document.write("Tu peso en marte es <strong>" + peso_final + " kilos</strong>");