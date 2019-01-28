/*

var voiture = { 
                marque : 'Renault', 
                annee : '2010',
                date : '2011',
                passagers : '4',
                droite : 'deni',
                gauche : 'roger',
            };

document.write('<ul><li id="marque">La marque : '+voiture.marque+'</li><li id="annee">'+voiture.annee+'</li><li id="date">'+voiture.date+'</li><li id="passagers">'+voiture.passagers+' <ul><li id="deni">'+voiture.droite+'</li><li id="roger">'+voiture.gauche+'</li></ul></li></ul>');

*/

var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;



document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de l\'achat : ' + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');
