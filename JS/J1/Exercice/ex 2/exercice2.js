/*

'use strict'

var date = new Date;
var month = new Array;


month[0] = 'Janvier';
month[1] = 'Février';
month[2] = 'Mars';
month[3] = 'Avril';
month[4] = 'Mai';
month[5] = 'Juin';
month[6] = 'Juillet';
month[7] = 'Aout';
month[8] = 'Septembre';
month[9] = 'Octobre';
month[10] = 'Novembre';
month[11] = 'Decembre';


var day = new Array;

day[0] = 'Dimanche';
day[1] = 'Lundi';
day[2] = 'Mardi';
day[3] = 'Mercredi';
day[4] = 'Jeudi';
day[5] = 'vendredi';
day[6] = 'Samedi';

document.write("<p> Nous sommes le : "+day[date.getDay()]+" "+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()+"</p>");

document.write("<p>Il est : "+date.getHours()+" h "+date.getMinutes()+" m "+date.getSeconds()+" s </p>");

*/

// Correction


var dayNames   = new Array(); // []
dayNames[0] = 'Dimanche';
dayNames[1] = 'Lundi';
dayNames[2] = 'Mardi';
dayNames[3] = 'Mercredi';
dayNames[4] = 'Jeudi';
dayNames[5] = 'Vendredi';
dayNames[6] = 'Samedi';


var monthNames = [];
monthNames[0]  = 'Janvier';
monthNames[1]  = 'Février';
monthNames[2]  = 'Mars';
monthNames[3]  = 'Avril';
monthNames[4]  = 'Mai';
monthNames[5]  = 'Juin';
monthNames[6]  = 'Juillet';
monthNames[7]  = 'Août';
monthNames[8]  = 'Septembre';
monthNames[9]  = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

var today = new Date();

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');  // dayNames[4]
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');