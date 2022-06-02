<?php if (realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) exit('No direct access allowed.');
define ('SERVER_NAME', $_SERVER['HTTP_HOST']);

$tempurlkey = '/casino_log/'; //cashier/

define('TEMPKEYURL',$tempurlkey);

define ('SERVER_PROTOCOL', (isset($_SERVER['HTTPS']) ? 'https' : 'http'));

$base_separator = '';

define('SERVER_BASE_PATH', $_SERVER['DOCUMENT_ROOT'] . $base_separator . $tempurlkey);

$subFolder =  str_replace('/'.TEMPKEYURL, "", str_replace('/index.php', "", $_SERVER['PHP_SELF']));

define('SUBFOLDER', $subFolder);

// app root path
define('BASEPATH', SERVER_BASE_PATH.'/');
//define('BASEPATH', SERVER_BASE_PATH.$subFolder.'/');

define ('SERVER_BASE_URL', '//'.SERVER_NAME); //.'/'.$tempurlkey

define ('SERVER_BASE_URL_FULL', SERVER_PROTOCOL . '://'.SERVER_NAME.'/'.$tempurlkey);

define ('SERVER_SECURE_BASE_URL', SERVER_PROTOCOL . '://'.SERVER_NAME.'/'.$tempurlkey);

define('IMG', SERVER_BASE_URL_FULL."img/");
define('IMG_UPLOAD', SERVER_BASE_URL_FULL."uploads/");

define('SITE_REACT_RES_URL', SERVER_BASE_URL."/casino_log/");
//define('SITE_REACT_RES_URL', SERVER_BASE_URL);

define('VIEWPATH', BASEPATH.'application/views/');
