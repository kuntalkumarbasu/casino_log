<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

/**
 * Session Class
 *
 *
 * @author stephen
 *
 */
class Config {


	/**
	 * Constructor
	 *
	 * @access public
	 */
	public function __construct() {
	}
    
    public static function get($pathStr=''){
        //here not consider deeper folder file  
        $pathArr = explode('.',$pathStr);
        $configFile = require(dirname(__DIR__).'/config/'.$pathArr[0].'.php');
        if(count($pathArr) >= 2){
            if(is_array($configFile)&& isset($configFile[$pathArr[1]])){
                return $configFile[$pathArr[1]];
            }
        } elseif(is_array($configFile)){
           return $configFile;
        }
    }
}




