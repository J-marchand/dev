'use strict';

/* CORRECTION */

/*
'use strict';

var rocket = document.getElementById('rocket');
var billboard = document.querySelector('#billboard span');
var firingButton  = document.getElementById('firingButton');
var count = 10;
var timer;

function onClickFiringButton()
{

	timer = setInterval(countDown, 1000);
	rocket.src = 'images/rocket2.gif';
    
    window.setTimeout(out, count * 1000)

}


function out() {
	
    rocket.src = 'images/rocket3.gif';
    rocket.classList.add('tookOff');
    firingButton.removeEventListener('click', onClickFiringButton);
    

}


function countDown()
{
	billboard.textContent = count;
	count--;
    
    if( count == -1 ){
        
        clearInterval(timer);
        //rocket.src = 'images/rocket3.gif';
        //rocket.classList.add('tookOff');
        //firingButton.removeEventListener('click', onClickFiringButton);
    }

}

firingButton.addEventListener('click', onClickFiringButton);

*/

/* ***************** DONNEES ************************/

var button          = document.getElementById('firingButton')
var departRocket    = document.getElementById('rocket')
var chrono          = document.getElementById('billboard')
var chronoNum       = document.querySelector('#billboard span');
var billboard       = 9;
var timer;
/* ***************** FONCTIONS **********************/



function departure()
{   
    
    timer = window.setInterval(startBillboard, 1000);
    rocket.src = "images/rocket3.gif"
    button.removeEventListener("click", departure);    
    setTimeout(startBillboard, 90000);
    
}




function startBillboard()
{   
      
    chronoNum.textContent = billboard;
    billboard --;
        
    if (billboard < 0)
    {
        window.clearInterval(timer);
        rocket.src = "images/rocket2.gif"
        departRocket.classList.add('tookOff');
    }
        
    
}

button.addEventListener('click', departure)


/* ***************** CODE PRINCIPALE*****************/
