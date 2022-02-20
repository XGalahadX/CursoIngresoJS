/* 
Ignacio Javier Medici
Division D
Ejercicio Switch 04

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesDelAño;
	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
		default:
			alert("Este mes tiene 30 dias");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN