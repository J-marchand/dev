<?php

$_GET['orderNumber'];

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT 
    	customerName, contactLastName, contactFirstName, addressLine1, city
    
     FROM 
        orders

    INNER JOIN 
        customers ON orders.customerNumber = customers.customerNumber

    WHERE 
        orderNumber =?'

);

$query->execute( [ $_GET['orderNumber'] ] );

$customer = $query->fetch(PDO::FETCH_ASSOC);




$query = $pdo->prepare
(
	'SELECT 
    	quantityOrdered, priceEach, productName, quantityOrdered*priceEach as totalPrice
    
     FROM 
        orderdetails
     INNER JOIN
        products
     ON
        orderdetails.productCode = products.productCode
    WHERE
        orderNumber=?'

);

$query->execute( [$_GET['orderNumber']] );

$details = $query->fetchAll(PDO::FETCH_ASSOC);


$query = $pdo->prepare
(
	'SELECT 
    	SUM(quantityOrdered*priceEach) as total
    
     FROM 
        orderdetails
     INNER JOIN
        products
     ON
        orderdetails.productCode = products.productCode
    WHERE
        orderNumber=?'

);

$query->execute( [$_GET['orderNumber']] );

$totals = $query->fetchAll(PDO::FETCH_ASSOC);




include 'order.phtml';

?>