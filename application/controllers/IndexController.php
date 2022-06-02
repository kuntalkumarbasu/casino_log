<?php

class IndexController extends Controller {

	function __construct($controller, $action) {
		parent::__construct($controller, $action);
		
		//$this->ipsArray = array('209.29.115.170','::1','127.0.0.1','204.50.172.1','209.5.124.1','174.90.19.213');
		
	}


	function index() {

		if(isset($_SESSION['username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'?url=index/search');
			exit;
		}
			
	}

	
	function login() { 
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$inputParam['formData']['user_pass'] = \BaseRepository::encrypt($inputParam['formData']['user_pass']);

		$userDetails = $this->_model->getuserDetails($inputParam['formData']);

		if(count($userDetails) > 0){
			$_SESSION['username'] = $userDetails[0]['cashier_username'];
			$_SESSION['cashier_name'] = $userDetails[0]['cashier_name'];
			$_SESSION['cashier_id'] = $userDetails[0]['cashier_id'];

			echo json_encode(array('status' => 'Success'));
        }
        else
        {
        	echo json_encode(array('error' => 'Invalid credentials'));
        }
		
	}

	function logout() {

		$this->render = 0;
		$_SESSION = array();
		session_unset();
		session_destroy();
		header("Location: ".SERVER_BASE_URL_FULL);
		exit;
	}
}
