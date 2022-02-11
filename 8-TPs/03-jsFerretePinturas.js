/*
Ignacio Javier Medici DIV D 
    TP N°3 E/S
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados;
    var mensaje;

    fahrenheit = document.getElementById('txtIdTemperatura').value;
    fahrenheit = parseInt(fahrenheit);

    centigrados = ((fahrenheit - 32)*5/9);

    mensaje = fahrenheit + " Fahrenheit son " + centigrados.toFixed(2) + " °C";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var centigrados;
    var mensaje;

    centigrados = document.getElementById('txtIdTemperatura').value;
    
    centigrados = parseInt(centigrados);

    fahrenheit = ((centigrados*9/5)+32);

    mensaje = centigrados + " Centigrados son " + fahrenheit.toFixed(2) + " Fahrenheit";

    alert(mensaje);
}

