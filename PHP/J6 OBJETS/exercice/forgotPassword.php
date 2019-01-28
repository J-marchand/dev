<?php

session_start();

include 'class/Database.class.php';
include 'class/User.class.php';

if(empty($_POST) == false){

    $forgot = new User();
    $login->forgotPassword($_POST);
}

$template = 'forgotPassword';
include 'layout.phtml';

?>