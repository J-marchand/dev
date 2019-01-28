'use strict';


function onClickExecute()
{
    if ($('input[name=what]:checked').val()==1 )
    {

        $.get('php/1-get-html-article.php', ajaxGetHtmlArticle);

    } 
    else if ($('input[name=what]:checked').val() == 2)
    {

        $.getJSON('php/2-get-json-data.php', ajaxGetJsonData);

    } 
    else 
    {

        $.get('php/3-get-html-movies.php', ajaxGetHtmlMovie);

    }
}



