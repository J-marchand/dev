var size = window.prompt('Saisissez votre table de multiplication : (Entre 1 et 10)')
var column
var row

document.write('<table>');

for(column = 1; column <= size; column++){

    document.write('<tr>');

    for(row = 1; row <= size; row++){

        if (row == column) {
            document.write('<td class="color">');

        } else {
            document.write('<td>');

        }

        var result = column * row;

        document.write(result);


        document.write('</td>');

    }

    document.write('</tr>');

}

document.write('</table>');





















































/*document.write('<table>')

for(column = 1; column <= size; column++){
     
    document.write("<tr>")

    for(row = 1; row <= size; row++){

        document.write("<td>")

        var result = column * row

        document.write(result)

        document.write("</td>")

    }

    document.write("</tr>")

}


document.write('</table>')*/