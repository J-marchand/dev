<?php

session_start();

$requestUrl = $_SERVER['SCRIPT_NAME'];


if(empty($_GET) == true) {

	include 'controller/homeController.class.php';

	$page = 'home';

} else if (array_key_exists('page', $_GET)){

	include 'controller/'.$_GET['page'].'Controller.class.php';
	$page = $_GET['page'];

} else {

	echo 'url incorrect';
}


include 'layout.phtml';

?>