<?php

include 'application/bdd_connexion.php';


$query = $pdo->prepare
(
    'DELETE FROM 
        `users` 
    WHERE 
        id = ?'
);
 
$query->execute( [ $_GET['id'] ] );

header('Location: admin.php');
    exit();

?>