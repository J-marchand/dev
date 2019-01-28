var button = document.getElementById("toogle-rectangle");
var rectangle = document.querySelector('.rectangle');

button.addEventListener('click', onClickButton);

function onClickButton() {
    rectangle.classList.toggle('hidde');
}

rectangle.addEventListener('mouseover', onMouseOver);


function onMouseOver() {
    rectangle.classList.toggle('good')
}

rectangle.addEventListener('mouseout', onMouseOver);

function onMouseOut() {
    rectangle.classList.toggle('good')
}

rectangle.addEventListener('dblClick', dblClick);

function dblClick() {
    rectangle.classList.toggle('important')
}