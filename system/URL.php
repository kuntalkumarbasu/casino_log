<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

/**
 * Session Class
 *
 *
 * @author stephen
 *
 */
class URL {


	/**
	 * Constructor
	 *
	 * @access public
	 */
	public function __construct() {
	}
    
        public static function to($urlSufixPath=''){
            return BASEURL.$urlSufixPath;            
        }
}




