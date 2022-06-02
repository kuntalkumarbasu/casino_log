<?php
namespace Cashiers\Model;

class Cashiers extends \Model{
	
    function __construct() {
        parent::__construct();
    }

    public function getSiteLogo(){
        $query = "SELECT `logo`, `business_name` FROM `admin_details`";
        $result = $this->db->query($query);
        return $result;
    }

    public function getPlayerList() {
        
        $query = "SELECT * FROM user";
        //echo $query;
        $result = $this->db->query($query);
        //print_r($result);
        return $result;       
        
    }

    public function getuserDetails($inputParam) {
        
        $query = "SELECT cashier_name, cashier_id, cashier_username FROM cashier where `cashier_username` = '".$inputParam['user_id']."' AND `cashier_pass` = '".$inputParam['user_pass']."'";
        $result = $this->db->query($query);
        return $result;
        
    }

    public function getadminDetailsbySessionAdminId(){
        $query = "SELECT * FROM admin_details where `admin_id` = '".$_SESSION['admin_id']."'";
        $result = $this->db->query($query);
        return $result;
    }


    public function updateadmindata($inputParam){

        $setArray = array();

        if(!empty($inputParam['username'])) $setArray[] = "`admin_username` = '".$inputParam['username']."'";
        if(!empty($inputParam['new_pass'])) $setArray[] = "`admin_pass` = '".$inputParam['new_pass']."'";
        if(!empty($inputParam['business_name'])) $setArray[] = "`business_name` = '".$inputParam['business_name']."'";
        if(!empty($inputParam['logo'])) $setArray[] = "`logo` = '".$inputParam['logo']."'";

        if(count($setArray) > 0){
            $set = implode(", ", $setArray);
            $query = "UPDATE `admin_details` SET $set WHERE `admin_id` = '".$_SESSION['admin_id']."'";
            $result = $this->db->query($query);
            return $result;
        }

    }

    public function getAlluser(){

        $query = "SELECT * FROM `user` WHERE `status` = 'Y' order by `user_id` DESC";
        $result = $this->db->query($query);
        return $result; 

    }

    public function getAllcashier(){

        $query = "SELECT * FROM cashier order by `cashier_id` DESC";
        $result = $this->db->query($query);
        return $result; 

    }

    public function addcashier($inputParam){

        $query = "INSERT INTO `cashier` (`cashier_name`, `cashier_username`, `cashier_pass`) VALUES ('".$inputParam['cashier_name']."', '".$inputParam['cashier_username']."', '".$inputParam['cashier_pass']."')";
        $result = $this->db->query($query);

    }

    public function adduser($inputParam){

        $query = "INSERT INTO `user` (`user_name`, `user_phone_number`) VALUES ('".$inputParam['user_name']."', '".$inputParam['phone']."')";
        $result = $this->db->query($query);

    }

    public function checkexistuser($inputparam){

        $query = "SELECT * FROM `user` where `user_name` = '".$inputparam['user_name']."' AND `user_phone_number` = '".$inputparam['phone']."'";
        $result = $this->db->query($query);
        return $result;

    }

    public function checkexistcashierusername($username){

        $query = "SELECT * FROM cashier where `cashier_username` = '".$username."'";
        $result = $this->db->query($query);
        return $result;

    }

    public function getadminDetails($inputParam) {
        
        $query = "SELECT admin_name, admin_id, admin_username FROM admin_details where `admin_username` = '".$inputParam['user_id']."' AND `admin_pass` = '".$inputParam['user_pass']."'";
        $result = $this->db->query($query);
        return $result;
        
    }

    public function getplayersdetails($player_id) {

        $query = "SELECT cashier.cashier_id, cashier.cashier_name, user_log.amount_collected, user_log.type_of_collection, user_log.previous_bal, user_log.notes, user_log.userlog_id, user.user_id, user.user_name, user.user_phone_number, user_log.collection_time, user_log.new_balance, user_log.type_of_payment FROM cashier, user, user_log WHERE user_log.cashier_id = cashier.cashier_id AND user.user_id = '".$player_id."' AND user.user_id = user_log.user_id AND user_log.user_id = '".$player_id."' and user_log.status = '1' ORDER BY user_log.userlog_id DESC";


        //$query = "SELECT cashier.cashier_id, cashier.cashier_name, user_log.amount_collected, user_log.type_of_collection, user_log.previous_bal, user_log.notes, user_log.userlog_id, user.user_id, user.user_name, user.user_phone_number, user_log.collection_time, user_log.new_balance, user_log.type_of_payment FROM cashier, user, user_log WHERE user_log.cashier_id = cashier.cashier_id AND user_log.cashier_id = ".$_SESSION['cashier_id']." AND user.user_id = '".$player_id."' AND user.user_id = user_log.user_id AND user_log.user_id = '".$player_id."' and user_log.status = '1' ORDER BY user_log.userlog_id DESC";
        
        //echo $query;
        $result = $this->db->query($query);
        //print_r($result);

        return $result;       
        
    }

