<?php

session_start();

include 'application/hash.php';
include 'application/bdd_connexion.php';

if (empty($_POST) == false) {

    var_dump($_POST);

    $hashPassword = hashPassword($_POST['psw']);

    $firstName      = $_POST['firstName'];
    $lastName       = $_POST['lastName'];
    $pseudo         = $_POST['nickName'];
    $email          = $_POST['email'];
    $password       = $_POST['psw'];


$query = $pdo->prepare
(
    'INSERT INTO
        `users`(`mail`, `password`, `lastName`, `firstName`, `nickName`, `role`)
    VALUES
        (?, ?, ?, ? , ?, "user")'
);

$query->execute( array($email, $hashPassword, $lastName, $firstName, $pseudo)); 

header('Location: login.php');
        exit();

}

$template = 'register';

include 'layout.phtml';

?>