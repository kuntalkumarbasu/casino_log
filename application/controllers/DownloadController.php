<?php

class DownloadController extends Controller {

	function __construct($controller, $action) {
		parent::__construct($controller, $action);
		
		//$this->ipsArray = array('209.29.115.170','::1','127.0.0.1','204.50.172.1','209.5.124.1','174.90.19.213');
		
	}


	function index() {
		
		die(dirname(__FILE__));
			
	}

}
