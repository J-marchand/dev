<?php

session_start();
include 'application/hash.php';
include 'application/bdd_connexion.php';


if (empty($_POST) == false) {

    var_dump($_POST);
    
    $pdo->exec('SET NAMES UTF8');
    
    	$query = $pdo->prepare
	(
	    'SELECT * FROM users WHERE mail= ?'
	);

	$query->execute( [ $_POST['email'] ] );
    
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if(verifyPassword($_POST['psw'], $user['password']) == true) {
        
        $_SESSION['email']      = $user['mail'];
        $_SESSION['password']   = $user['password'];
        $_SESSION['firstName']  = $user['firstName'];
        $_SESSION['lastName']   = $user['lastName'];
        $_SESSION['pseudo']     = $user['nickName'];
        $_SESSION['role']       = $user['role'];

        header('Location: index.php');
        exit();

        //var_dump($_SESSION);
    }
}

$template = 'login';
include 'layout.phtml';

?>