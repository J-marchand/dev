'use strict'

function onClickExecute(event) {

    event.preventDefault(); 
    var view = $('#film-search').val();

    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+view+' ', callBack);

}


    $('#search').on('click', onClickExecute);

function viewDetail()
{
    var dataId = $(this).data('id');

    $.getJSON('https://api.themoviedb.org/3/movie/'+dataId+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBackDetail);

    console.log(dataId)
}


$(document).on('click', 'li', viewDetail);


function viewDetailCompagny()
{

    //$.getJSON('https://api.themoviedb.org/3/search/company?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+dataId+' ', detailCompagny);

    console.log(dataId)
}



$('#more').on('click', viewDetailCompagny);
