<?php

session_start();

include 'class/Database.class.php';
include 'class/User.class.php';

if(empty($_POST) == false){

    $login = new User();
    $login->loginUser($_POST);
}   

$template = 'login';
include 'layout.phtml';

?>