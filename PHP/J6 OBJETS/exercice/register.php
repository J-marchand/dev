<?php

session_start();

include 'class/Database.class.php';
include 'class/User.class.php';

if(empty($_POST) == false){

    $newUsers = new User();
    $newUsers->addUser($_POST);
}

$template = 'register';
include 'layout.phtml';

?>