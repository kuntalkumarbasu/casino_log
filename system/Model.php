<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

/**
 * Model Class
 *
 * @author stephen
 */
class Model {


	protected $db;		// dadabase

	function __construct() {

		$config = json_decode(DBDETAILS,true);
		$this->db = new Database($config['hostname'], $config['database'], $config['username'], $config['password']);

		
	}


}
