/*  Ignacio Javier Medici DIV D 
    E/S 06
*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresadoUno;
    var numeroIngresadoDos;
    var resultado;
    
    numeroIngresadoUno = parseInt(document.getElementById('txtIdNumeroUno').value);
    numeroIngresadoDos = parseInt(document.getElementById('txtIdNumeroDos').value);

    resultado = parseInt(numeroIngresadoUno) + parseInt(numeroIngresadoDos);

    alert("La suma es: " + resultado);
}

