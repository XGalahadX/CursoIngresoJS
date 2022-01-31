/*  Ignacio Javier Medici DIV D 
    E/S 01
*/
/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
    
    nombreIngresado = prompt("Ingresar nombre: ");

    document.getElementById('txtIdNombre').value = nombreIngresado;
}

