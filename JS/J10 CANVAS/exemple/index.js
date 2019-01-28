var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d'); 

context.beginPath();
context.strokeStyle='green';
context.lineWidth=12; 
context.moveTo(0, 0);
context.lineTo(800,350);
context.stroke(); 

context.beginPath();
context.strokeStyle='red';
context.lineWidth=12; 
context.moveTo(0, 350);
context.lineTo(800, 0);
context.stroke();

context.beginPath();
context.strokeStyle='blue';
context.lineWidth=12; 
context.arc(400,175,150,0,2*Math.PI);
context.stroke(); 


context.beginPath();
context.strokeStyle='blue';
context.lineWidth=20;
context.fillStyle = "black"; 
context.arc(400,175,100,0,2*Math.PI);
context.fill(); 

function onClickPosition(event) {
	
	console.log(event.clientX);
    console.log(event.clientY);
    
    var offset = canvas.getBoundingClientRect();
    
}


$(document).click('click', onClickPosition);

//document.addEventListener('click', onClickPosition);
