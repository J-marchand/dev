'use strict';

function ajaxGetHtmlArticle(response)
{
    $('#target').html(response);   
}

function ajaxGetJsonData(response)
{
   // $('#target').html(response);  
   console.log(response); 
   $('#target').html('');
   //$('#target').empty();

    $('#target').append('<ul>');

    for(var i = 0; i < response.length; i++) {
        $('#target ul').append('<li>Nom : '+response[i].firstName+' Téléphone : '+response[i].phone+'</li>')
    }

}

function ajaxGetHtmlMovie(response)
{
    $('#target').html(response);   
}

