<?php include(VIEWPATH.'common/header.php'); ?>


   <body>
        
        <div id="page" data-page="adminprofile" data-admindetails='<?=json_encode($adminDetails,JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP |JSON_HEX_APOS|JSON_HEX_QUOT)?>' data-adminname="<?=$_SESSION['admin_username']?>"></div>
        
        <?php include(VIEWPATH.'common/footer.php'); ?>