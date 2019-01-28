var Program = function(){

	this.zelda = new Perso('Zelda', 300, 50, 7, 120);
	this.falcon = new Perso('falcon', 280, 45, 18, 160);
	
	$('#attaquer').on('click', this.onClickAttaque.bind(this));
	$('#defendre').on('click', this.onClickDefend.bind(this));
	$('#sort').on('click', this.onClickSort.bind(this));


}




Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	console.log(this);

	this.zelda.attaquer(this.falcon);
	this.contreAttaque();
	this.victory();
}

Program.prototype.onClickDefend = function(event) {
	
	event.preventDefault();

	console.log(this);

	this.zelda.defendre(this.falcon);
	this.contreAttaque();
	this.victory();
}

Program.prototype.onClickSort = function(event) {

	event.preventDefault();
	console.log(this)

	this.zelda.sort(this.falcon);
	this.contreAttaque();
	this.victory();
}


Program.prototype.contreAttaque = function() {

	var aleatoire = getRandomInteger(1, 3);

		if (aleatoire == 1) {

			this.falcon.attaquer(this.zelda);

		} else if (aleatoire == 2) {

			this.falcon.defendre(this.zelda);

		} else {

			this.falcon.sort(this.zelda);
		}
}

Program.prototype.victory = function() {

	var pvZ = this.zelda.hp;
	var pvF = this.falcon.hp;

	if (pvZ <= 0) {

		$('#victory').html('<img src="https://38.media.tumblr.com/3e0b1cc18b1f7ac5422dfb798183e916/tumblr_ng138w8JQz1sfv573o1_250.gif" title="captain falcon applause gif">');
	}

	if (pvF <= 0) {

		$('#victory').html('<iframe src="https://giphy.com/embed/26BRuuMVNwGyT0KiY" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sdcc2016-26BRuuMVNwGyT0KiY">via GIPHY</a></p>');
	}
}