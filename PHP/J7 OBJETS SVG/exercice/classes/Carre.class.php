<?php

class Carre extends Rectangle {

    private $width;

    public function __construct($x, $y, $width, $fill, $opacity)
    {
        parent::__construct($x, $y, $width, $width, $fill, $opacity);
        $this->width = $width;
    }


}

?>