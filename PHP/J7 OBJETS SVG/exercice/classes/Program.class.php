<?php

class Program {
    private $rectangle;
    private $carre;
    private $circle;

    
    public function __construct(Rectangle $rectangle, Carre $carre, Circle $circle) {
    
    	$this->rectangle = $rectangle;
        $this->carre = $carre;
        $this->circle = $circle;
    }

    public function drawRectangle() 
    {
        $size = $this->rectangle->getSize();
        $position = $this->rectangle->getPosition();
        $style = $this->rectangle->getStyle();

        return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
    }

    public function drawCarre()
    {
        $size = $this->carre->getSize();
        $position = $this->carre->getPosition();
        $style = $this->carre->getStyle();

        return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['width'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
    }

    public function drawCircle() {

		$size = $this->circle->getSize();
		$position = $this->circle->getPosition();
		$style = $this->circle->getStyle();

		return '<circle cx="'.$position['x'].'" cy="'.$position['y'].'" r="'.$size.'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></circle>';
	}
}

?>