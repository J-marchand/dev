<?php

$dico = [

    'chat'              => 'cat',
    'chien'             => 'dog',
    'soleil'            => 'sun',
    'ordinateur'        => 'computer',
    'bureau'            => 'desk',
    'telephone'         => 'phone',

];

function translation($translate, $sens, $dico)
{
    if($sens == 'inEnglish')
    {
        if(array_key_exists($translate, $dico)) {
            
            $anser = $dico[$translate];

        } else {
            $anser = "mot inconnu";
        }
        
    } 
    else if ($sens == 'inFrench')
    {
        if (in_array($translate, $dico)) {

            $anser = array_search($translate, $dico);

        } else {
            $anser = "mot inconnu";
        }

    }
    var_dump($anser);
    return $anser;
}


if(array_key_exists('translate', $_POST) == true)
{
    $translate = strtolower($_POST['translate']);
    $sens = $_POST['language'];

    $result = translation($translate, $sens, $dico);
}



include 'index.phtml'

?>