<?php

session_start();

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT 
    Post.Id, Title, Content, FirstName, LastName, Name

    FROM 
        Post

    INNER JOIN 
        Author

    ON
        Post.Author_Id = Author.Id
        
    INNER JOIN
        Category

    ON
        Post.Category_Id = Category.Id'
);

$query->execute();

$postAll = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare
(
	'SELECT 
        firstName, lastName, mail, id, nickName, role

    FROM 
        users'
);

$query->execute();

$userDetail = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare
(
    'SELECT
        *
    FROM 
        Category'
);

$query->execute();

$categoryDetail = $query->fetchall(PDO::FETCH_ASSOC);

if (empty($_POST) == false){

    var_dump($_POST);

    $nameCategory     = $_POST['add-category'];

$query = $pdo->prepare
(
    'INSERT INTO
        Category(Name)
    VALUES
        (?)'
);

$query->execute([$nameCategory]);

header('Location: admin.php');
    exit();
};


$template = "admin";

include 'layout.phtml';

?>