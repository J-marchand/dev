<?php

session_start();

include 'application/bdd_connexion.php';


/************* GET **************/

$query = $pdo->prepare
(
	'SELECT 
    	*
    
     FROM 
        Author '

);

$query->execute();

$author = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($author);


$query = $pdo->prepare
(
	'SELECT 
    	*
    
     FROM 
        Category '

);

$query->execute();

$category = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($category);

/************* POST **************/

if (empty($_POST) == false){

    //var_dump($_POST);


    $title      = $_POST['title'];
    $content    = $_POST['contents'];
    $author_id  = $_POST['author'];
    $category_id= $_POST['category'];

$query = $pdo->prepare
(
	'INSERT INTO 
        `Post`(`Title`, `Content`, `Author_Id`, `Category_Id`, `CreationDate`) 
    VALUES 
        (?, ?, ?, ?, NOW())'

);

$query->execute( array($title, $content, $author_id, $category_id));

header('Location: index.php');
    exit();
}


$template = 'add_post';

include 'layout.phtml';

?>