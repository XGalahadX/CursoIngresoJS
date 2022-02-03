/*  Ignacio Javier Medici DIV D 
    E/S 09
*/
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var resultadoTotal;
    
    importe = parseInt(document.getElementById('txtIdSueldo').value);
    
    aumento = importe * 10 / 100;
    
    resultadoTotal = importe + aumento;
    
    document.getElementById('txtIdResultado').value = resultadoTotal;
}
