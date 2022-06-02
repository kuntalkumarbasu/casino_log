<?php

class SearchController extends Controller {

	private $memcache;

	function __construct($controller, $action) {
		parent::__construct($controller, $action);

	}
	function index() {

		$players = $this->_model->getPlayerList();
		$siteLogo = $this->_model->getSiteLogo();

		$this->_view->set('players', $players);
		$this->_view->set('logo', $siteLogo[0]['logo']);
		$this->_view->set('business_name', $siteLogo[0]['business_name']);

	}

	function getplayersdetails(){
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$playersDetails = $this->_model->getplayersdetails($inputParam['formData']['player_id']);
		
		echo json_encode($playersDetails);
		
	}

	function deletelogdata(){

		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);

		$results = $this->_model->deletelogdata($inputParam['formData']['logId']);
		echo json_encode(array('status' => 'success'));

	}


	function insertlogdata(){

		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);
		$results = $this->_model->insertlogdata($inputParam['formData']);
		echo json_encode(array('status' => 'success'));

	}

	function closetransaction(){
		$this->render = 0;
		$inputParam = json_decode(file_get_contents('php://input'), true);
		$results = $this->_model->closetransaction($inputParam['formData']['user_id']);
		echo json_encode(array('status' => 'success'));
	}

	function download($player_id){

		$this->render = 0;

		$playersDetails = $this->_model->getplayersdetails($player_id);

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


}
