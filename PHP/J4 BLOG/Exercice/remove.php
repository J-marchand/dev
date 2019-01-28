<?php

session_start();

include 'application/bdd_connexion.php';

if (empty($_POST) == false){

    //var_dump($_POST);


    $title      = $_POST['title'];
    $content    = $_POST['contents'];
    $id         = $_POST['postId'];

$query = $pdo->prepare
(
	'UPDATE 
        `Post` 
        
    SET 
        `Title`= ?,
        `Content`= ?

    WHERE
    Post.Id = ?'


);

$query->execute( array($title, $content, $id));

var_dump($_POST);

header('Location: admin.php');
    exit();
};

?>