'use strict'

const api_key = "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw"




$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/52340",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": api_key,
    },
})
.done(function(response) {
    console.log("HTTP Request Succeeded! ");
    console.log(response);

    
    /* TITLE */
    $('.title').append('<h1 class="title_h1"> '+response.movie.title+' <h1>')


    /* IMAGE */
    $('.bloc_info-img').append('<img src="'+response.movie.poster_image_thumbnail+'">')

    /* DETAIL */
    /* date */
    $('#date').append('<h3>'+response.movie.release_dates.FR[0].date+'</h3>')

    /* by */
    $('#by').append('<h3>'+response.movie.crew[0].name+'</h3>')

    /* actor */
    var actorsNum = response.movie.cast.length;

    if(actorsNum > 5) {
        actorsNum = 5;
    }

    for(var i = 0; i < actorsNum; i++) {
        $('#actor').append('<h3>'+response.movie.cast[i].name+'</h3>')
    }

    /* genre */
    $('#genre').append('<h3>'+response.movie.genres[1].name+'</h3>')

    
    /* distribution */
    $('#distribution').append('<h3> Bac Film</h3>')

    /* synopsis */
    $('#synopsis').append('<h3 class="line">'+response.movie.synopsis+'</h3>')


    
})
.fail(function(error) {
    console.log("HTTP Request Failed");
})


function displayMovieWithId(id) {
	$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/"+id,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
	})
    .done(displayOneMovie)
    .fail(function(error) {
        console.log("HTTP Request Failed");
    });
}


function position(pos) {

    console.log(pos);
    var location = pos.coords.latitude.toFixed(3)+','+pos.coords.longitude.toFixed(3);
    console.log(location);

}

if(navigator.geolocation) {
	
    console.log('il y a la géoloc');
    navigator.geolocation.getCurrentPosition(position);
} else {

    console.log("il n'y a pas de geoloc")
}
