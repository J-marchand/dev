<?php

include 'classes/Shape.class.php';
include 'classes/Rectangle.class.php';
include 'classes/Carre.class.php';
include 'classes/Circle.class.php';
include 'classes/Program.class.php';


$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$carre = new Carre('400', '200', '100', 'deepskyblue', '0.5');
$circle = new Circle('300', '250', '180', 'gold', '0.33');
$prog = new Program($rectangle, $carre, $circle);

$rec = $prog->drawRectangle();
$car = $prog->drawCarre();
$cir = $prog->drawCircle();



var_dump($rec);
var_dump($car);
var_dump($cir);
include 'index.phtml';

?>