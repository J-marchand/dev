var ordi
var player
var tour = 0


function getRandom(min, max)
{
    ordi = Math.floor(Math.random() * max - min + 1) + min;
}

getRandom(1, 1000)

console.log(ordi)

do {

    player = window.prompt('Essayez de trouver le chiffre aléatoire que l\'ordi a choisis')

    if(player > ordi) {

        window.alert("C'est plus petit !")

        tour ++
    
    
    } else if( player < ordi) {

        window.alert("C'est plus Grand !")

        tour ++


    } else if(player != ordi) {

        window.alert('Essai encore !')
    }

} while( player != ordi)

    window.alert('Bravo !! Vous avez trouvé le chiffre aléatoire que l\'ordi a choisis')


document.write("Vous avez fait "+ tour +" tentatives")