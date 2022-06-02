<?php

  if(!isset($_SESSION['username'])){
      header("Location: ".SERVER_BASE_URL_FULL.'?url=index');
      exit;
  }

?>
