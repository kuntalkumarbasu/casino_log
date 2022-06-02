<?php

class AdminController extends Controller {

	function __construct($controller, $action) {
		parent::__construct($controller, $action);
		
		//$this->ipsArray = array('209.29.115.170','::1','127.0.0.1','204.50.172.1','209.5.124.1','174.90.19.213');
		
	}


	function index() {
		if(isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin/adminprofile');
			exit;
		}
	}


	function adminprofile() {
		
		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$adminDetails = $this->_model->getadminDetailsbySessionAdminId();

		$this->_view->set('adminDetails', array('businessname' => $adminDetails[0]['business_name'], 'logo' => $adminDetails[0]['logo']));
	}

	function insertuser(){
		$this->render = 0;

		$response = array();

		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$inputParam = json_decode(file_get_contents('php://input'), true);
		
		$userDetails = $this->_model->checkexistuser($inputParam['formData']);

		if(count($userDetails) > 0){
			$response = array('error' => 'User phone number must be unique. Please select something else.');
			echo json_encode($response);
			exit;
		}

		$this->_model->adduser($inputParam['formData']);


		$users = $this->_model->getAlluser();

		echo json_encode(array('status' => 'success', 'users' => $users));

	}

	function getAlluser(){

		$this->render = 0;

		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$users = $this->_model->getAlluser();

		echo json_encode(array('users' => $users));

	}

	
	function deleteuser(){
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$results = $this->_model->deleteuser($inputParam['formData']['logId']);

		$users = $this->_model->getAlluser();

		echo json_encode(array('status' => 'success', 'users' => $users));
	}

	function insertcashier(){
		$this->render = 0;

		$response = array();

		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$inputParam = json_decode(file_get_contents('php://input'), true);
		
		$cashierDetails = $this->_model->checkexistcashierusername($inputParam['formData']['cashier_username']);

		if(count($cashierDetails) > 0){
			$response = array('error' => 'Cashier username must be unique. Please select something else.');
			echo json_encode($response);
			exit;
		}

		if(!empty($inputParam['formData']['cashier_pass'])) $inputParam['formData']['cashier_pass'] = \BaseRepository::encrypt($inputParam['formData']['cashier_pass']);
		$this->_model->addcashier($inputParam['formData']);


		$cashiers = $this->_model->getAllcashier();

		echo json_encode(array('status' => 'success', 'cashiers' => $cashiers));

	}

	function deletecashier(){
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$results = $this->_model->deletecashier($inputParam['formData']['logId']);

		$cashiers = $this->_model->getAllcashier();

		echo json_encode(array('status' => 'success', 'cashiers' => $cashiers));
	}

	function getAllcashier(){

		$this->render = 0;

		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$cashiers = $this->_model->getAllcashier();

		echo json_encode(array('cashiers' => $cashiers));

	}

	function updateprofile(){
		$this->render = 0;

		$response = array();

		if(!isset($_SESSION['admin_username'])){
			header("Location: ".SERVER_BASE_URL_FULL.'admin');
			exit;
		}

		$inputParam = $_POST;
		
		$adminDetails = $this->_model->getadminDetailsbySessionAdminId();

		if(!empty($inputParam['old_pass'])){
			$old_passfromDB = \BaseRepository::decrypt($adminDetails['admin_pass']);
			if($old_passfromDB != $inputParam['old_pass'])
			{
				$response = array('error' => 'Old password is not matching');
				echo json_encode($response);
				exit;
			}
		}

		if($_FILES['image'])
		{
			$fileName = $_FILES["image"]["name"];
		    $tempFileName = $_FILES["image"]["tmp_name"];
		    $error = $_FILES["image"]["error"];
		    $DIR = 'uploads/';

		    if($error > 0){
		        $response = array('error' => 'Error uploading the file!');
		        echo json_encode($response);
				exit;
		    }else 
		    {
		        $FILE_NAME = rand(10, 1000000)."-".$fileName;
		        $UPLOAD_IMG_NAME = $DIR.strtolower($FILE_NAME);
		        $UPLOAD_IMG_NAME = preg_replace('/\s+/', '-', $UPLOAD_IMG_NAME);
		    
		        if(move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME)) {
		        	$inputParam['logo'] = strtolower($FILE_NAME);
		        }else
		        {
		            $response = array('error' => 'Error uploading the file!');
		            echo json_encode($response);
					exit;
		        }

		    }
		}

