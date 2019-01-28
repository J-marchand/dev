$(document).click('click', onClickPosition);

function onClickPosition() {


    event.preventDefault();
    var offset = canvas.getBoundingClientRect(event);

    context.beginPath();
    context.lineWidth=getRandom(1, 20);
    context.fillStyle = "black"; 
    context.arc(event.clientX - offset.left , event.clientY-offset.top , getRandom(5, 50),0,2*Math.PI);
    context.fill(); 

}