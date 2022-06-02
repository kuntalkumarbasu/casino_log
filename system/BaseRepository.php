<?php

if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) exit('No direct access allowed.');

//include_once GLOBAL_LIB_PATH.'memcache/MemcacheHelper.php';

/**
 * Controller Class
 * 
 * @author stephen
 */

class BaseRepository 
{
    
    public static function decrypt($data){

        // Store the cipher method 
        $ciphering = "AES-128-CTR"; 
  
        // Use OpenSSl Encryption method 
        $iv_length = openssl_cipher_iv_length($ciphering); 
        $options = 0; 

        // Non-NULL Initialization Vector for decryption 
        $decryption_iv = '1211109876543215'; 
  
        // Store the decryption key 
        $decryption_key = "ehY18p;4>_)F"; 
          
        // Use openssl_decrypt() function to decrypt the data 
        $data = openssl_decrypt ($data, $ciphering, $decryption_key, $options, $decryption_iv);

        return $data;
    }

    public static function encrypt($data) {

        // Store the cipher method 
        $ciphering = "AES-128-CTR"; 
  
        // Use OpenSSl Encryption method 
        $iv_length = openssl_cipher_iv_length($ciphering); 
        $options = 0; 
          
        // Non-NULL Initialization Vector for encryption 
        $encryption_iv = '1211109876543215'; 
          
        // Store the encryption key 
        $encryption_key = "ehY18p;4>_)F"; 
          
        // Use openssl_encrypt() function to encrypt the data 
        $data = openssl_encrypt($data, $ciphering, $encryption_key, $options, $encryption_iv); 

        return $data;
    }
   
    final public static function cryptoJsAesDecrypt($jsonString){
        $jsondata = json_decode($jsonString, true);
        try {
            $salt = hex2bin($jsondata["s"]);
            $iv  = hex2bin($jsondata["iv"]);
        } catch(Exception $e) { return null; }
        $ct = base64_decode($jsondata["ct"]);
        $concatedPassphrase = ENCRYPT_PHRASE.$salt;
        $md5 = array();
        $md5[0] = md5($concatedPassphrase, true);
        $result = $md5[0];
        for ($i = 1; $i < 3; $i++) {
            $md5[$i] = md5($md5[$i - 1].$concatedPassphrase, true);
            $result .= $md5[$i];
        }
        $key = substr($result, 0, 32);
        $data = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);
        return json_decode($data, true);
    }

    final public static function cryptoJsAesEncrypt($value){
        $salt = openssl_random_pseudo_bytes(8);
        $salted = '';
        $dx = '';
        while (strlen($salted) < 48) {
            $dx = md5($dx.ENCRYPT_PHRASE.$salt, true);
            $salted .= $dx;
        }
        $key = substr($salted, 0, 32);
        $iv  = substr($salted, 32,16);
        $encrypted_data = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
        $data = array("ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt));
        return json_encode($data);
    }
    
}   