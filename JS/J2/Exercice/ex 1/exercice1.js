'use script'

const TAUX_DE_TVA = 20.0;

var demandeRemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageRemise;

montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
demandeRemise = window.prompt('Souhaitez-vous une remise ?');

if(demandeRemise == 'oui' || demandeRemise == 'yes') {

	pourcentageRemise = parseFloat(window.prompt('Montant de la remise en % :'));
   
   	montantHT = montantHT - (montantHT * pourcentageRemise / 100);

}

montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');

} else {

	document.write("<p>Aucune remise n'a été appliquée.</p>");

}    