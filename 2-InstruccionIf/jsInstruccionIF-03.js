/*
Ignacio Javier Medici;
Division D;
InstruccionIF 03;
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17) {
		alert("Sos mayor de edad");
	}
	else
	{
		alert("Sos menor de edad");
	}

}//FIN DE LA FUNCIÓN