    public function displaylogbydate($user, $date) {

        $where = "user_log.cashier_id = cashier.cashier_id AND user.user_id = user_log.user_id";
        if(!empty($user) && $user != 'null')
        {
            $where.=" AND user.user_id = '".$user."' AND user_log.user_id = '".$user."'"; 
        }

        //if(!empty($date) && $date != 'null'){
            //$where.=" AND user_log.collection_time LIKE '%".$date."%'"; 
        //}


        $query = "SELECT cashier.cashier_id, cashier.cashier_name, user_log.amount_collected, user_log.type_of_collection, user_log.previous_bal, user_log.notes, user_log.userlog_id, user.user_id, user.user_name, user.user_phone_number, user_log.collection_time, user_log.new_balance, user_log.type_of_payment FROM cashier, user, user_log WHERE ".$where." ORDER BY user_log.userlog_id DESC";

        //echo $query;
        //die();
        $result = $this->db->query($query);
        //print_r($result);

        return $result;       
        
    }

    public function deletelogdata($logId){

        $query = "DELETE FROM `user_log` WHERE `userlog_id` = '".$logId."'";
        $result = $this->db->query($query);
        return $result;

    }

    public function deletecashier($logId){

        $query = "UPDATE `cashier` SET `status` = 'N' WHERE `cashier_id` = '".$logId."'";
        $result = $this->db->query($query);
        return $result;

    }


    public function deleteuser($logId){

        $query = "UPDATE `user` SET `status` = 'N' WHERE `user_id` = '".$logId."'";
        $result = $this->db->query($query);
        return $result;

    }


    public function closetransaction($user_id){

        $query = "UPDATE `user_log` SET `status` = '0' WHERE `user_id` = '".$user_id."' and `status` = '1'";
        $result = $this->db->query($query);
        return $result;

    }
    

    public function insertlogdata($inputParam){

        $query = "SELECT * FROM user_log WHERE user_id = '".$inputParam['player_id']."' AND user_log.status = '1' ORDER BY userlog_id DESC limit 0,1";
        $result = $this->db->query($query);

        //$previous_bal = $inputParam['previous_balance'];
        $previous_bal = 0;
        if(count($result)>0){
            $previous_bal = $result[0]['new_balance'];
        }
        
        $new_balance = 0;
        if($inputParam['type_of_collection'] == 'request'){
            if($inputParam['type_of_payment'] == 'ACC')
                $new_balance = $previous_bal+$inputParam['collection_amount'];
            else
                $new_balance = $previous_bal;
        }
        else if($inputParam['type_of_collection'] == 'refund'){
            //if($previous_bal == 0)
                //$new_balance = $inputParam['collection_amount'];
            //else
                $new_balance = $previous_bal-$inputParam['collection_amount'];
        }

        $paid = 'N';
        if($inputParam['type_of_payment'] == 'CASH') $paid = 'Y';

        $collection_time = date("Y-m-d H:i:s");

        $query = "INSERT INTO `user_log` (`cashier_id`, `user_id`, `amount_collected`, `type_of_collection`, `collection_time`, `type_of_payment`, `previous_bal`, `new_balance`, `paid`, `notes`, `status`) VALUES ('".$_SESSION['cashier_id']."', '".$inputParam['player_id']."', '".$inputParam['collection_amount']."', '".$inputParam['type_of_collection']."', '".$collection_time."', '".$inputParam['type_of_payment']."', '".$previous_bal."', '".$new_balance."', '".$paid."', '".$inputParam['notes']."', '1')";

        
        $result = $this->db->query($query);

        return $result;


    }
}
