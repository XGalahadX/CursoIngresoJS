/*
Ignacio Javier Medici;
Division D;
InstruccionIF 04;
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 12 && edad < 18)
	{
		alert("Es Adolescente!");

	}


}//FIN DE LA FUNCIÓN