'use strict'

var tva = (0.2);

var num1 = parseFloat(window.prompt('Votre prix hors taxe'));

window.alert('La TVA est a 20%')

var result = num1 * (1 + tva);

window.alert(" Le resultat TTC : " + result + " ");