		if(!empty($inputParam['new_pass'])) $inputParam['new_pass'] = \BaseRepository::encrypt($inputParam['new_pass']);
		$results = $this->_model->updateadmindata($inputParam);

		$adminDetails = $this->_model->getadminDetailsbySessionAdminId();
		$_SESSION['admin_username'] = $adminDetails[0]['admin_username'];

		echo json_encode(array('status' => 'success', 'admin_username' => $_SESSION['admin_username'], 'logo' => $adminDetails[0]['logo']));

	}


	function adminlogin() {
		
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$inputParam['formData']['user_pass'] = \BaseRepository::encrypt($inputParam['formData']['user_pass']);

		$userDetails = $this->_model->getadminDetails($inputParam['formData']);

		if(count($userDetails) > 0){
			$_SESSION['admin_username'] = $userDetails[0]['admin_username'];
			$_SESSION['admin_name'] = $userDetails[0]['admin_name'];
			$_SESSION['admin_id'] = $userDetails[0]['admin_id'];

			echo json_encode(array('status' => 'Success'));
        }
        else
        {
        	echo json_encode(array('error' => 'Invalid credentials'));
        }
		
	}

	function displaylogbydate(){
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$date = '';
		if(!empty($inputParam['formData']['downloaddate'])){
			$date = date("Y-m-d", strtotime($inputParam['formData']['downloaddate']));
		}

		$results = $this->_model->displaylogbydate($inputParam['formData']['downloaduser'], $date);
		$users = $this->_model->getAlluser();

		echo json_encode(array('results' => $results, 'users' => $users));
	}

	function download($date, $userId){

		$this->render = 0;

		$translatedate = null;
		if(!empty($date) && $date != 'null'){
			$translatedate = date("Y-m-d", strtotime($date));
		}
		
		$playersDetails = $this->_model->displaylogbydate($userId, $translatedate);

		if (PHP_SAPI == 'cli')
		die('This example should only be run from a Web Browser');

		/** Include PHPExcel */
		require_once dirname(dirname(dirname(__FILE__))) . '/src/Classes/PHPExcel.php';


		// Create new PHPExcel object
		$objPHPExcel = new PHPExcel();

		// Set document properties
		$objPHPExcel->getProperties()->setCreator("Cashier Developer")
									 ->setLastModifiedBy("Cashier Developer")
									 ->setTitle("Office 2007 XLSX Cashier Log")
									 ->setSubject("Office 2007 XLSX Cashier Log")
									 ->setDescription("Office 2007 XLSX Cashier Log.")
									 ->setKeywords("Office 2007 XLSX Cashier Log")
									 ->setCategory("Office 2007 XLSX Cashier Log");

		$objPHPExcel->setActiveSheetIndex(0);

		// Add some data
		$objPHPExcel->setActiveSheetIndex(0)
		            ->setCellValue('A1', 'User/Cashier')
		            ->setCellValue('B1', 'Date')
		            ->setCellValue('C1', 'Time')
		            ->setCellValue('D1', 'Player')
		            ->setCellValue('E1', 'Request/Refund Amount')
		            ->setCellValue('F1', 'Collection Type')
		            ->setCellValue('G1', 'Type of payment')
		            ->setCellValue('H1', 'Previous balance')
		            ->setCellValue('I1', 'New balance')
		            ->setCellValue('J1', 'Notes');

		$objPHPExcel->getActiveSheet()->getStyle('A1:J1')->applyFromArray(
			array( 'fill' 	=> array(
										'type'		=> PHPExcel_Style_Fill::FILL_SOLID,
										'color'		=> array('argb' => 'FFCCFFCC')
									),
				    'borders' => array(
										'bottom'	=> array('style' => PHPExcel_Style_Border::BORDER_THIN),
										'right'		=> array('style' => PHPExcel_Style_Border::BORDER_MEDIUM)
									),
					'font'    => array(
					                      'name'      => 'Arial',
					                      'bold'      => true,
					                      'italic'    => false,
					                      'underline' => PHPExcel_Style_Font::UNDERLINE_DOUBLE,
					                      'strike'    => false,
					                      'color'     => array(
					                          'rgb' => '808080'
                      						)
					                )
                  
			)
		); 

		foreach($playersDetails as $eachPlayerKey => $eachPlayerVal){ 

			$objPHPExcel->setActiveSheetIndex(0)
		            ->setCellValue('A'.($eachPlayerKey+2), $eachPlayerVal['cashier_name'])
		            ->setCellValue('B'.($eachPlayerKey+2), date("F j, Y", strtotime($eachPlayerVal['collection_time'])))
		            ->setCellValue('C'.($eachPlayerKey+2), date("g:i a", strtotime($eachPlayerVal['collection_time'])))
		            ->setCellValue('D'.($eachPlayerKey+2), $eachPlayerVal['user_name'])
		            ->setCellValue('E'.($eachPlayerKey+2), ($eachPlayerVal['type_of_collection'] == 'refund' ? '-' : '').$eachPlayerVal['amount_collected'])
		            ->setCellValue('F'.($eachPlayerKey+2), $eachPlayerVal['type_of_collection'])
		            ->setCellValue('G'.($eachPlayerKey+2), $eachPlayerVal['type_of_payment'])
		            ->setCellValue('H'.($eachPlayerKey+2), $eachPlayerVal['previous_bal'])
		            ->setCellValue('I'.($eachPlayerKey+2), $eachPlayerVal['new_balance'])
		            ->setCellValue('J'.($eachPlayerKey+2), $eachPlayerVal['notes']);

		    if($eachPlayerVal['type_of_collection'] == 'refund') {
		    	$objPHPExcel->getActiveSheet()->getStyle('F'.($eachPlayerKey+2))->applyFromArray(
					array( 'fill' 	=> array(
												'type'		=> PHPExcel_Style_Fill::FILL_SOLID,
												'color'		=> array('argb' => 'ff9999')
											)
					)
				);
		    }   
		    else{
		    	$objPHPExcel->getActiveSheet()->getStyle('F'.($eachPlayerKey+2))->applyFromArray(
					array( 'fill' 	=> array(
												'type'		=> PHPExcel_Style_Fill::FILL_SOLID,
												'color'		=> array('argb' => '00FF00')
											)
					)
				);
		    }    
			

		}           

		// Rename worksheet
		$objPHPExcel->getActiveSheet()->setTitle('Poker log');


		// Set active sheet index to the first sheet, so Excel opens this as the first sheet
		$objPHPExcel->setActiveSheetIndex(0);


		// Redirect output to a client’s web browser (Excel2007)
		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="pokerlog.xlsx"');
		header('Cache-Control: max-age=0');
		// If you're serving to IE 9, then the following may be needed
		header('Cache-Control: max-age=1');

		// If you're serving to IE over SSL, then the following may be needed
		header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
		header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
		header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
		header ('Pragma: public'); // HTTP/1.0

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
		$objWriter->save('php://output');
		exit;
	}

	function logout() {

		$this->render = 0;
		unset($_SESSION['admin_username']);
		unset($_SESSION['admin_name']);
		unset($_SESSION['admin_id']);
		
		header("Location: ".SERVER_BASE_URL_FULL.'admin');
		exit;
	}
}
