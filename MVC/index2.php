<?php
session_start();

include 'config/config.class.php';
include 'library/Database.class.php';

$requestUrl = $_SERVER['SCRIPT_NAME'];

$adresse = $_SERVER["REQUEST_URI"];

// $_SERVER["REQUEST_URI"]  => rooting/index2.php/register

$url = substr($adresse, 20);

// $url => register

$repo = 'models';
$dossier = opendir($repo);

while($fichier = readdir($dossier)){
	 if(is_file($repo.'/'.$fichier) && $fichier !='/' && $fichier !='.' && $fichier != '..'){
     
        include $repo.'/'.$fichier;
        
    }

}
closedir($dossier);


if($url == false || $url=='') {

	include 'controller/homeController.class.php';
    
    $page = 'home';
    
} else {

	include 'controller/'.$url.'Controller.class.php';
	$page = $url;
}

include 'www/layout2.phtml';

?>