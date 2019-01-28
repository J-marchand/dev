var Tableau = function(caneva){

    this.caneva = caneva;
    this.context = this.caneva.getContext('2d');
    this.momentlocation = null;
    this.drawing = false;
    this.draw = new Draw();

    this.caneva.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.caneva.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.caneva.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.caneva.addEventListener('mouseleave', this.onMouseLeave.bind(this));
}

Tableau.prototype.giveMePosition = function(event){

    var offset = this.caneva.getBoundingClientRect();

    var location = { x: event.clientX - offset.left, y: event.clientY - offset.top }

    console.log(location);

    return location;
}

Tableau.prototype.onMouseDown = function(event){

    this.momentLocation = this.giveMePosition(event);
    this.drawing = true;
    
}
Tableau.prototype.onMouseMove = function(event){

    var location = this.giveMePosition(event);


    if (this.drawing == true){

        this.draw.configure(this.context);
        this.context.beginPath();
        this.context.moveTo(this.momentLocation.x, this.momentLocation.y);
        this.context.lineTo(location.x, location.y);
        this.context.stroke();

        this.momentLocation = location;
    }
}
Tableau.prototype.onMouseUp = function(event){

    this.drawing = false;
}

Tableau.prototype.onMouseLeave = function(event){

    this.drawing = false;
}
