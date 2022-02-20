/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/
function CalcularPrecio () 
{
    var precioPorUnidad;
 	var cantidadLamparas;
    var marcaLamparas;
    var descuento;
    var valorTotal;
    var impuesto;

    cantidadLamparas = document.getElementById('txtIdCantidad').value; 
    cantidadLamparas = parseInt(cantidadLamparas)
    marcaLamparas = document.getElementById('Marca').value;
    precioPorUnidad = cantidadLamparas * 35;
    descuento = 0;

    if (cantidadLamparas > 5 ) 
    {
        descuento = precioPorUnidad * 0.5;
    }
    else
    {
        if(cantidadLamparas == 5)
        {  
            if (marcaLamparas == "ArgentinaLuz") 
            {
                descuento = precioPorUnidad * 0.4;
            } 
            else 
            {
                descuento = precioPorUnidad * 0.3;
            }
        }
        else
        {
            if (cantidadLamparas == 4) 
            {
                if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    descuento == precioPorUnidad * 0.25;
                }
                else  
                {
                    descuento == precioPorUnidad * 0.20;
                }
            }
            else
            {
                if (cantidadLamparas == 3) {
                    if (marcaLamparas == "ArgentinaLuz") {
                        descuento = precioPorUnidad * 0.15;
                    } else {
                        if (marcaLamparas == "FelipeLamparas") 
                        {
                            descuento = precioPorUnidad * 0.10;
                        } 
                        else 
                        {
                            descuento = precioPorUnidad * 0.5;
                        }          
                    }
                } 
            }
        }
    }
    valorTotal = precioPorUnidad - descuento;
    if (valorTotal > 120) 
    {
        impuesto = valorTotal * 0.10;
        valorTotal = valorTotal + impuesto;
        
        alert("Usted pago " + impuesto + " de IIBB.");
    } 
    document.getElementById('txtIdprecioDescuento').value = valorTotal;
}
