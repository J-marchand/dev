<?php

session_start();

include 'application/bdd_connexion.php';

$id = $_GET['Id'];

//var_dump($id);

$query = $pdo->prepare
(
	'SELECT 
    	Title, Content, CreationDate, FirstName, LastName, Post.Id
    
     FROM 
        Post

    INNER JOIN 
        Author

    ON
        Post.Author_Id = Author.Id
    WHERE Post.Id = ?'
);

$query->execute( [ $id ] );

$postDetail = $query->fetch(PDO::FETCH_ASSOC);

//var_dump($postDetail);


if (empty($_POST) == false){    


    $nickName   = $_POST['nickName'];
    $content    = $_POST['contents'];

$query = $pdo->prepare
(
	'INSERT INTO 
        `Comment`(`Content`, `Post_Id`, `Pseudo`, `CreationDate`) 
    VALUES 
        (?, ?, ?, NOW())'

);

$query->execute( array($content, $id, $nickName));


header('Location: show_post.php?Id='.$postDetail['Id']);
    exit();
}

$query = $pdo->prepare
(
	'SELECT 
    	Content, Pseudo, Post_Id, CreationDate
    
     FROM 
        Comment

    WHERE
        Post_Id = ?'

);

$query->execute( [ $id ] );

$commentDetail = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($commentDetail);

$template = 'show_post';

include 'layout.phtml';

?>