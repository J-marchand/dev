/*

var chiffre1
var chiffre2
var calcul
var result

var chiffre1    = parseFloat(window.prompt('Saisissez votre premier nombre :'))

if (isNaN(chiffre1) == true) {
    window.alert('Veuillez entrer uniquiment des caractères numerique');


}   else {

    var calcul      = window.prompt('+, -, *, /, ^:')
    var chiffre2    = parseFloat(window.prompt('Saisissez votre deuxieme nombre :'))

    if (isNaN(chiffre2) == true){
        window.alert('Veuillez entrer uniquiment des caractères numerique');
    
    }  else {

        switch (calcul) {

            case '+':
            result = chiffre1 + chiffre2;
            break;
            
            case '-':
            result = chiffre1 - chiffre2;
            break;
    
            case '*':
            result = chiffre1 * chiffre2;
            break;
            
            case '/':
            result = chiffre1 / chiffre2;
            break;
    
            case '^':
            result = chiffre1 ^ chiffre2;
            break;
    
        }

        document.write('Le resutlat de votre calcul est : ' +result);

    }


}

*/

// Correction


'use strict';
var number1;
var number2;
var operation;
var result;

number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


switch(operation)
{
	case '+':
	case 'addition':
    result = number1 + number2;
    break;
    
    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;
    
    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    case '/':
    case 'division':
    
    if(number2 == 0)
   	{
       document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

       break;
   	}
    
    result = number1 / number2;
    
    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;

}

if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}

if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}





