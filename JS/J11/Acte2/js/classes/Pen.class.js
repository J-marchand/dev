var Draw = function(){

    this.color = 'black';
    this.size = 1;
}


Draw.prototype.configure = function(context){

    context.strokeStyle = this.color;
    context.lineWidth = this.size;
}



