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
 
 $modifDetail = $query->fetch(PDO::FETCH_ASSOC);
 

$template = 'edit_post';

include 'layout.phtml';

?>