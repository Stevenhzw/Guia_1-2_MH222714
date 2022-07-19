var temp = prompt("Ingrese la temperatura en Celcius: ");

var fahren = (temp * 9/5) + 32;

var HTML = document.getElementById('resul');

HTML.innerHTML = "<p>La temperatura es: " + fahren + " Farenheit</p>";