<?php if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');
	

	require_once dirname(__DIR__) . '/config/global.php';
	require_once dirname(__DIR__) . '/config/database.php';
	require_once dirname(__DIR__) . '/system/common.php';
	require_once dirname(__DIR__) . '/vendor/autoload.php';
	
/*
 *---------------------------------------------------------------
 * Gets the url
 *---------------------------------------------------------------
 */
	if(isset($_GET['url'])){
		$url = $_GET['url'];
	}

	
/*
 *---------------------------------------------------------------
 * LOAD REQURED CLASSES
 *---------------------------------------------------------------
 */
	//$inflect = new Inflection();


/*
 * --------------------------------------------------------------------
 * LOAD THE BOOTSTRAP FILE
 * --------------------------------------------------------------------
 *
 * And away we go...
 *
 */
	function callHook(){
		global $url;								// global variabls
		
		removeMagicQuotes();
		unregisterGlobals();

		require(dirname(__DIR__) . '/config/routing.php');

		$queryString = array();

		
		if (!isset($url) || $url=='')
		{
			$controller = $config['controller'];	// decrared in route.php in config
			$action 	= $config['action'];
		}
		else
		{
			$urlArray = array();
			$urlArray = explode("/",$url);
			$controller = $urlArray[0];
			array_shift($urlArray);
			if (isset($urlArray[0]))
			{
				$action = $urlArray[0];
				array_shift($urlArray);
				
				if($action=='') $action = $config['action'];
			}
			else
			{
				$action = $config['action'];
			}
			$queryString = $urlArray;
		}
		
		$controllerName = ucfirst($controller).'Controller';
		$dispatch = new $controllerName($controller,$action);
		
		if ((int)method_exists($controllerName, $action))
		{
			call_user_func_array(array($dispatch,$action),$queryString);
		}
		else
		{
			echo "$action can not be found in $controllerName";
			//header('Location: '.ERRORURL);
			exit;
		}
	}
	
	callHook();










