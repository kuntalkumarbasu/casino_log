<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);

require_once __DIR__.'/src/SimpleXLSX.php';

echo '<h1>Parse books.xslx</h1><pre>';
if ( $xlsx = SimpleXLSX::parse(__DIR__.'/src/PokerManiacAccounting_Backend.xlsx') ) {

	$rows = $xlsx->rows();
	foreach($rows as $eachrows){
		
		if($eachrows[1] != ''){
			print_r( $eachrows );

			$query = "SELECT * FROM cashier, user, user_log WHERE user_log.cashier_id = cashier.cashier_id AND user_log.cashier_id = ".$_SESSION['cashier_id']." AND user.user_id = '".$player_id."' AND user.user_id = user_log.user_id AND user_log.user_id = '".$player_id."' ORDER BY user_log.userlog_id";


			//echo INSERT INTO `user_log` (`userlog_id`, `cashier_id`, `user_id`, `chips_collected`, `collection_time`, `type_of_collect`, `account_bal`, `chip_deposited`, `diff_collection_amount`, `diff_collection_mode`, `deposite_time`, `new_balance`, `paid`) VALUES (NULL, '1', '2', '222', '2022-04-21 01:16:39', 'ACC', '123', '23', '123', 'wqeqwe', '2022-04-29 01:16:39', '3333', 'Y');
		}
	}
	
} else {
	echo SimpleXLSX::parseError();
}
echo '<pre>';

//INSERT INTO `user` (`user_id`, `user_name`, `user_phone_number`) VALUES (NULL, 'Phil Hellmuth', '2345678912'), (NULL, 'Daniel Negreanu', '1236547890');