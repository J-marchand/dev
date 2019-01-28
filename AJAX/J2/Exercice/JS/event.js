'use strict'

const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'

function callBack(response)
{
    
    //console.log(response);

    $('#here').html('<ul style="list-style: none;border: 1px solid black; padding: 50px; border-radius: 25px;">');
    for(var i = 0; i < response.results.length; i++) {
        
        $('#here ul').append('<li data-id="'+response.results[i].id+'">'+response.results[i].title+'</li>');

    }
}

function callBackDetail(response)
{
    //console.log(response)

    $('#here2').html('<img src="'+url_img+response.poster_path+'">')
    $('#here3').html('<h1>'+response.original_title+'</h1>')
    $('#here4').html('<p style="width: 100%;">'+response.overview+'</p>')
}

/*function detailCompany(response)
{

}*/