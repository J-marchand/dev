<?php

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'DELETE FROM 
        Post
    WHERE 
        Id = ?'
);

$query->execute([$_GET['Id']]);




header('Location: admin.php');
    exit();

$template = 'index';

include 'layout.phtml';

?>