<?php


$chiffreAleatoire = [];


function getRandom()
{
    $chiffreAleatoire = [];
    do {
        do {
            $random = rand(1, 49);

        } while (in_array($random, $chiffreAleatoire)== true);
 
        array_push($chiffreAleatoire, $random);

    } while (count($chiffreAleatoire) < 6);

    return $chiffreAleatoire; 
};

getRandom($chiffreAleatoire);

$chiffreAleatoire = getRandom();

$view = implode(', ', $chiffreAleatoire);

include 'index.phtml';

?>        

