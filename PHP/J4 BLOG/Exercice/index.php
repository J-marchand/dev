<?php

session_start();

//var_dump($_SESSION);

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT 
    	Title, Content, CreationDate, FirstName, LastName, Post.Id
    
     FROM 
        Post

    INNER JOIN 
        Author

    ON
        Post.Author_Id = Author.Id'
);

$query->execute();

$allDetail = $query->fetchAll(PDO::FETCH_ASSOC);



//var_dump($allDetail);



$template = 'index';

include 'layout.phtml';

?>
