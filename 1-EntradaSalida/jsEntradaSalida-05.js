/*  Ignacio Javier Medici DIV D 
    E/S 05
*/
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var resultado;

    nombre = document.getElementById('txtIdNombre').value;
    edad = document.getElementById('txtIdEdad').value;
    resultado = "Usted se llama " + nombre + " y tiene " + edad;
    
    alert(resultado);
}

