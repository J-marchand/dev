<?php



$name = 'JM';

var_dump($name);

echo 'Salut mec ! ' .$name;

for ($i = 0; $i < 2; $i++) {
	
    echo '<p>Salut '.$name.'</p>';
}


if ($name == 'JM') {

	echo 'Tu es JM';
    
} else {

    echo 'Tu n\' es pas JM';

}

function addition($num1, $num2) {
    $result = $num1 + $num2;
    return $result;
}

$result = addition(3, 9);

$table = ['chien', 'chat', 'souris']; /**/


$dico = [

	'name' => 'Robert',
	'age' => 23,
	'taille' => '1m85',
    'fumeur' => false
];

echo $dico['name'];

array_key_exists('name', $dico); // renvoie true si la clef existe ou sinon false

array_key_exists('name', $dico); // renvoie true si la clef existe ou sinon false

in_array(23, $dico); // renvoie true si la value existe ou sinon false

array_search('1m85', $dico); // renvoie la clef

$dico['age']; // renvoie la value

include 'index.phtml';

include 'footer.phtml';

?>