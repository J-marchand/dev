
<?php

if(empty($_POST) == false) {
	
    var_dump($_POST);

    $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', 'troiswa');

	$pdo->exec('SET NAMES UTF8');
    
    	$query = $pdo->prepare
	(
	    'INSERT INTO users(email, password, firstName, lastName, age) VALUES (?, ?, ?, ?, ?)'
	);

	$query->execute( [ $_POST['email'], $_POST['psw'], $_POST['firstName'], $_POST['lastName'], $_POST['age'] ] );

}



include 'header.phtml';
include 'register.phtml';
include 'footer.phtml';

?>