<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

class View{

	protected $variables = array();		// all variable required for view
	protected $_controller;				// folder name
	protected $_action; 				// file name
	
	
	function __construct($controller,$action) {
		$this->_controller = $controller;
		$this->_action = $action;
	}
	
	function set($name,$value) {
		$this->variables[$name] = $value;
	}
	
	function render() {
		
		extract($this->variables);
		
		if (file_exists(BASEPATH . 'application/views/' . strtolower($this->_controller) . '/' . strtolower($this->_action) . '.php'))
			include (BASEPATH . 'application/views/' . strtolower($this->_controller) . '/' . strtolower($this->_action) . '.php');
		else
			die('The file ' . BASEPATH . 'application/views/' . strtolower($this->_controller) . '/' . strtolower($this->_action) . '.php does not exist.');
		
	}


}

