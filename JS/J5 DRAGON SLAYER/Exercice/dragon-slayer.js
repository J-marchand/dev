'use strict';   // Mode strict du JavaScript

/******************************* DONNEES JEU ****************************** */


var game = {}



function initializeGame(){
    
    game.difficulty = requestInteger("Choisir une difficulté \n 1.Facile - 2.Moyen - 3.Difficile", 1, 3)

    if (game.difficulty == 1){
        game.hpDragon = getRandom(150, 200)
        game.hpPlayer = getRandom(200, 250)
    } else if (game.difficulty == 2){
        game.hpDragon = getRandom(200, 250)
        game.hpPlayer = getRandom(200, 250)
    } else {
        game.hpDragon = getRandom(200, 250)    
        game.hpPlayer = getRandom(150, 200)
    }

    game.armor = requestInteger("Choisir une armure \n 1. Cuivre - 2. Fer - 3. Kevlar", 1, 3);

    if (game.armor == 1)
    {
        game.ratioArmor = 1
    } else if (game.armor == 2)
    {
        game.ratioArmor = 1.25
    } else (game.armor == 2)
    {
        game.ratioArmor = 2
    }

    game.weapon = requestInteger("Choisir une arme \n 1. Bois - 2. Fer - 3. Carbone", 1, 3);

    if (game.weapon == 1)
    {
        game.ratioWeapon = 0.5
    } else if (game.weapon == 2)
    {        
        game.ratioWeapon = 1
    } else 
    {
        game.ratioWeapon = 2
    }
}

function computerDomageDragon(){

    if (game.weapon == 1)
    {
        game.domageDragon = (getRandom(10, 20) / game.ratioArmor)
    } else
    {
        game.domageDragon = (getRandom(20, 30) / game.ratioArmor)
    }
     
}

function computerDomagePlayer(){

    if (game.difficulty == 1)
    {
        game.domagePlayer = (getRandom(25 , 30) * game.ratioWeapon);
    } else if (game.difficulty == 2)
    {
        game.domagePlayer = (getRandom(15 , 20) * game.ratioWeapon);
    } else (game.difficulty == 3)
    {
        game.domagePlayer = (getRandom(5 , 10) * game.ratioWeapon);
    }
     
}


/****************************** FONCTIONS JEU ***************************** */
function loopGame(){

    var tour = 1

    

    do{
        
        var whoPlay = getRandom(1, 2);
        computerDomageDragon();
        computerDomagePlayer()
        console.log('Round :' + tour)

        
        if (whoPlay == 1){

            game.hpDragon = game.hpDragon - game.domagePlayer
            
            console.log('Vous etes plus rapide que le dragon et vous lui infligez ' + game.domagePlayer + ' de PV en moins.')

            console.log("vous avez " + game.hpPlayer + "PV.")
            console.log("Le dragon à " + game.hpDragon + "PV.")

        } else {

            game.hpPlayer = game.hpPlayer - game.domageDragon
            
            console.log('Le dragon est plus rapide que vous. Il vous inflige ' + game.domageDragon + ' de PV en moins.')

            console.log("vous avez " + game.hpPlayer + "PV.")
            console.log("Le dragon à " + game.hpDragon + "PV.")
        }

        

        tour ++

        

    } while (game.hpPlayer > 0 && game.hpDragon > 0)

}



/***************************** CODE PRINCIPAL ***************************** */

initializeGame()

console.log("Vous commencez avec " + game.hpPlayer + "PV")
console.log("Le dragon commence avec " + game.hpDragon + "PV")

loopGame()

function showWinner(){

    if(game.hpPlayer <= 0)
    {
        document.write('<strong>Le dragon vous a pulverisé  ! </strong> \n <img src="dragon.jpg" alt="Image de dragon">')
    } else {
        document.write('<strong>Vous avez niqué le Dragon ! </strong> \n <img src="dragon.jpg" alt="Image de dragon">')
    }

}



showWinner()