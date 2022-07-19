/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: convertir.js *
* Descripción: convierte de metros a yardas, pies y pulgadas.*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
    //Ingresar los datos de los números a operar
    
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('medida');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('conversion');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú

var opciones = document.getElementsByTagName('a');

//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento 

for(var i=0; i<opciones.length; i++){
switch(i){
case 0:
//Función pies
opciones[i].onclick = function(){
    var op1 = prompt('Introduzca la medida en metros:','');
    var pies = op1 * 3.281;
resultado.innerHTML = "<p class=\"letterpress\"> cantidad ingresada: "+ op1 +" metros</p><br>"+"<p class=\"letterpress\"> conversion: " +  pies.toFixed(2) + " pies</p>\n";
}
break;
case 1:
    //Función pulgadas
opciones[i].onclick = function(){
    var op1 = prompt('Introduzca el primer numero:','');
    var pulgadas = op1 * 39.37;
    resultado.innerHTML = "<p class=\"letterpress\"> cantidad ingresada: "+ op1 +" metros</p><br>"+"<p class=\"letterpress\"> conversion: " +  pulgadas.toFixed(2) + " pulgadas</p>\n";
}
break;
case 2:
    //Función yardas
opciones[i].onclick = function(){
    var op1 = prompt('Introduzca el primer numero:','');
    var yardas = op1 * 1.094;
    resultado.innerHTML = "<p class=\"letterpress\"> cantidad ingresada: "+ op1 +" metros</p><br>"+"<p class=\"letterpress\"> conversion: " + yardas.toFixed(2) + " yardas</p>\n";
}
break;


}
}
}
window.onload = init;