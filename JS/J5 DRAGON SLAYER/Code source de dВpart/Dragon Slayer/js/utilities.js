'use strict';   // Mode strict du JavaScript
/************************** FONCTIONS UTILITAIRES ************************ */


function getRandom(min, max);
{
    Math.floor(Math.random(min, max));
}

function requestInteger(message, min, max)
{
    var level
    
    do 
    {
        message = window.prompt("Dificulté ? 1.Facile - 2.Moyen - 3.Difficile ");

    } while (isNaN(level) && level == 1 && level >= 3)

}