<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');


/*
 *---------------------------------------------------------------
 * ERROR REPORTING
 *---------------------------------------------------------------
 *
 * If Envidoment variable is set to tuee.
 */
	
    error_reporting(E_ALL);
    date_default_timezone_set("America/New_York");
    ini_set('display_errors','Off');
    ini_set('log_errors', 'On');
    ini_set('error_log', BASEPATH. 'logs/errors/error.log');
    
	

/*
 *---------------------------------------------------------------
 * REMOVES MAGIC QUOTES
 *---------------------------------------------------------------
 *
 * Cleans the url
 */
	function stripSlashesDeep($value) {
		
		$value = is_array($value) ? array_map('stripSlashesDeep', $value) : stripslashes($value);
		return $value;
	}
	
	
	function removeMagicQuotes() {
		
		//if ( get_magic_quotes_gpc() ) {
			$_GET    = stripSlashesDeep($_GET   );
			$_POST   = stripSlashesDeep($_POST  );
			$_COOKIE = stripSlashesDeep($_COOKIE);
		//}
	}
	
	
	function unregisterGlobals() {
		
		if (ini_get('register_globals')) {
			$array = array('_SESSION', '_POST', '_GET', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES');
			foreach ($array as $value) {
				foreach ($GLOBALS[$value] as $key => $var) {
					if ($var === $GLOBALS[$key]) {
						unset($GLOBALS[$key]);
					}
				}
			}
		}
	}

	
/**
 *---------------------------------------------------------------
 * Load a Model file
 *---------------------------------------------------------------
 */	
	function load_model($name){
		
		if (file_exists(BASEPATH . 'application/models/' . $name . '.php'))
			require_once(BASEPATH . 'application/models/' . $name . '.php');

		else {
			echo $name,' Class Not Found';
			//header('Location: ' . ERRORURL);
			exit;
		}
	}

/**
 *---------------------------------------------------------------
 * Loads a view file
 *---------------------------------------------------------------
 */	
	function load_view($file_name, $var=false){
		
		if($var) extract($var);

		if (file_exists(BASEPATH . 'application/views/' . $file_name . '.php'))
			include(BASEPATH . 'application/views/' . $file_name . '.php');

		else {
			echo $name,' View Class Not Found';
			//header('Location: ' . ERRORURL);
			exit;
		}
	}

	function render_view($file_name, $var=false){
            ob_start();
            if($var) extract($var);

			if (file_exists(BASEPATH . 'application/views/' . $file_name . '.php'))
				include(BASEPATH . 'application/views/' . $file_name . '.php');

			else {
				echo $file_name,' View Class Not Found';
				//header('Location: ' . ERRORURL);
				exit;
			}
            $buffer = ob_get_contents();
            ob_end_clean();
            return $buffer;
    }


    function render_global_view($file_name, $var=false){
            ob_start();
            if($var) extract($var);

			if (file_exists(GLOBAL_VIEW_PATH . $file_name . '.php'))
				include(GLOBAL_VIEW_PATH . $file_name . '.php');

			else {
				echo $file_name,' View Class Not Found';
				//header('Location: ' . ERRORURL);
				exit;
			}
            $buffer = ob_get_contents();
            ob_end_clean();
            return $buffer;
    }