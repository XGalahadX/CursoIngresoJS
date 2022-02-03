/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primeroNumero;
    var segundoNumero;
    var tercerNumero;
    var resultado;

    primeroNumero = document.getElementById('txtIdPrecioUno').value;
    segundoNumero = document.getElementById('txtIdPrecioDos').value;
    tercerNumero = document.getElementById('txtIdPrecioTres').value;

    resultado = parseInt(primeroNumero) + parseInt(segundoNumero) + parseInt(tercerNumero);

    alert(resultado);
}
function Promedio () 
{
	var primeroNumero;
    var segundoNumero;
    var tercerNumero;
    var resultado;
    var promedio;
    primeroNumero = document.getElementById('txtIdPrecioUno').value;
    segundoNumero = document.getElementById('txtIdPrecioDos').value;
    tercerNumero = document.getElementById('txtIdPrecioTres').value;

    resultado = parseInt(primeroNumero) + parseInt(segundoNumero) + parseInt(tercerNumero);
    promedio = resultado/3;

    alert(promedio);
}
function PrecioFinal () 
{
	var primeroNumero;
    var segundoNumero;
    var tercerNumero;
    var resultado;
    var precioFinal;

    primeroNumero = document.getElementById('txtIdPrecioUno').value;
    segundoNumero = document.getElementById('txtIdPrecioDos').value;
    tercerNumero = document.getElementById('txtIdPrecioTres').value;

    resultado = parseInt(primeroNumero) + parseInt(segundoNumero) + parseInt(tercerNumero);
    precioFinal = resultado * 1.21 ;

    alert(precioFinal);
}