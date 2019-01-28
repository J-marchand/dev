/*

var joueur
var ordi
var random



joueur = window.prompt('Pierre ? Feuille ? ou Ciseaux ?').toLowerCase();

random = Math.random()*3
console.log(random)

if (random < 1) {
    ordi = 'pierre';
} else if (random >= 1 && random < 2){
    ordi = "feuille";
} else {
    ordi = 'ciseaux';
}

console.log(ordi);

if (ordi == 'pierre' && joueur == 'feuille') {
    document.write('L\'ordi a choisi pierre. Vous avez gagner.');
} else if (ordi == 'feuille' && joueur == 'pierre') {
    document.write('L\'ordi a choisi Feuille. vous avez perdu.')
}

if (ordi == 'feuille' && joueur == 'ciseaux') {
    document.write('L\'ordi a choisi Feuille. Vous avez gagner.');
} else if (ordi == 'ciseaux' && joueur == 'feuille') {

    document.write('L\'ordi a choisi Ciseaux. vous avez perdu.')
}

else if (ordi == 'ciseaux' && joueur == 'pierre') {
    document.write('L\'ordi a choisi Ciseaux. Vous avez gagner.');

} else if (ordi == 'pierre' && joueur == 'ciseaux') {
    document.write('L\'ordi a choisi pierre. vous avez perdu.')
}

else if (ordi == joueur){
    document.write('Egalité')
}


*/

'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3)          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
	switch(computer) {
    	case 'pierre': 
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
        
        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;
        
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;
    }
}