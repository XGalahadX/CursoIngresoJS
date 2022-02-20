/* 
Ignacio Javier Medici
Division D
Ejercicio Switch 07

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Bariloche se encuentra al oeste de argentina");
			break;
		case "Cataratas":
			alert("Cataratas se encuentra al norte de argentina");
			break;
		case "Mar del plata":
			alert("Mar del plata se encuentra al este de argentina");
			break;
		default:
			alert("Ushuaia se encuentra al sur de argentina");
			break
	}

}//FIN DE LA FUNCIÓN