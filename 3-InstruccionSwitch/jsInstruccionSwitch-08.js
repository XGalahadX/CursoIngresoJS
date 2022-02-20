/* 
Ignacio Javier Medici
Division D
Ejercicio Switch 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/ 
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert("Hace frio");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Hace calor");
			break;
		default:
			alert("Hace frio");
			break;
	}

}//FIN DE LA FUNCIÓN