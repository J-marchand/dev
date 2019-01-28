/* type : string -> chaine de caractere
          number -> int & float

            exemple 

                var string = '42'
                parseInt(string)  resulat 42

                var string = '42,8'
                parseInt(string)  resulat 42

                il faut un parseFloat pour afficher un chiffre decimal

                var string = '42.8'
                parseInt(string)  resulat 42,8

          boolean -> yes ou no
          null -> sans valeur
          undifined -> inconnu 

          */

var num1 = parseInt(45.5);

console.log(num1);

var number = parseFloat(45.5);

console.log(number);