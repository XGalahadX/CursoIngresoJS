/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var compraAlambre;
    var mensaje;

    largoTerreno = document.getElementById('txtIdLargo').value;  
    anchoTerreno = document.getElementById('txtIdAncho').value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    
    compraAlambre = (largoTerreno + anchoTerreno) * 2;
    compraAlambre = (compraAlambre) * 3;

    mensaje = "Se compra alambre por " + compraAlambre + " m";

    alert(mensaje);
}
function Circulo () 
{
	var radioTerreno;
    var alambreTerreno;
    var mensaje;

    radioTerreno = document.getElementById('txtIdRadio').value;

    radioTerreno = parseInt(radioTerreno);

    alambreTerreno = Math.PI * radioTerreno * 2;
    cantidadAlambre = alambreTerreno * 3;

    mensaje = "Se debe comprar alambre por: " + cantidadAlambre.toFixed(2) + " m";

    alert(mensaje);
}
function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var bolsas;
    var cantidadCemento;
    var cantidadCal;
    var mensaje;

    largoTerreno = document.getElementById('txtIdLargo').value;
    anchoTerreno = document.getElementById('txtIdAncho').value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    cantidadCemento = bolsas * 2;
    cantidadCal = bolsas * 3;

    bolsas = largoTerreno * anchoTerreno;

    mensaje = "la cantidad de bolsas que se necesitan son: " + cantidadCemento + " de cemento y " + cantidadCal + " de cal"; 

    alert(mensaje);
}