<?php

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'DELETE FROM 
        Category
    WHERE 
        Id = ?
    '
);

$query->execute([ $_GET['Id'] ]);


header('Location: admin.php');
    exit();

?>