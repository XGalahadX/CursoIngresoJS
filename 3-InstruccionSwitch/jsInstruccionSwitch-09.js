/* 
Ignacio Javier Medici
Division D
Ejercicio Switch 09

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifaBase;
	var tarifaTotal;
	var aumento;
	var descuento;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	tarifaBase = 15000;
	aumento = 0;
	descuento = 0;

	switch (estacionIngresada) 
	{
		case "invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aumento = tarifaBase * 0.20;
					break;
				case "Mar del plata":
					descuento = tarifaBase * 0.20;
					break;
				default:
					descuento = tarifaBase * 0.10;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = tarifaBase * 0.20;
					break;
				case "Mar del plata":
					aumento = tarifaBase * 0.20;
					break;
				default:
					aumento = tarifaBase * 0.10;
					break;
			}
			break;
	default:
		if (destinoIngresado != "Cordoba") 
		{
			aumento = tarifaBase * 0.10;
		}
		break;
	}

	tarifaTotal = tarifaBase + aumento - descuento;

	alert(tarifaTotal);

	

}//FIN DE LA FUNCIÓN