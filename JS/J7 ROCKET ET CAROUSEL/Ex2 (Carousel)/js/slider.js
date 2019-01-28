'use strict';   // Mode strict du JavaScript

/*  DONNEES */
var toolbar     = document.querySelector('#toolbar-toggle');
var navbar      = document.getElementById('navbar-tool');

var next        = document.getElementById('slider-next');
var previous    = document.getElementById('slider-previous');
var image       = document.querySelector('#slider img');
var title       = document.querySelector('#slider figcaption');
var aleatoire   = document.getElementById('slider-random')

var index       = 0;
var tab = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg']

var titleTab = ['street art', 'Fast lane', 'Colorful Building', 'Skyscraper', 'City by night']

var play        = document.querySelector('#slider-toggle');
var isPlaying   = false;
var timer;






/* FONCTIONS */
function openToolbar()
{
    navbar.classList.toggle('hidden')
}



function nextPhoto()
{

    if (index >= tab.length-1) {
        index = 0;
       
    } else {
        index++
    }

    image.src = tab[index];
    title.textContent = titleTab[index]
}

function previousPhoto()
{
    if (index <= 0) {
        index = tab.length-1; 
    } else {
        index--
    }

    image.src = tab[index];
    title.textContent = titleTab[index]
}

function automate()
{
    if (isPlaying == false){
        timer = window.setInterval(nextPhoto, 1000);
        isPlaying = true;
    } else {
        window.clearInterval(timer)
        isPlaying = false;
    }
    
}

function alea()
{
    var indexAlea   = getRandom(0, 4);
    image.src = tab[indexAlea];
    title.textContent = titleTab[indexAlea]
}

document.addEventListener('keyup', key)

function key(event)
{    
    if (event.keyCode == 37)
    {
        previousPhoto();
    }
    else if (event.keyCode == 39)
    {
        nextPhoto();
    } 
    else if(event.keyCode == 32)
    {
        automate();
    } 
}





/* CODE PRINCIPAL */

toolbar.addEventListener('click', openToolbar);

image.src = tab[index];
title.textContent = titleTab[index]

play.addEventListener('click', automate);
next.addEventListener('click', nextPhoto);
previous.addEventListener('click', previousPhoto);
aleatoire.addEventListener('click', alea)


