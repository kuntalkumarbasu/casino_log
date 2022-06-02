<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

class Controller {
	
	protected $_controller;
	protected $_action;
	protected $_view;
	protected $_model;
	
	public $renderHeader;
	public $render;

	public $user;
	public function __construct($controller, $action) {
		
		$this->_controller = ucfirst($controller);
		$this->_action = $action;
		
		$model = ucfirst($controller);

		if(!session_id())
			session_start();
		
		$redirect = false;
	 
		$this->_view = new View($this->_controller,$this->_action);

		$this->_model = new \Cashiers\Model\Cashiers();

		$this->renderHeader = 0;
		$this->render = 1;
	}
	
	public function __destruct() {
		if ($this->render) {
			$this->_view->render($this->renderHeader);
		}
	}
}