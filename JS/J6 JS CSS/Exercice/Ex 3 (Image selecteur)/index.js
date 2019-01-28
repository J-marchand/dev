/* ******************************** DONNEES ********** */
var photo = document.querySelectorAll(".select");
var element

console.log(photo);

for(var i = 0 ; i < photo.length; i++) {
    photo[i].addEventListener('click', img_select);
}


/* ******************************* FONCTIONS ********* */

function img_select()
{
    this.classList.toggle('green');
    element = document.querySelectorAll(".select")
    total.textContent = element.length;
}



/* **************************** CODE PRINCIPAL ******* */




